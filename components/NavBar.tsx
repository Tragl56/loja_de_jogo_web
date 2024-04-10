import Link from "next/link";

interface NavBarProps {
    active: "dashboard" | "Sua História está aqui" | "Jogos adicionar"
}

export default function NavBar(props: NavBarProps){
    const { active } = props
    const classActive = "border-b-4 border-pink-500 pb-2"

    return (
        <nav className="flex justify-between items-center bg-slate-900 w-full px-5 py-3">
            <h1 className="text-3xl font-bold">Loja de Jogos</h1>
            <ul className="flex gap-12">
                <li className={active == "dashboard" ? classActive : ""}>
                    <Link href="/">dashboard</Link>
                </li>
                <li className={active == "Sua História está aqui" ? classActive : ""}>
                    <Link href="/movimentacoes">Suas Histórias</Link>
                </li>
                <li className={active == "Jogos adicionar" ? classActive : ""}>
                    <Link href="/categorias">Adicionar jogos</Link>
                </li>
            </ul>
            <div className="w-14 rounded-full overflow-hidden">
                <img src="https://avatars.githubusercontent.com/u/135563060?v=4" alt="avatar do usuário" />
            </div>
        </nav>
    )
}