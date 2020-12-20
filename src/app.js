import React from "react"
import { ListOfCategory } from "./components/ListOfCategory"
import { GlobalStyles } from "./styles/GlobalStyles"
import { ListPhotoCard } from "./components/ListPhotoCard"
import { LogoSVG } from "./components/logo"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <LogoSVG />
      <ListOfCategory />
      <ListPhotoCard />
    </>
  )
}

export default App
