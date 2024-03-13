import Image from 'next/image'




export default function ImageIdentify() {
  return (
    <div className="flex w-screen h-screen m-0">
      <div className="w-full md:w-3/4 border border-gray-200">
      <Image
        src="/logo.png"
        width={500}
        height={500}
        alt="Picture of the author"
       />

      </div>
      <div className="w-full md:w-1/4 border border-gray-200">
        <h1>Identificação Manual de Imagens</h1>
      </div>
    </div>
  );
}
