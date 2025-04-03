import mailIcon from './svg/mail.svg'
import calendarIcon from './svg/calendar.svg'
import notionIcon from './svg/notion.svg'
import githubIcon from './svg/github.svg'
import keepIcon from './svg/keep.svg'
import type { Link } from './types/link'

export const links: Link[] = [
  { href: 'https://mail.google.com', icon: mailIcon, bind: 'm' },
  { href: 'https://calendar.google.com', icon: calendarIcon, bind: 'c' },
  { href: 'https://keep.google.com', icon: keepIcon, bind: 'k' },
  { href: 'https://notion.so', icon: notionIcon, bind: 'n' },
  { href: 'https://github.com', icon: githubIcon, bind: 'g' },
  { href: 'https://gitlab.com', bind: 'G' },
  { href: 'https://discord.com/app', bind: 'D' },
  { href: 'https://tuta.io', bind: 'M' },
  { href: 'https://chess.com', bind: 'C' },
]
