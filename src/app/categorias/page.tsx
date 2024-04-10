import NavBar from "@/components/NavBar"
import { CategoriaItem } from "./CategoriaItem";
import { Button } from "@nextui-org/button";

export default function Categorias() {

  const categorias = [
    {
      id: 1,
      nome: "Jogos de PC",
      icone: "computer"
    },
    {
      id: 2,
      nome: "Jogos de Console ",
      icone: "gampad-2"
    },
    {
      id: 3,
      nome: "Jogos de Arcade",
      icone: "joystick"
    },
  ]


  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="Jogos adicionar" />
     
      <section className="flex flex-col gap-2 bg-slate-900 mt-4 p-3 rounded min-w-[500px]">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Cadastrar uma nova experiencia </h2>
          <Button>Adicionar</Button>
        </div>

        {categorias.map(categoria => <CategoriaItem categoria={categoria} /> )}

      </section>

    </main>
  );
}
