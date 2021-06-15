import React, { useState, useContext } from 'react'
import StoreContext from '../components/Store/Context'
import { useHistory } from 'react-router'
import './Login.css'

function initialState() {
  return { user: '', password: '' }
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' }
  }
  return { error: 'Invalid login' }
}

const LoginPage = () => {
  const [values, setValues] = useState(initialState)
  const { setToken } = useContext(StoreContext)
  const history = useHistory()

  function onChange(event) {
    const { value, name } = event.target

    setValues({
      ...values,
      [name]: value
    })
  }

  function onSubmit(event) {
    event.preventDefault()

    const { token } = login(values)

    if (token) {
      setToken(token)
      return history.push('/')
    }
    setValues(initialState)
  }

  return (
    <div className='container__login'>
      <form className='form__login' onSubmit={onSubmit}>
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