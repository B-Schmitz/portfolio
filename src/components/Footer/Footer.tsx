import { FaLinkedin, FaGithub, FaSteam, FaDiscord } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { FooterSection } from './FooterElements';
import { ReactNode } from 'react';

function Footer() {
  const handleCopyDiscord = () => {
    toast.success('Discord copiado!');
    navigator.clipboard.writeText('Bernardo Schmitz#4131');
  };

  function ItemLink(href: string, label: string, icone: ReactNode) {
    return (
      <li className='item'>
        <a href={href} target='_blank' rel='noopener noreferrer' aria-label={label}>
          {icone}
        </a>
      </li>
    );
  }

  return (
    <FooterSection>
      <div className='Container'>
        <span>
          Coded with 💜 by{' '}
          <a
            href='https://github.com/B-Schmitz'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Link para meu github'
          >
            Bernardo Schmitz
          </a>
        </span>
        <ul>
          {ItemLink('https://www.linkedin.com/in/bernardo-ssantos/', 'Link para meu LinkedIn', <FaLinkedin />)}
          {ItemLink('https://github.com/B-Schmitz', 'Link para meu GitHub', <FaGithub />)}
          {ItemLink('https://steamcommunity.com/id/Selitto', 'Link para meu Steam', <FaSteam />)}
          {ItemLink(
            'https://discord.gg/bernardoschmitz',
            'Link para meu Discord',
            <FaDiscord onClick={handleCopyDiscord} />
          )}
        </ul>
      </div>
    </FooterSection>
  );
}

export default Footer;
