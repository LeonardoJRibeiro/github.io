import { MotionValue } from 'framer-motion';
import React, { useContext, useEffect, useRef } from 'react';
import WrapperContext from '../../contexts/WrapperContext';
import useSectionScroll from '../../hooks/useSectionScroll';
import { Container, } from './styles';

interface Props {
  name: string;
  content: (scroolY: MotionValue) => React.ReactNode;
}

export default function Section({ name, content }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const scrollProgress = useSectionScroll(ref);

  const { registerSection } = useContext(WrapperContext);

  useEffect(() => {
    registerSection({ name: name, content: content(scrollProgress) });
  }, [content, name, registerSection, scrollProgress]);

  return (
    <Container ref={ref} />
  );
}
