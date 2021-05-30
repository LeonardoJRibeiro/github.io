import styled from "styled-components";

export const Container = styled.div`
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: scroll;
  height: 100vh;
`;

export const Sticky = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Content = styled.div`
  height: 100vh;
  margin-top: -100vh;
  position: sticky;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`