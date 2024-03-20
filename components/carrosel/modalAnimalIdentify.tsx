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



export function ModalAnimalIdentify() {
  const [especie, setEspecie] = useState('');
  const [observacao, setObservacao] = useState('');

  async function saveToDB() {
    const dbManager = new DatabaseManager();
    await dbManager.initialize();
    
    await dbManager.insertDataIntoTable('imagem1.jpg', 'Câmera A', especie, 'Canis lupus familiaris', 'Mamífero', new Date(Date.now()), observacao, -20.4536, -54.5856);
    console.log(await dbManager.selectAllAnimals())
  }
  

  return (
    <Card className="fixed z-20 w-[400px] h-[400px] m-auto inset-x-0 inset-y-0">
      <CardHeader>
        <CardTitle>Classificar Espécie</CardTitle>
        <CardDescription>Adicione informações sobre a imagem</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Espécie</p>
        <Input value={especie} onChange={(e) => setEspecie(e.target.value)} />
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
