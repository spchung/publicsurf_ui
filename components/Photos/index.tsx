import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import PhotoList from './PhotoList';
import { PhotoList as IPhotoList } from './types';

export default function Photos({ items }: IPhotoList) {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <PhotoList items={items} />
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CircularProgress />
        </Box>
      )}
    </>
  );
}
