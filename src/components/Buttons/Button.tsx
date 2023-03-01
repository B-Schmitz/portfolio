import { useState } from 'react';
import { theme } from '../../theme/theme';
import css from './button.module.css';

interface IButtonProps {
  background?: string;
  color?: string;
  text?: string;
  link?: string;
}

function Button({ background = theme.onBackground, color = theme.title, text, link }: IButtonProps) {
  const [hover, setHover] = useState(false);
  return (
    <a
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      className={css.btn}
      style={{ backgroundColor: hover ? theme.white : background, color: hover ? theme.onBackground : color }}
      href={link ? link : '#'}
      target={link ? '_blank' : ''}
      rel='noopener noreferrer'
    >
      {text}
    </a>
  );
}

export default Button;
