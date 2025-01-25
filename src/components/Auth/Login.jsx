import React, { useState } from 'react'

const Login =({handleLogin}) => {
  const [email, setEmail] = useState('')
  const[password,setPassword] = useState('')

  const handleChange = (e) => {
    const {name,value} = e.target;
    if(name==='email'){
      setEmail(value)
    }else if (name === 'password'){
      setPassword(value)
    }
  }

  const SubmitHandler = (e) =>{
    e.preventDefault();
    handleLogin(email,password)
    setEmail('');
    setPassword('');
  }

  return (
    <>
    <div className='flex items-center justify-center h-screen w-screen flex-col'>
    <h1 className='font-bold text-lg py-4 text-white'>Login Page</h1>
    <div className="border-2 border-green-400 rounded-lg">
      <form className='flex flex-col items-center justify-center p-5 gap-5'onSubmit={SubmitHandler} >
        <input className='flex py-2 border-green-400 border-2 rounded '
        type="email" 
        placeholder='Enter your email' 
        required
        name='email'
        onChange={handleChange}
        value={email}
         />
        <input className='flex py-2  border-green-400 border-2 rounded'
        type="password" 
        placeholder='Enter your password'
        required
        name='password'
        onChange={handleChange}
        value={password}
        />
        <button className='flex bg-green-400 border-green-400 border-2 justify-center hover:bg-black rounded-lg p-2'>
            Log in 
        </button>
      </form>
      </div>
    </div>
    </>
  )
}

export default Login
