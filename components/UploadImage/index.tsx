import React, { useState } from 'react';

export default function UploadImage() {
  const [image, setImage] = useState<string>('');

  const toBase64 = (file: File | Blob): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result as string);
      };

      reader.readAsDataURL(file);
      reader.onerror = reject;
    });
  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (!file.type.includes('image')) return;
    const base64String: string = await toBase64(file);
    setImage(base64String);
  };
  return (
    <div>
      <label
        htmlFor="file"
        style={{ backgroundImage: `url(${image})` }}
        className="inline-flex h-80 w-80 cursor-pointer flex-col items-center justify-center rounded border border-dashed border-slate-500 bg-contain bg-center bg-no-repeat p-8 text-center hover:bg-slate-200"
      >
        {!image && (
          <>
            <span className="material-symbols-outlined mb-2 text-5xl">image</span>
            <p>Click to Select or Drag and Drop a Photo</p>
          </>
        )}
      </label>
      <input type="file" id="file" accept="image/*" onChange={onFileChange} className="hidden" />
    </div>
  );
}
