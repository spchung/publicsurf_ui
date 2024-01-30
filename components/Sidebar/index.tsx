import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from 'next/link';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import style from './Sidebar.module.scss';

const pages = [
  {
    name: 'My Account',
    path: '/user/account',
  },
  {
    name: 'Purchased',
    path: '/user/purchased',
  },
  {
    name: 'Photo Management',
    path: '/user/photo-management',
  },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent" className={style.sidebar}>
      <Toolbar></Toolbar>
      <List>
        {pages.map((page) => (
          <ListItem key={page.name}>
            <Link href={page.path}>
              <ListItemText primary={page.name}></ListItemText>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
