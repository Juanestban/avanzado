import { useState, useEffect } from "react"
import { getCharacters } from "../../api/endpoint"

export const useCategoryData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  const getSomeCharacters = async () => {
    try {
      setLoading(true)
      const res = await getCharacters()
      const { data } = res
      setCategories(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSomeCharacters()
  }, [])

  return { categories, loading }
}
