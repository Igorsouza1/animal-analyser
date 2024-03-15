import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useHotkeys } from "react-hotkeys-hook";
import { ModalAnimalIdentify } from "./modalAnimalIdentify";

export function Carrosel({ imageList }: { imageList: string[] }) {

const [currentIndex, setCurrentIndex] = React.useState(0);
const [isModalOpen, setIsModalOpen] = React.useState(false);


const nextImage = () => {
  setCurrentIndex((prevIndex: number) => (prevIndex + 1) % imageList.length);
};


const prevImage = () => {
  setCurrentIndex((prevIndex: number) => (prevIndex - 1 + imageList.length) % imageList.length);
};


useHotkeys('right', nextImage);
useHotkeys('left', prevImage);
useHotkeys('m', () => setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen));

return (
  <Carousel className="w-full">
    <CarouselContent>
      <CarouselItem key={currentIndex}>
        <div className="p-0">
          <Card>
            <div className="w-full flex justify-center">
              <h1>{currentIndex + 1}/{imageList.length}</h1>
            </div>
            <CardContent className="flex items-center justify-center">
              <img src={imageList[currentIndex]} alt={`Imagem ${currentIndex + 1}`} className="max-w-full max-h-[90vh]" />
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    </CarouselContent>
    <CarouselPrevious onClick={prevImage}   />
    <CarouselNext onClick={nextImage} />
    {isModalOpen && <ModalAnimalIdentify />}
  </Carousel>
);
}