import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import style from './Header.module.scss';

export default function Header() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <span>Logo</span>
          <Dropdown>
            <MenuButton className={style.menuButton}>Username</MenuButton>
            <Menu
              className={style.menu}
              slots={{ listbox: 'ul' }}
            >
              <MenuItem className={style.menuItem}>Profile</MenuItem>
              <MenuItem className={style.menuItem}>Log out</MenuItem>
            </Menu>
          </Dropdown>
        </nav>
      </header>
    </>
  );
}
