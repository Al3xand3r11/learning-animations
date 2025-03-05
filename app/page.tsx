'use client'

import Link from "next/link";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

      requestAnimationFrame(raf)
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <div>
          <h1 className="text-6xl font-light pt-48">
            Animations Library
            </h1>
          </div>
          <div className="flex flex-row" >
            <Link href="/first">First</Link>
          </div>
          
          
    </div>
  );
}
