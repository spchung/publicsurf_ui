import ImageList from '@mui/material/ImageList';
import Folder from '../Folder';
import { FolderList as IFolderListItem } from '../types';

export default function FolderList({ items }: IFolderListItem) {
  return (
    <ImageList
      gap={36}
      sx={{
        mt: 0,
        px: 1,
        pt: 1,
        gridTemplateColumns: 'repeat(auto-fill, 100px) !important',
      }}
    >
      {items.map((folder) => (
        <Folder key={folder.id} {...folder}></Folder>
      ))}
    </ImageList>
  );
}
