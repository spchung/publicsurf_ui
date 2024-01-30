'use client';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import Link from 'next/link';
import style from './Header.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <span>Logo</span>
        <Dropdown>
          <MenuButton className={style.menuButton}>Username</MenuButton>
          <Menu className={style.menu} slots={{ listbox: 'ul' }}>
            <Link href="/user/account">
              <MenuItem className={style.menuItem}>Profile</MenuItem>
            </Link>
            <MenuItem className={style.menuItem}>Log out</MenuItem>
          </Menu>
        </Dropdown>
      </nav>
    </header>
  );
}
