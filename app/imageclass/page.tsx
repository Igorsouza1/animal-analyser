import { ButtonDemo } from "@/components/button";



export default function ImageClass() {
    return (
        <div className="text-center">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                Identificação Manual de Imagens
            </h1>
            <p className="leading-7 [&:not(:first-child)]:my-6">
                 Identifique manualmente as imagens<br/> para gerar dados e insights
            </p>
            <ButtonDemo content="Identificar Imagens"/>
        </div>
    )
}   