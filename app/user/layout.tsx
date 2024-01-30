import React from 'react';
import Sidebar from '@/components/Sidebar';
import style from './User.module.scss';

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.user}>
      <Sidebar></Sidebar>
      <div className={style.userMain}>{children}</div>
    </div>
  );
}
