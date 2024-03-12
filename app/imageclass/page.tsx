"use client";

import { ButtonBase } from "@/components/button";
import { open } from "@tauri-apps/api/dialog";
import { readBinaryFile } from '@tauri-apps/api/fs';

export default function ImageClass() {
  const handleIdentifyImages = async () => {
    try {
      const selectedPatch = await open({
        multiple: true,
        title: "Selecione uma imagem",
      });

      if (!selectedPatch) {
        return;
      }
      const contents = await readBinaryFile(selectedPatch[0]);

      console.log(selectedPatch);
      console.log(contents);
    } catch (err) {
      console.log("Erro ao abrir a janela", err);
    }
  };

  return (
    <div className="text-center">
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
    </div>
  );
}
