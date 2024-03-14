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

        // Assumindo que selectedPath é uma string com o caminho do diretório selecionado
        // Navegação programática para a página de destino com o caminho da pasta como parâmetro de consulta
        router.push(`/imageclass/imageIdentify?path=${encodeURIComponent(selectedPatch[0])}`);
      } catch (err) {
        console.error("Erro ao abrir a janela", err);
      }
        //   const entries = await readDir(selectedPatch[0]);

        //   const processImages = async function processEntries(entries: any) {
        //     let images = [];
        //     for (const entry of entries) {
        //       console.log(`Entry: ${entry.path}`);
        //       if (entry.children) {
        //         await processEntries(entry.children); 
        //       } else {
        //         images.push(convertFileSrc(entry.path));
        //       }
        //     }
        //     return images;
        //   };

        //   processImages(entries).then(images => {
        //     setImageList(images);
        //   });

        
        //   console.log(processImages(entries));
        //   console.log(selectedPatch);
        //   console.log(entries);
        // } catch (err) {
        //   console.log("Erro ao abrir a janela", err);
        // }

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
