import { ButtonBase } from "@/components/button";


interface titleProps{
    title: string
}

interface DescriptionProps{
    description: string
}


export default function IAAnalyser() {
    return (
        <ContainerAction>
            <TitleContainerAction title="Analise de Imagens com Inteligência Artificial"/>
            <DescriptionContainerAction description={`Selecione a pasta e analise milhares de imagens`}/>
            <ButtonBase content="Analisar Imagens"/>
        </ContainerAction>
    );
}


export function ContainerAction({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div className="text-center p-6 h-screen m-auto flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export function TitleContainerAction({ title }: titleProps) {
    return (
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            {title}
        </h1>
    )
}

export function DescriptionContainerAction({ description }: DescriptionProps) {
    return (
        <p className="leading-7 [&:not(:first-child)]:my-6">
            {description}
        </p>
    )
}