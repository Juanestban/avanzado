import React, { useEffect, useState } from "react"
import { PhotoCard } from "../PhotoCard"

export const ListPhotoCard = () => {
  const [photoCard, setPhotoCard] = useState([1, 2, 3, 4, 5])

  useEffect(() => {}, [])

  return (
    <ul>
      {photoCard.map((card) => (
        <li key={card}>
          <PhotoCard />
        </li>
      ))}
    </ul>
  )
}
