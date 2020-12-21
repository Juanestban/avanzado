import React, { useState, useEffect } from "react"
import { useCategoryData } from "../../hooks/useCategoryData"
import { Category } from "../Category"
import { Item, List } from "./styles"

export const ListOfCategory = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { categories, loading } = useCategoryData()
  // const signal = axios.CancelToken

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )

  useEffect(() => {
    const onScroll = () => {
      const newShowFixed = window.scrollY > 240
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [showFixed])

  return (
    <>
      {loading ? (
        <List>
          <Item>
            <Category />
          </Item>
        </List>
      ) : (
        renderList()
      )}
      {showFixed && renderList(true)}
    </>
  )
}
