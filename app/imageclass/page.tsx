'use client'

import { ButtonBase } from "@/components/button";
import { open } from "@tauri-apps/api/dialog";
import { readDir } from '@tauri-apps/api/fs';
import { convertFileSrc } from "@tauri-apps/api/tauri";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function ImageClass() {
  const [imageList, setImageList] = useState<string[]>([]);


  const handleIdentifyImages = async () => {
    try {
      const selectedPatch = await open({
        multiple: true,
        title: "Selecione uma imagem",
        directory: true,
      });

      if (!selectedPatch) {
        return;
      }

      const entries = await readDir(selectedPatch[0]);

      const processImages = async function processEntries(entries: any) {
        let images = [];
        for (const entry of entries) {
          console.log(`Entry: ${entry.path}`);
          if (entry.children) {
            await processEntries(entry.children); 
          } else {
            images.push(convertFileSrc(entry.path));
          }
        }
        return images;
      };

      processImages(entries).then(images => {
        setImageList(images);
      });

     
      console.log(processImages(entries));
      console.log(selectedPatch);
      console.log(entries);
    } catch (err) {
      console.log("Erro ao abrir a janela", err);
    }
  };

  return (
    <div className="text-center p-6">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        Identificação Manual de Imagens
      </h1>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        Identifique manualmente as imagens
        <br /> para gerar dados e insights
      </p>
      <ButtonBase
        onClick={handleIdentifyImages}
        content="Identificar Imagens"
      />

      

      {/* Renderize condicionalmente a imagem se imageList tiver elementos */}
      {imageList.length > 0 && (
        redirect('imageclass/imageIdentify')
      )
      }
    </div>
  );
}
