import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Carrosel({ imageList }: { imageList: string[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {imageList.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-0">
              <Card>
                <CardContent className="flex items-center justify-center">
                  <img src={src} alt={`Imagem ${index + 1}`} className="max-w-full max-h-[90vh]"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
