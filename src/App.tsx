import React from 'react';
import { Wrapper } from "./contexts/WrapperContext";
import Section from './components/Section';
import Section01 from './sections/Section01';
function App() {

  return (
    <Wrapper>
      <div>
        <Section name='a' content={(scroll) => <Section01 scrollYProgress={scroll} />} />
        <Section name='a' content={(v) =>
          <div></div>
        } />

        <Section name='a' content={(v) =>
          <div></div>
        } />
        <Section name='a' content={(v) =>
          <div></div>
        } />
        <Section name='a' content={(v) =>
          <div></div>
        } />
        <Section name='a' content={(v) =>
          <div></div>
        } />
      </div>
    </Wrapper>
  );
}

export default App;
