import PlayerCard from "./PlayerCard"
import fotoArthur from "../assets/arthurm.png"

const players = [
  {
    name: "Arthur Medeiros",
    position: "Meio-Campista",
    number: 20,
    image: fotoArthur,
    bio: "Arthur é um meio-campista ágil, com uma boa leitura e uma ótima visão de jogo. Com seu jogo rápido e seus dribles ele ajuda o time a vencer os jogos",
  },
  {
    name: "Sam Lee",
    position: "Midfielder",
    number: 8,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Sam is the engine of our midfield. Known for his tactical intelligence and passing ability, he controls the pace of the game.",
  },
  {
    name: "Chris Taylor",
    position: "Defender",
    number: 4,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Chris is our rock in defense. His strength and leadership keep our backline organized and hard to break down.",
  },
  {
    name: "Jamie Rodriguez",
    position: "Goalkeeper",
    number: 1,
    image: "/placeholder.svg?height=300&width=300",
    bio: "Jamie's reflexes and command of the box make him one of the best goalkeepers in the league. He's saved us countless times.",
  },
]

export default function TeamSection() {
  return (
    <section className="py-12 bg-gray-100" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Conheça nosso Elenco</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {players.map((player) => (
            <PlayerCard key={player.number} {...player} />
          ))}
        </div>
      </div>
    </section>
  )
}

