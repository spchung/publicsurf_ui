'use client';
import Folders from '@/components/Folders';
const folders = [
  {
    id: 1,
    name: '20240130hjhjhjhjhjhjhjhjhjhjhjhj',
  },
  {
    id: 2,
    name: '20240131',
  },
  {
    id: 3,
    name: '20240201spofmvckwscdmoaskdmv',
  },
  {
    id: 4,
    name: '20240202',
  },
];

export default function PhotoManagement() {
  return <Folders items={folders}></Folders>;
}
