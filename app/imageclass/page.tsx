'use client'

import { ButtonBase } from "@/components/button";
import { useFolderPicker, hasImageFiles } from "@/utils/useFolderPick";
import { useRouter } from "next/navigation";

export default function ImageClass() {
  const { selectFolder } = useFolderPicker();
  const router = useRouter();

  const handleIdentifyImages = async () => {
    const selectedPath = await selectFolder();
    if (selectedPath && await hasImageFiles(selectedPath)) {
      router.push(`/imageclass/imageIdentify?path=${encodeURIComponent(selectedPath)}`);
    }

    
  };

  return (
    <div className="text-center p-6 h-screen m-auto flex flex-col items-center justify-center">
      <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
        Identificação Manual de Imagens
      </h1>
      <p className="leading-7 [&:not(:first-child)]:my-6">
        Identifique manualmente as imagens para gerar
        <br />  dados e insights
      </p>
      <ButtonBase
        onClick={handleIdentifyImages}
        content="Identificar Imagens"
      />
    </div>
  );
}
