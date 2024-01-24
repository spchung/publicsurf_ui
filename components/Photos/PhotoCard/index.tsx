import Link from 'next/link';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { PhotoListItem } from '../types';
import style from './PhotoCard.module.scss';

export default function PhotoCard({ id, url, name, userImg }: PhotoListItem) {
  return (
    <Link href={`/photo/${id}`}>
      <ImageListItem>
        <img
          srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${url}?w=248&fit=crop&auto=format`}
          alt="poster"
          loading="lazy"
        />
        <Box className={style.photoFooter}>
          <div className={style.userInfo}>
            <Avatar alt={name} src={userImg} className={style.userInfo_avatar} />
            <span>{name}</span>
          </div>
          <div>烏石港北提</div>
        </Box>
      </ImageListItem>
    </Link>
  );
}
