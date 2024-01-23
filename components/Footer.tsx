import {
  Play,
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Volume,
  Laptop2,
  Maximize2,
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bh-zinc-1040 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/album-heartbreak.jpeg"
          alt="Capa do álbum Heartbreak on a Full Moon do cantor Chris Brown"
          width={56}
          height={56}
        />
        <div className="flex flex-col gap-1">
          <span className="font-regular">No Guidance</span>
          <span className="text-xs text-zinc-400">Chris Brown</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-200" />
          <SkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-zinc-200" />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="h-1 rounded-full w-20 bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:30</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-24 bg-zinc-600">
            <div className="h-1 rounded-full w-10 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  )
}
