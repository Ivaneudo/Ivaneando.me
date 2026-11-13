import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Main = styled.main`
  flex: 1;
  margin-left: 280px;
  padding: 2.5rem 2rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem 1rem;
    padding-top: 4.5rem;
  }
`;