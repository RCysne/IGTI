import React from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.css'
import Login from './Components/login/Login'
import Client from './Components/client/Client'
import NewClient from './Components/newClient/NewClient'
import ProjectList from './Components/projectList/ProjectList'
import ProjectGallery from './Components/projectGallery/ProjectGallery'

export default function App() {
  return (
    <>
      <Login />
      <Client />
      <NewClient />
      <ProjectList />
      <ProjectGallery />
    </>

    // REACT ROUTER
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/" component={Login} />

    //     <Route path="/client" component={Client} />

    //     <Route path="/new-client" component={NewClient} />

    //     <Route path="/project-list" component={ProjectList} />

    //     <Route path="/project-Gallery" component={ProjectGallery} />
    //   </Switch>
    // </BrowserRouter>
  )
}
