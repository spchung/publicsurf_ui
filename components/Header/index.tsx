import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';

export default function Header() {
  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-neutral-300 bg-inherit bg-slate-50 p-2 lg:px-8 lg:py-3">
        <nav className="flex items-center justify-between">
          <span>Logo</span>
          <Dropdown>
            <MenuButton className="rounded-lg p-2 hover:shadow-md">Username</MenuButton>
            <Menu
              className="!mt-2 overflow-hidden rounded-md bg-white py-1 shadow-md"
              slots={{ listbox: 'ul' }}
            >
              <MenuItem className="cursor-pointer px-3 py-2 hover:bg-cyan-200">Profile</MenuItem>
              <MenuItem className="cursor-pointer px-3 py-2 hover:bg-cyan-200">Log out</MenuItem>
            </Menu>
          </Dropdown>
        </nav>
      </header>
    </>
  );
}
