import React, { useState } from 'react'
import './Login.css'

function initialState() {
  return { user: '', password: '' }
}

const LoginPage = () => {
  const [values, setValues] = useState(initialState)

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <div className='container__login'>
      <form className='form__login'>
        <h1>ioasys books</h1>
        <div>
          <label htmlFor='user'>Email</label>
          <input id='user' type='text' name='user' onChange={onChange} value={values.user} />
        </div>
        <div>
          <label htmlFor='password'>Senha</label>
          <input id='password' type='password' name='password' onChange={onChange} value={values.password} />
          <button className='btn__login' type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage