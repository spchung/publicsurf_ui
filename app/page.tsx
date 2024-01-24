'use client';
import Header from '@/components/Header';
import Photos from '@/components/Photos';

const photos = [
  {
    id: 1,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo1',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
  },
  {
    id: 2,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo2',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
  },
  {
    id: 3,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo3',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
  },
  {
    id: 4,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo4',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
  },
  {
    id: 5,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo5',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
  },
  {
    id: 6,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo6',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
  },
  {
    id: 7,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo7',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
  },
  {
    id: 8,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo8',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
  },
  {
    id: 9,
    userId: 1,
    userImg: 'https://i.pinimg.com/75x75_RS/29/09/4f/29094f008ff515bd5e01256ec4c0ffa3.jpg',
    name: 'photo9',
    s3Path: '',
    url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
  },
];

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="main">
        <Photos items={photos}></Photos>
      </div>
    </>
  );
}
