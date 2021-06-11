import React from 'react'
import './Login.css'

const LoginPage = () => {
  return (
    <div className='container__login'>

      <form className='form__login'>
        <h1>ioasys books</h1>
        <div>
          <label>Email</label>
          <input type='email' name='email' />
        </div>
        <div>
          <label>Senha</label>
          <input type='password' name='password' />
          <button className='btn__login' type='submit'>Entrar</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage