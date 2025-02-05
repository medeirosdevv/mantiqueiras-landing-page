"use client"

import { useState } from "react"
import Image from "next/image"

interface PlayerProps {
  name: string
  position: string
  number: number
  image: string
  bio: string
}

export default function PlayerCard({ name, position, number, image, bio }: PlayerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-105"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="relative h-64 w-full">
        <Image src={image || "/placeholder.svg"} alt={`${name} - ${position}`} layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>
            {position} - #{number}
          </p>
        </div>
      </div>
      {isExpanded && (
        <div className="p-4">
          <p>{bio}</p>
        </div>
      )}
    </div>
  )
}


