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
import { Store } from "tauri-plugin-store-api";
import Database from "tauri-plugin-sql-api";


export function ModalAnimalIdentify() {

  async function saveToStore() {
    const db = await Database.load("sqlite:test.sqlite");
    
    try {
      await db.execute("CREATE TABLE IF NOT EXISTS animal (id INTEGER PRIMARY KEY,nome TEXT NOT NULL, obs TEXT);");
      await db.execute("INSERT INTO animal (nome, obs) VALUES ('João', 'Observação sobre João'), ('Maria', 'Observação sobre Maria'), ('Pedro', NULL); -- Pedro não possui observação")
      
      console.log("CERTO")
      console.log(await db.select("SELECT * FROM animal"))
    } catch (e) {
      console.error("Falha ao salvar na store", e);
      console.log("Falha")
    }
  }
  

  return (
    <Card className="fixed z-20 w-[400px] h-[400px] m-auto inset-x-0 inset-y-0">
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
        <Button onClick={saveToStore}>Adicionar</Button>
      </CardFooter>
    </Card>
  );
}
