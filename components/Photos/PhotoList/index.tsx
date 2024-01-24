import ImageList from '@mui/material/ImageList';
import PhotoCard from '../PhotoCard';
import { PhotoList } from '../types';

export default function PhotoList({ items }: PhotoList) {
  return (
    <ImageList
      variant="masonry"
      cols={3}
      gap={8}
    >
      {items.map((photo) => (
        <PhotoCard key={photo.id} {...photo}></PhotoCard>
      ))}
    </ImageList>
  );
}
