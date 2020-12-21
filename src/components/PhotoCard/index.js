import React from "react"
import { Article, Button, ImageWrapper, Img } from "./styles"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver"
import { useLocalStorage } from "../../hooks/useLocalStorage"

const imgDefault = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

export const PhotoCard = ({ id, likes = 0, src = imgDefault }) => {
  const { show, ref } = useIntersectionObserver()
  const key = `like-#${id}`
  const [like, setLike] = useLocalStorage(key, false)
  const Icon = like ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <Img src={src} alt="" />
            </ImageWrapper>
          </a>
          <Button onClick={() => setLike(!like)}>
            <Icon fill={like && "#FF0000"} size="32px" />
            {likes} likes!
          </Button>
        </>
      )}
    </Article>
  )
}
