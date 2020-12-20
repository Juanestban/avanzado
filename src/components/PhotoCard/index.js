import React from "react"
import { Button, ImageWrapper, Img } from "./styles"
import { FiHeart } from "react-icons/fi"

const imgDefault = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

export const PhotoCard = ({ id, likes = 0, src = imgDefault }) => {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImageWrapper>
          <Img src={src} alt="" />
        </ImageWrapper>
      </a>
      <Button>
        <FiHeart size="32px" />
        {likes} likes!
      </Button>
    </article>
  )
}
