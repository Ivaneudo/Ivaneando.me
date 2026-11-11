import type { AppProps } from 'next/app';
import { useState } from 'react';
import { ThemeProvider, Global, css } from '@emotion/react';
import { darkTheme, lightTheme } from '@/theme/theme';

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          body {
            background-color: ${currentTheme.background};
            color: ${currentTheme.text};
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            transition: background-color 0.2s ease, color 0.2s ease;
          }
        `}
      />
      <Component {...pageProps} onToggleTheme={toggleTheme} isDark={isDark} />
    </ThemeProvider>
  );
}