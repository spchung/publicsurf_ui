import Link from 'next/link';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { PhotoListItem } from '../types';

export default function PhotoCard({ id, url, name }: PhotoListItem) {
  return (
    <Link href={`/photo/${id}`}>
      <ImageListItem>
        <img
          srcSet={`${url}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${url}?w=248&fit=crop&auto=format`}
          alt="poster"
          loading="lazy"
        />
        <ImageListItemBar position="below" title={name} />
      </ImageListItem>
    </Link>
  );
}
