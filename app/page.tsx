import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import {ChevronLeft, ChevronRight, Play} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpeg"
                alt="Capa do álbum do Indigo do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Indigo</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album-exclusive.jpeg"
                alt="Capa do álbum Exclusive do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Exclusive</strong>
              <button className="w-12 h-12 flex group items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Heartbreak on a Full Moon</strong>
              <button className="w-12 h-12 group flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album.jpeg"
                alt="Capa do álbum do Indigo do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Indigo</strong>
              <button className="w-12 h-12 group flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album-exclusive.jpeg"
                alt="Capa do álbum Exclusive do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Exclusive</strong>
              <button className="w-12 h-12 group flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href="#"
              className="bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                width={104}
                height={104}
              />
              <strong>Heartbreak on a Full Moon</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">
            Made for Paulo Barros
          </h2>

          <div className="grid grid-cols-10 gap-4 mt-4">
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                className="w-full"
                width={120}
                height={120}
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Chris Brown, Foo Fighters, Linkin Park
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                className="w-full"
                width={120}
                height={120}
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Chris Brown, Foo Fighters, Linkin Park
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                className="w-full"
                width={120}
                height={120}
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Chris Brown, Foo Fighters, Linkin Park
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                className="w-full"
                width={120}
                height={120}
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Chris Brown, Foo Fighters, Linkin Park
              </span>
            </a>
            <a className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10">
              <Image
                src="/album-heartbreak.jpeg"
                alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
                className="w-full"
                width={120}
                height={120}
              />
              <strong>Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">
                Chris Brown, Foo Fighters, Linkin Park
              </span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
