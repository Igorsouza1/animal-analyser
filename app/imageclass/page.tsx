'use client'

import { ButtonBase } from "@/components/button";
import { open } from "@tauri-apps/api/dialog";
import { redirect, useRouter } from "next/navigation";

export default function ImageClass() {
  const router = useRouter();

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

        router.push(`/imageclass/imageIdentify?path=${encodeURIComponent(selectedPatch[0])}`);
      } catch (err) {
        console.error("Erro ao abrir a janela", err);
      }

  };

  return (
    <div className="text-center p-6 h-screen m-auto flex flex-col items-center justify-center">
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
