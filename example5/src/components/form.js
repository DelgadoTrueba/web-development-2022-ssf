import React, { useState } from 'react'

import "./form.css"

const Formulario = () => {
    
  const [enteredName, setEnteredName] = useState('');
  const [enteredSurname, setEnteredSurname] = useState('');
  const [enteredGen, setEnteredGen] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredPais, setEnteredPais] = useState('');
  const [enteredUser, setEnteredUser] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmail1, setEnteredEmail1] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredPassword1, setEnteredPassword1] = useState('');
  
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  }

  const surnameChangeHandler = (event) => {
    setEnteredSurname(event.target.value);
  }

  const genChangeHandler = (event) => {
    setEnteredGen(event.target.value);
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  }

  const paisChangeHandler = (event) => {
    setEnteredPais(event.target.value);
  }

  const userChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailChangeHandler1 = (event) => {
    setEnteredEmail1(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  }

  const passwordChangeHandler1 = (event) => {
    setEnteredPassword1(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredName,
      surname: enteredSurname,
      gen: enteredGen,
      date: enteredDate,
      pais: enteredPais,
      user: enteredUser,
      email: enteredEmail,
      email1: enteredEmail1,
      password: enteredPassword,
      password1: enteredPassword1
    };

    console.log(expenseData);
  };

    return (
        <form onSubmit={submitHandler}>
            <div className="formato_div">
            <fieldset className="formato">
                <legend>Datos Personales</legend>
                <div>
                    <label for="name">Nombre:</label>
                    <input type="text" id="name" name="name" onChange={nameChangeHandler}></input>

                    <label for="surname">Apellidos:</label>
                    <input type="text" id="surname" name="surname" onChange={surnameChangeHandler}></input>

                    <ul>
                        <li>
                            <label for="mas">Masculino</label>
                            <input type="radio" id="mas" name="gen" onChange={genChangeHandler}></input>
                        </li>
                        <li>
                            <label for="fem">Femenino</label>
                            <input type="radio" id="fem" name="gen" onChange={genChangeHandler}></input>
                        </li>
                        <li>
                            <label for="sin">Sin determinar</label>
                            <input type="radio" id="sin" name="gen" onChange={genChangeHandler}></input>
                        </li>
                    </ul>

                    <label for="nacimiento">Fecha de nacimiento:</label>
                    <input type="date" id="nacimiento" name="nacimiento" onChange={dateChangeHandler}></input>

                    <label for="pai">Pais:</label>
                    <input type="list" list="pais" id="pais" name="pais" onChange={paisChangeHandler}></input>
                    <datalist id="pais">
                        <option value="España"></option>
                        <option value="Francia"></option>
                        <option value="EE.UU"></option>
                    </datalist>
                
                </div>
            </fieldset>
            <fieldset className="formato">
                <legend>Datod de Inicio de Sesion</legend>
                <div>
                    <label for="user">Nombre de Usuario:</label>
                    <input type="text" id="user" name="user" onChange={userChangeHandler}></input><br></br>
                    <label for="email">Correo electronico:</label>
                    <input type="email" id="email" name="email" onChange={emailChangeHandler}></input>
                    <label for="email1">Confirmar Correo electronico:</label>
                    <input type="email" id="email1" name="email1" onChange={emailChangeHandler1}></input><br></br>
                    <label for="con">Contraseña:</label>
                    <input type="password" id="con" name="con" onChange={passwordChangeHandler}></input>
                    <label for="con1">Confirmar Contraseña:</label>
                    <input type="password" id="con1" name="con1" onChange={passwordChangeHandler1}></input>
                </div>
                <button type="submit">Enviar submit</button>
            </fieldset>
            </div>
        </form>
    );
}

export default Formulario;