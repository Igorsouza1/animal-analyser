import { ButtonBase } from "@/components/button";




export default function IAAnalyser() {
    return (
        <div className="text-center p-6 h-screen m-auto flex flex-col items-center justify-center">
            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
                Detecção de Animais com IA
            </h1>
            <p className="leading-7 [&:not(:first-child)]:my-6">
                 Selecione uma pasta e analise milhares<br/> de imagens de forma rápida!
            </p>
            <ButtonBase content="Analisar Imagens"/>
        </div>
    );
}
