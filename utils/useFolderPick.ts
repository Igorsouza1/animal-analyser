// hooks/useFolderPicker.js
import { open } from "@tauri-apps/api/dialog";
import { readDir } from "@tauri-apps/api/fs";

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png']

export const useFolderPicker = () => {
  const selectFolder = async () => {
    try {
      const selectedPaths = await open({
        multiple: true,
        title: "Selecione uma pasta",
        directory: true,
      });

      
      if (!selectedPaths || selectedPaths.length === 0) {
        return null;
      }

      // Retorna o primeiro caminho selecionado
      return selectedPaths[0];
    } catch (err) {
      console.error("Erro ao abrir a janela de seleção", err);
      return null;
    }
  };

  return { selectFolder };
};


export const hasImageFiles = async (folderPath: string) => {
    try {
      const files = await readDir(folderPath);
      const imageExtensions = IMAGE_EXTENSIONS
      console.log(files.some(file => file.name !== undefined && imageExtensions.some(ext => (file.name?.toLowerCase() ?? '').endsWith(ext))))
      return files.some(file => file.name !== undefined && imageExtensions.some(ext => (file.name?.toLowerCase() ?? '').endsWith(ext)));
    } catch (err) {
      console.error("Erro ao ler os arquivos da pasta", err);
      return false;
    }
  };





