import React from "react"
import { About } from "../pages/About"
import { Education } from "../pages/Education"
import { Contact } from "../pages/Contact"
import { Hero } from "./Hero"
import { Organization } from "../pages/Organization"

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Organization />
      <Education />
      <Contact />
    </>
  )
}
