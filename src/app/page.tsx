import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
  return (
    <main className = "w-full h-screen p-8 flex flex-col justify-center gap-2">
      <h1 className = "text-4xl font-medium font-semibold">Jelajahi UMKM di sekitarmu</h1>
      <span className = "text-lg text-gray-500">Bersama Sekitar, jelajahi UMKM yang ada di sekitarmu dengan lebih cepat, mudah, dan seru!</span>
      <Link href = "/dashboard">
        <Button className = "text-lg px-8 mt-4">
          Mulai
        </Button>
      </Link>
    </main>
  )
}

export default LandingPage