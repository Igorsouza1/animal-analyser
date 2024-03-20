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
import { useState } from "react";

interface modalProps{
  onAdicionar: (especie: string, observacao: string) => void;
}


export function ModalAnimalIdentify({ onAdicionar }: modalProps) {
  const [especie, setEspecie] = useState('');
  const [observacao, setObservacao] = useState('');
  


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
        <Button onClick={() => onAdicionar(especie, observacao)}>Adicionar</Button>
      </CardFooter>
    </Card>
  );
}
