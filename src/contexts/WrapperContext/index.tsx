import React, { useCallback, useRef, useState } from "react";
import { Container, Content, Sticky } from './styles';

interface Section {
  name: string;
  content: React.ReactNode;
}

interface WrapperContext {
  wrapperRef: React.RefObject<HTMLElement>;
  sections: Section[];
  registerSection: (section: Section) => void;
}

const WrapperContext = React.createContext<WrapperContext>({} as WrapperContext);

interface Props {
  children: React.ReactNode;
}


export function Wrapper({ children }: Props): JSX.Element {
  const ref = useRef<HTMLDivElement>({} as HTMLDivElement);
  const [sections, setSections] = useState<Section[]>([])
  const registerSection = useCallback((section: Section) =>
    setSections(sections => [...sections, section])
    , []);

  return (
    <WrapperContext.Provider value={{ wrapperRef: ref, sections, registerSection }}>
      <Container ref={ref}>
        <Sticky>
          {sections.map((section, key) => <Content key={key}>{section.content}</Content>)}
        </Sticky>
        {children}
      </Container>
    </WrapperContext.Provider>
  )
}


export default WrapperContext;