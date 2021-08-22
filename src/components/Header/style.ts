import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  padding-top: 2rem;

  > div {
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
