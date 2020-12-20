import React, { useState, useEffect } from "react"
import { Category } from "../Category"
import { Item, List } from "./styles"
// import { getCharacters } from "../../../api/endpoint"

export const ListOfCategory = () => {
  const [category, setCategory] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  // const getSomeCharacters = async () => {
  //   try {
  //     const res = await getCharacters()
  //     const resJSON = res.json()
  //     console.log(resJSON)
  //     // setCategory(character)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {}, [])

  return (
    <List>
      {category.map((cat) => (
        <Item key={cat}>
          <Category />
        </Item>
      ))}
    </List>
  )
}
