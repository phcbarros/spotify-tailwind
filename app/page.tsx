import {Home as HomeIcon, Search, Library} from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-20">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200 ">
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library />
              Your library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Daily Mix
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Músicas curtidas
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Chris Brown
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Xadrez Verbal
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Scicast
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Medo e delírio em Brasília
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              As músicas mais ouvidas em 2023
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              As músicas mais ouvidas em 2022
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              As músicas mais ouvidas em 2021
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">main</main>
      </div>
      <footer className="bh-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
