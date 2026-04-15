import React from 'react'
import Dashboard from './components/common/Dashboard'
import CounterApp from './components/common/CounterApp'
import SearchBar from './components/common/SearchBar'
import SecretMessage from './components/common/SecretMessage'
import ToDo from './components/common/ToDo'
import Focus from './components/common/Focus'
import './MyApp.css'

function MyApp() {
  return (
    <div>

    <Dashboard className = {"user-profile"} username={"Saswat"} age={"24"} />
    <CounterApp className = {"counter-app"}/>
    <SearchBar className = {"search-bar"} />
    <SecretMessage className={"secret-msg"} />
    <ToDo className={"to-do"} />
    <Focus className={"focus"} />
    </div >
  )
}

export default MyApp