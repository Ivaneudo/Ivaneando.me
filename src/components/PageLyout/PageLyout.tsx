import React, { ReactNode } from 'react';
import * as S from './Styles';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

export const MainContent = S.Main;