import Image from "next/image"
import Link from "next/link"
import TeamSection from "./components/TeamSection"
import teamPhoto from "./assets/foto-do-time.jpg"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative flex-grow">
        <Image
          src={teamPhoto || "/placeholder.svg"}
          alt="Soccer team group photo"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navigation */}
          <nav className="bg-black bg-opacity-50 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Mantiqueiras City
              </Link>
              <ul className="flex space-x-4">
                <li>
                  <Link href="#team" className="hover:text-gray-300">
                    Time
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="hover:text-gray-300">
                    Planejamento
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Main Content */}
          <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 shadow-text">
                Mantiqueiras City
              </h1>
              <Link
                href="#team"
                className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
              >
                Conheça o Time
              </Link>
            </div>
          </main>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Team Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

