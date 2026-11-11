export interface ThemeType {
  background: string;
  surface: string;
  surfaceBorder: string;
  text: string;
  textMuted: string;
  primary: string; // #C90000
  primaryHover: string;
  codeBg: string;
}

export const darkTheme: ThemeType = {
  background: '#191A1B',
  surface: '#202224',
  surfaceBorder: '#2E3033',
  text: '#F2F2F2',
  textMuted: '#9E9E9E',
  primary: '#C90000',
  primaryHover: '#A00000',
  codeBg: '#121314',
};

export const lightTheme: ThemeType = {
  background: '#F7F8FA',
  surface: '#FFFFFF',
  surfaceBorder: '#E2E4E8',
  text: '#191A1B',
  textMuted: '#666B71',
  primary: '#C90000',
  primaryHover: '#A00000',
  codeBg: '#E9EBEF',
};