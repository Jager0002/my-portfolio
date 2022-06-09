import React from "react"
import ContactMe from "./ContactMe"
import PhotoAndShortInfo from "./PhotoAndShortInfo"
import Projects from "./Projects"

const Home = () => {
  return (
    <div>
      <PhotoAndShortInfo></PhotoAndShortInfo>
      <Projects></Projects>
      <ContactMe></ContactMe>
    </div>
  )
}

export default Home
