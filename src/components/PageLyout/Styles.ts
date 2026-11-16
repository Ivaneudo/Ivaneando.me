import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
`;

export const Main = styled.main<{ isSidebarOpen: boolean }>`
  flex: 1;
  margin-left: ${({ isSidebarOpen }) => (isSidebarOpen ? '280px' : '0')};
  padding: 2.5rem 2rem;
  padding-top: ${({ isSidebarOpen }) => (isSidebarOpen ? '2.5rem' : '4.5rem')};
  min-height: 100vh;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1.5rem 1rem;
    padding-top: 4.5rem;
  }
`;