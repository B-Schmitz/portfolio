import styled from 'styled-components';
import Button from '../Button/Button';
import { theme } from 'theme/theme';
import { CloseIcon, NavMenu, NavBtn, NavLink } from './DropdownElements';

interface IDropdownProps {
  isOpen: boolean;
  toggle?: () => void;
}

const SiderBar = styled.div<IDropdownProps>`
  background: ${theme.background};
  position: fixed;
  height: 100%;
  width: 100%;
  /* top: 0; */
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

function Dropdown({ isOpen, toggle }: IDropdownProps) {
  return (
    <SiderBar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClickCapture={toggle} onClick={toggle} />
      <NavMenu>
        <NavLink onClick={toggle} className='menu-item' to='about' smooth>
          Sobre
        </NavLink>
        <NavLink onClick={toggle} className='menu-item' to='projects' smooth>
          Projetos
        </NavLink>
      </NavMenu>
      <NavBtn onClick={toggle}>
        <Button
          text='Currículo'
          link='https://drive.google.com/file/d/1hykLXSWL3SRtCLIEnup0ZEGhyYwY7BZO/view?usp=sharing'
        />
      </NavBtn>
    </SiderBar>
  );
}

export default Dropdown;
