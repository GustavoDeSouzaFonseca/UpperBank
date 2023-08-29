import Link from "next/link";
import Navbar from "./components/navbar";
import Image from "next/image";
import textura from '../../assets/textura.png'

export default function Home() {
  return (
    <main className="m-5">
     <Navbar/>

      <div className="flex row m-5 mt-20">
        <div className="flex flex-col w-[40rem] ml-40 items-center">
          <span className="text-6xl ">Facilite seu dinheiro com o <span className="text-7xl font-bold">Upper</span>Bank.</span>
          <div className="w-40 h-1 bg-lime-500 mt-10 mb-10 "/>
          <span className="text-slate-600 text-[12px] font-">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi suscipit quae eius corrupti eveniet et numquam accusamus illum optio, hic minus fugiat repellat alias distinctio nisi asperiores commodi minima. Et.</span>
        </div>

        <div className="flex flex-col w-[60rem] p-5">
          <div className="flex flex-col w-full bg-gradient-to-b from-zinc-700 to-zinc-900 h-[10rem] rounded-2xl">
            <Image
              src={textura}
              alt=""
              className="w-full"
            />
           
              <span className="text-white text-[11px] font-bold m-1">Agencia: 13123-3</span>
              <span className="text-white text-[11px] font-bold m-1">Conta: ****</span>

              <div className="w-[10rem] h-[3rem] bg-red-700 top-0 left-0">
                <span>Saldo e limites</span>
              </div>            
          </div>
        </div>
      </div>
    </main>
  )
}
