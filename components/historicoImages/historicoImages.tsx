import React, { useEffect, useRef } from 'react';

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

interface HistoricoImagesProps {
  animals: animalType[];
 }



export function HistoricoImages({ animals }: HistoricoImagesProps) {
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    }, [animals]);

    return (
        <div className="max-w-sm my-1">
        <div className="border rounded-lg">
          <div className="p-3 border-b">
            <h2 className="text-lg font-semibold">Histórico</h2>
          </div>
          <ul ref={listRef} className="divide-y overflow-y-auto h-64">
                    {animals.map((animal) => (
                        <li key={animal.ID} className="p-3">{animal.ID} - {animal.Especie}</li>
                    ))}
                </ul>
        </div>
      </div>
    )
}