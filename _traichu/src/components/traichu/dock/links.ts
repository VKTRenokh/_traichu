import mailIcon from './svg/mail.svg';
import calendarIcon from './svg/calendar.svg';
import notionIcon from './svg/notion.svg';
import githubIcon from './svg/github.svg';
import keepIcon from './svg/keep.svg';
import type { Link } from './types/link';

const github = 'https://github.com';
const gitlab = 'https://gitlab.com';
const notion = 'https://notion.so';
const googleKeep = 'https://keep.google.com';
const calendar = 'https://calendar.google.com';
const googleMail = 'https://mail.google.com';
const discord = 'https://discord.com/app';
const tuta = 'https://tuta.io';

export const links: Link[] = [
  { href: googleMail, icon: mailIcon, bind: 'm' },
  { href: calendar, icon: calendarIcon, bind: 'c' },
  { href: googleKeep, icon: keepIcon, bind: 'k' },
  { href: notion, icon: notionIcon, bind: 'n' },
  { href: github, icon: githubIcon, bind: 'g' },
  { href: gitlab, bind: 'G' },
  { href: discord, bind: 'D' },
  { href: tuta, bind: 'M' },
  { href: 'https://chess.com', bind: 'C' },
];
