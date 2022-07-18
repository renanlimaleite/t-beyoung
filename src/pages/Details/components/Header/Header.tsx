import { ReactNode } from 'react'
import S from './header.module.scss'

type HeaderProps = {
  children: ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header className={S.header}>
      {children}
    </header>
  )
}