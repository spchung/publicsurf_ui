import { useState } from 'react';
import FolderList from './FolderList';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FolderList as IFolderListItem } from './types';

export default function Folders({ items }: IFolderListItem) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <FolderList items={items} />
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
