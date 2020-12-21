import React, { useState, useEffect, useRef } from "react"
import { Article, Button, ImageWrapper, Img } from "./styles"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md"

const imgDefault = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"

export const PhotoCard = ({ id, likes = 0, src = imgDefault }) => {
  const [show, setShow] = useState(false)
  const [like, setLike] = useState(false)
  const Icon = like ? MdFavorite : MdFavoriteBorder
  const ref = useRef(null)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== "undefined"
        ? window.IntersectionObserver
        : // import dinamico
          import("intersection-observer")
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(ref.current)
    })
  }, [ref])

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
