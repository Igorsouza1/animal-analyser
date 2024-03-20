import { useEffect, useState } from 'react';
import { DatabaseManager } from '../../lib/database';
import { revalidatePath } from 'next/cache';

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
  
  // Interface para as props do componente
  interface HistoricoImagesProps {
    animals: animalType[]; // Define que a propriedade animals é um array de animalType
  }
export function HistoricoImages(props: HistoricoImagesProps) {
    const [animals, setAnimals] = useState<animalType[]>([]);

    async function getHistory() {
        const dbManager = new DatabaseManager();
        await dbManager.initialize();
        const animalsData = await dbManager.selectAllAnimals() as animalType[];;
        setAnimals(animalsData); // Atualiza o estado de animals com os dados obtidos
    }

    useEffect(() => {
        getHistory();
    }, []); 


    return (
        <div className="max-w-sm mx-auto my-1">
        <div className="border rounded-lg">
          <div className="p-3 border-b">
            <h2 className="text-lg font-semibold">Histórico</h2>
          </div>
          <ul className="divide-y">
          {animals.map((animal, index) => (
                        <li key={index} className="p-3">{animal.ID} - {animal.Especie}</li>
                    ))}
          </ul>
        </div>
      </div>
    )
}