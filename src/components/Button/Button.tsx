import {Button as ButtonElement} from './ButtonElement'

interface IButtonProps {
  text?: string;
  link?: string;
}

function Button({text, link }: IButtonProps) {
  return (
    <ButtonElement
      role={'button'}
      href={link ? link : '#'}
      target={link ? '_blank' : ''}
      rel='noopener noreferrer'
    >
      {text}
    </ButtonElement>
  );
}

export default Button;
