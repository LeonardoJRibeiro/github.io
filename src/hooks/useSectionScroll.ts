import { useTransform } from "framer-motion";
import { RefObject, useCallback, useEffect, useLayoutEffect, useState } from "react";
import useWrapperScroll from '../hooks/useWrapperScroll';

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

export default function useSectionSroll(ref: RefObject<HTMLDivElement>) {
  const { scrollY, } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: ref.current?.offsetTop ?? 0,
      offsetHeight: ref.current?.offsetHeight ?? 0
    } as SectionDimensions
  }, [ref])

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  )

  useEffect(() => {
    setDimensions(getSectionDimensions());
  }, [getSectionDimensions])

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() => setDimensions(getSectionDimensions()))
    }

    window.addEventListener('resize', onResize)

    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimensions, ref])

  return useTransform(
    scrollY,
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight
  )
}