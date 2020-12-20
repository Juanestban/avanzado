import React from "react"
import { Anchor, Image } from "./styles"

const DEFAULT_IMAGE = "https://i.imgur.com/dJa0Hpl.jpg"

export const Category = ({ image = DEFAULT_IMAGE, path, name = "?" }) => (
  <Anchor href={path}>
    <Image src={image} alt="" />
    {name}
  </Anchor>
)
