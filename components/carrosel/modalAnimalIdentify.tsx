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

export function ModalAnimalIdentify() {
  return (
    <Card className="fixed z-20 w-[400px] h-[400px] m-auto inset-x-0 inset-y-0 ">
      <CardHeader>
        <CardTitle>Classificar Espécie</CardTitle>
        <CardDescription>Adicione informações sobre a imagem</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Espécie</p>
        <Input />
      </CardContent>
      <CardContent>
        <p>Observação</p>
        <Textarea />
      </CardContent>
      <CardFooter>
        <Button>Adicionar</Button>
      </CardFooter>
    </Card>
  );
}
