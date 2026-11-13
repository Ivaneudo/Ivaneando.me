import { Menu } from 'lucide-react';
import * as S from './Styles';

interface MobileHeaderProps {
  onMenuClick: () => void;
}

export function MobileHeader({ onMenuClick }: MobileHeaderProps) {
  return (
    <S.Container>
      <S.MenuButton onClick={onMenuClick}>
        <Menu size={24} />
      </S.MenuButton>
      <S.Logo>
        Ivaneando<span>.me</span>
      </S.Logo>
    </S.Container>
  );
}