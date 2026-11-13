import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 860px;
  width: 100%;
  margin: 0 auto;
  line-height: 1.7;
  color: ${({ theme }) => theme.text};

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1.5rem auto;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.surfaceBorder};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.text};
    border-bottom: 1px solid ${({ theme }) => theme.surfaceBorder};
    padding-bottom: 0.3rem;
  }

  p {
    margin-bottom: 1.2rem;
  }

  a {
    color: ${({ theme }) => theme.primary};
    text-decoration: underline;
    font-weight: 500;
  }

  pre {
    background-color: ${({ theme }) => theme.codeBg};
    border: 1px solid ${({ theme }) => theme.surfaceBorder};
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: 1.2rem;
  }

  code {
    background-color: ${({ theme }) => theme.codeBg};
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
  }

  pre code {
    background-color: transparent;
    padding: 0;
  }

  blockquote {
    border-left: 4px solid ${({ theme }) => theme.primary};
    padding-left: 1rem;
    margin: 1.2rem 0;
    color: ${({ theme }) => theme.textMuted};
  }

  ul, ol {
    margin-bottom: 1.2rem;
    padding-left: 1.5rem;
  }
`;