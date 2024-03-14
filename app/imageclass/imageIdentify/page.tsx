'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { readDir } from '@tauri-apps/api/fs';
import { convertFileSrc } from "@tauri-apps/api/tauri";

export default function ImageIdentify() {
  const [imageList, setImageList] = useState([]);
  const searchParams = useSearchParams();

  // Obter o caminho da pasta de imagens da URL
  const folderPath = searchParams.get('path');

  useEffect(() => {
    const loadImages = async () => {
      if (!folderPath) return;

      try {
        // Decodificar o caminho da pasta
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
    <div>
      <h1>Imagens da Pasta</h1>
      {imageList.map((src, index) => (
        <img key={index} src={src} alt={`Imagem ${index}`} width="300" height="300" />
      ))}
    </div>
  );
}
