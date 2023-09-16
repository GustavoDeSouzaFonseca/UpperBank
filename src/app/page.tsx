import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="m-5">
      <Navbar />

      <div className="flex flex-col justify-center md:flex-row m-5 mt-20 gap-5 mx-10">
        <div className="flex flex-col w-full md:w-[40rem] items-center mb-5 md:mb-0">
          <span className="text-6xl">
            Facilite seu dinheiro com o{" "}
            <span className="text-7xl font-bold">Upper</span>Bank.
          </span>
          <div className="w-40 h-1 bg-lime-500 mt-10 mb-10" />
          <span className="text-slate-600 text-[12px] font-">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            suscipit quae eius corrupti eveniet et numquam accusamus illum
            optio, hic minus fugiat repellat alias distinctio nisi asperiores
            commodi minima. Et.
          </span>
        </div>

        <div className="hidden md:flex flex-col w-[40rem] relative">
          <img src="/exampleland.png" alt="" />
        </div>
      </div>
    </main>
  );
}
