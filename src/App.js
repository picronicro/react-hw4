import React from "react";
import {useState} from "react";

export default function RegForm() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [patronymic, setPatronymic] = useState("")
  const [email, setEmail] = useState("")

  return(
      <div>
        <div className="form">
          <label htmlFor="name">name</label>
          <input id="name" type="text" onChange={e => setName(e.target.value)}/>

          <label htmlFor="surname">surname</label>
          <input id="surname" type="text" onChange={e => setSurname(e.target.value)}/>

          <label htmlFor="patronymic">patronymic</label>
          <input id="patronymic" type="text" onChange={e => setPatronymic(e.target.value)}/>

          <label htmlFor="email">email</label>
          <input id="email" type="text" onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="user_card">
            <p className="name">name: {name}</p>
            <p className="surname">name: {surname}</p>
            <p className="name">patronymic: {patronymic}</p>
            <p className="name">email: {email}</p>
        </div>
      </div>
  )
}