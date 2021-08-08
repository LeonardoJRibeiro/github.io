import React from 'react';
import { Wrapper } from "./contexts/WrapperContext";
import Section from './components/Section';
import Section01 from './sections/Section01';
import Section02 from './sections/Section02';
function App() {

  return (
    <Wrapper>
      <div>
        <Section content={(scroll) => <Section01 scrollYProgress={scroll} />} />
        <Section content={(scroll) => <Section02 scrollYProgress={scroll} />  } />

        <Section content={(v) =>
          <div></div>
        } />
        <Section content={(v) =>
          <div></div>
        } />
        <Section content={(v) =>
          <div></div>
        } />
      </div>
    </Wrapper>
  );
}

export default App;
