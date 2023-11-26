'use client';
import Header from '@/components/Header';
import UploadImage from '@/components/UploadImage';

export default function Home() {
  return (
    <div className="container-fluid">
      <Header></Header>
      <main className="container mx-auto">
        <UploadImage></UploadImage>
      </main>
    </div>
  );
}
