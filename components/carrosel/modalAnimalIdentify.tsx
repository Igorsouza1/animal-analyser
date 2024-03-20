import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "../ui/button";
import { DatabaseManager } from '../../lib/database';
import { useState } from "react";
import { revalidatePath } from "next/cache";


interface animalImage{
  imageList: string[]
}



export function ModalAnimalIdentify({ imageList }: animalImage) {
  const [especie, setEspecie] = useState('');
  const [observacao, setObservacao] = useState('');

  async function saveToDB() {
    const dbManager = new DatabaseManager();
    await dbManager.initialize();
    
    await dbManager.insertDataIntoTable(imageNames[0], folderNames[0], especie, 'Canis lupus familiaris', 'Mamífero', new Date(Date.now()), observacao, -20.4536, -54.5856);
    console.log(await dbManager.selectAllAnimals())
    console.log(imageNames)
  }



  // PEGAR O NOME DAS IMAGENS
  const imageNames = imageList.map(url => {
    const decodedUrl = decodeURIComponent(url);
    const parts = decodedUrl.split('\\');
    return parts.pop();
  });

  //PEGAR O NOME DA PASTA ---- PRECISA SER FEITO APENAS 1 VEZ
  const folderNames = imageList.map(url => {
    const decodedUrl = decodeURIComponent(url);
    const parts = decodedUrl.split('\\');
    return parts[parts.length - 2]; 
  });
  

  return (
    <Card className="fixed z-20 w-[400px] h-[400px] m-auto inset-x-0 inset-y-0">
      <CardHeader>
        <CardTitle>Classificar Espécie</CardTitle>
        <CardDescription>Adicione informações sobre a imagem</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Espécie</p>
        <Input autoFocus value={especie} onChange={(e) => setEspecie(e.target.value)} />
      </CardContent>
      <CardContent>
        <p>Observação</p>
        <Textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} />
      </CardContent>
      <CardFooter>
        <Button onClick={saveToDB}>Adicionar</Button>
      </CardFooter>
    </Card>
  );
}
