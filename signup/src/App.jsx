import { useState,useCallback,useEffect,useRef } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState('')

    // Name validation
    const nameValidation = () =>{
        if(name.trim().length === 0) {
          setNameError("Name is required")
          return false
        }
        if(name.trim().length <3) {
          setNameError("Name must be at least 3 character long");
          return false;
        }
        const nameRegex = /^[A-Za-z\s]+$/; // only letters and spaces
        if (!nameRegex.test(name)) {
          setNameError("Name must not contain numbers or special characters");
          return false;
        }
        setNameError('');
        return true;
    }

    //Email validation
    const emailValidation = () =>{
      if(email.trim().length === ''){
        setEmailError("Email is required")
      }
      const emailRegex = /!#$%^&*()-=+{]?'\'/;
      if(!emailRegex.test(email)){
        setEmailError("Invalid email format")
      }
      return '';
    }

    // tp stop default form submission
      const  handleSubmit =(e) =>{
        e.preventDefault();
        
         const isNameValid = nameValidation();
         const emailValidationResult = emailValidation();
        if(!isNameValid || emailError){
          setNameError(isNameValid ? '' : nameError);
          setEmailError(emailValidationResult);
          return
        }
        if(password !== confirmPassword){
          alert("password doesn't match")
          return;
        }
      }

    


 

  return (
    <>
   <form onSubmit={handleSubmit}>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-13 text-purple-800 bg-gray-800'>
      <h1 className='flex items-center justify-center text-purple-800 mx-3 font-extrabold mb-13'>Sign Up</h1>
      <div className='flex flex-col mb-3'>
        <label className='mb-2 font-bold'>Username</label>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
        className='flex bg-white w-full px-3 py-1 rounded-lg mb-1'
        />
        {nameError && <span className='text-red-500 text-sm'>{nameError}</span>}
      </div>
      <div className='flex flex-col mb-3 my-7'>
        <label className='mb-2 font-bold'>Email</label>
        <input 
        type="email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        placeholder='Enter your email'
        className='flex bg-white w-full px-3 py-1 rounded-lg mb-1' 
        />
      </div>
      <div className='flex flex-col mb-3 my-7'>
        <label className='mb-2 font-bold'>Password</label>
        <div className='flex items-center bg-white rounded-lg px-3'>
            <input 
          type={showPassword ? 'text': 'password'}
          value={password}     
          onChange={(e)=>setPassword(e.target.value)}
          placeholder='Enter your Password'
          className='felx-1 py-2 outline-none' 
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="mx-48 text-gray-600 focus:outline-none"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>      
        </div>
      </div>
      <div className='flex flex-col mb-3 my-7'>
        <label className='mb-2 font-bold'>Confirm Password</label>
        <div className="flex items-center bg-white rounded-lg px-3">
            <input 
          type= {showConfirmPassword ? 'text': 'password'}
          value={confirmPassword}
          onChange={(e)=>{setConfirmPassword(e.target.value)}}     
          placeholder='Enter your Password'
          className='flex-1 py-2 outline-none' 
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="ml-2 text-gray-600 focus:outline-none"
            >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>
      <div className='flex justify-center'>
      <button
      // onClick={} 
      type='submit'
      className=' w-max bg-white p-1 my-3 mt-5 rounded-lg font-extrabold hover:bg-blue-400 transition '>Start the journey</button>
      </div>
    </div>
   </form>
    </>
  )
}

export default App
