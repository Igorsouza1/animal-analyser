'use client'


import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { readDir } from '@tauri-apps/api/fs';
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { Carrosel } from '@/components/carrosel/carrosel';
import { InfoImages } from '@/components/infoImages/infoimages';



export default function ImageIdentify() {
  const [imageList, setImageList] = useState([]);
  const searchParams = useSearchParams();


  // Obter o caminho da pasta de imagens da URL
  const folderPath = searchParams.get('path');

  useEffect(() => {
    const loadImages = async () => {
      if (!folderPath) return;

      try {
        const decodedFolderPath = decodeURIComponent(folderPath);
        const entries = await readDir(decodedFolderPath);
        
        const images = entries.map(entry => convertFileSrc(entry.path) as never);
        setImageList(images);
      } catch (err) {
        console.error("Erro ao carregar imagens:", err);
      }
    };

    loadImages();
  }, [folderPath]);


  

  return (
    <div className='flex p-6 h-screen'>
      <div className="w-full">
      <Carrosel imageList={imageList} />
      </div>
      <div className='fixed top-0 right-0'>
        <InfoImages imageList={imageList}/>
      </div>
      
    </div>
  );
}
