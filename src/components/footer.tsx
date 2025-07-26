"use client";

import { motion } from '@/components/motion';
import { strings } from '@/lib/strings';
import { data } from '@/lib/data';
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: data.socials.github, Icon: GithubLogoIcon },
    { name: 'LinkedIn', href: data.socials.linkedin, Icon: LinkedinLogoIcon },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">

          <p className="text-sm text-muted-foreground">{strings.footer.copyright}</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ y: -2, scale: 1.1, color: 'hsl(var(--primary))' }}
              className="text-muted-foreground"
            >
              <social.Icon className="h-6 w-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}
