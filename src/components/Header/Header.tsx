import Button from '../Buttons/Button';
import { Nav, Logo2, NavLink, Bars, NavMenu, NavBtn } from './HeaderElements';

interface IHeaderProps {
  toggle?: () => void;
}

const Header = ({ toggle }: IHeaderProps) => {
  return (
    <div className='Container'>
      <Nav>
        <Logo2>B</Logo2>
        <NavMenu>
          <NavLink className='menu-item' to='projects' smooth>
            Projetos
          </NavLink>
          <NavLink className='menu-item' to='about' smooth>
            Sobre
          </NavLink>
        </NavMenu>
        <NavBtn>
          <Button text='Currículo' link='https://drive.google.com/file/d/1hykLXSWL3SRtCLIEnup0ZEGhyYwY7BZO/view?usp=sharing' />
        </NavBtn>
        <Bars onClick={toggle} />
      </Nav>
    </div>
  );
};

export default Header;
