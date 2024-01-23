import ImageList from '@mui/material/ImageList';
import PhotoCard from '../PhotoCard';
import { PhotoList } from '../types';

export default function PhotoList({ items }: PhotoList) {
  return (
    <ImageList
      variant="masonry"
      cols={3}
      gap={8}
      // sx={{
      //   mt: 0,
      //   px: 1,
      //   pt: 1,
      //   gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr)) !important',
      // }}
    >
      {items.map((photo) => (
        <PhotoCard key={photo.id} {...photo}></PhotoCard>
      ))}
    </ImageList>
  );
}
