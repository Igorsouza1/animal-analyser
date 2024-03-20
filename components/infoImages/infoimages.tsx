import { HistoricoImages } from "../historicoImages/historicoImages";
import { ModalAnimalIdentify } from "@/components/carrosel/modalAnimalIdentify";
import { DatabaseManager } from "@/lib/database";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

interface animalType {
    ID?: number; // Adicionado como exemplo, ajuste conforme sua necessidade
    IMG?: string;
    CAM?: string;
    Especie?: string;
    NomeCientifico?: string;
    Grupo?: string;
    Data?: Date;
    OBS?: string | '';
    Latitude?: number;
    Longitude?: number;
  }

interface animalImage {
  imageList: string[];
}

export function InfoImages({ imageList }: animalImage) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animals, setAnimals] = useState<animalType[]>([]);

  useHotkeys("m", () => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen));

  const handleAdicionar = async (especie: string, observacao: string) => {
    await saveToDB(especie, observacao)
  };



  async function saveToDB(especie: string | undefined, observacao: string | undefined) {
    const dbManager = new DatabaseManager();
    await dbManager.initialize();
    await dbManager.insertDataIntoTable(imageNames[0], folderNames[0], especie, 'Canis lupus familiaris', 'Mamífero', new Date(Date.now()), observacao, -20.4536, -54.5856);
    console.log(await dbManager.selectAllAnimals())
    const novosAnimais = await dbManager.selectAllAnimals() as animalType[];
    setAnimals(novosAnimais);
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen)
  }

  // PEGAR O NOME DAS IMAGENS
  const imageNames = imageList.map((url) => {
    const decodedUrl = decodeURIComponent(url);
    const parts = decodedUrl.split("\\");
    return parts.pop();
  });

  //PEGAR O NOME DA PASTA ---- PRECISA SER FEITO APENAS 1 VEZ
  const folderNames = imageList.map((url) => {
    const decodedUrl = decodeURIComponent(url);
    const parts = decodedUrl.split("\\");
    return parts[parts.length - 2];
  });

  return (
    <div className="w-56 h-screen flex flex-col p-5 bg-white border border-r border-gray-200 rounded-lg">
      <div className="flex flex-col justify-center">
        <div>
          <HistoricoImages animals={animals}/>
        </div>
      </div>
      {isModalOpen && <ModalAnimalIdentify onAdicionar={handleAdicionar} />}
    </div>
  );
}
