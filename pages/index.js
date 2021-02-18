import "tailwindcss/tailwind.css"
import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <Head>
          <title>Templates are evil - join the revolution!</title>
        </Head>

        <main>
          <h1 class="py-8 text-5xl text-bold leading-6 space-y-4 text-bold text-gray-700">
            Projen
          </h1>

          <p class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
            JOIN THE #TemplatesAreEvil MOVEMENT!
          </p>
          <Image 
            src='/projen_transparent_png.png'
            width='500'
            height='500'
          />
        </main>
      </div>
    </div>
  )
}
