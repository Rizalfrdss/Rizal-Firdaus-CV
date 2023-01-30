import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Footer from "../common/Footer"
import { Header } from "../common/Header"
import { Home } from "../home/Home"
import { About } from "./About"
import { Contact } from "./Contact"
import { Education } from "./Education"
import { Organization } from "./Organization"
export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/organization' component={Organization} />
          <Route exact path='/education' component={Education} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
