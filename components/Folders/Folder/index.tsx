import Link from 'next/link';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { FolderListItem } from '../types';
import style from './Folder.module.scss';

export default function Folder({ id, name }: FolderListItem) {
  return (
    <Link href={`/user/photo-management/folder/${id}/photo`}>
      <ImageListItem>
        <img src={'/folder.png'} alt="folder" />
      </ImageListItem>
      {/* <ImageListItemBar position="below" title={name} className={style.folderFooter} /> */}
      <div className={style.folderFooter}>{name}</div>
    </Link>
  );
}
