import React,{useState} from 'react'
import './contactForm.css'
import { useDispatch } from 'react-redux'
import { addContact } from '../../Features/contactSlice/contactSlice'
import ContactList from './contactList'
const contactForm: React.FC = () => {
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [isActive,setIsActive] = useState(true)
  const dispatch = useDispatch()

  const onSubmitHandler = (e:React.FormEvent) => {
      e.preventDefault()
      console.log(firstName,lastName,isActive)
      dispatch(addContact({
        id : Date.now(),
        firstName,
        lastName,
        isActive
      }))
      setFirstName('')
      setLastName('')
      setIsActive(true)
  }

  return (
    <div className='m-auto'>
      <form onSubmit={onSubmitHandler} className='mb-4'>
          <div className='flex flex-col gap-6'>
            <label htmlFor="firstName" className='text-xl' >First Name : 
              <input type="text" name="firstName" id="firstName" value={firstName} placeholder='Enter First Name' onChange={(e) => {setFirstName(e.target.value)}} className='border-2 p-1 rounded-md' />
            </label>
            <label htmlFor="lastName" className='text-xl'>Last Name : 
              <input type="text" name="lastName" id="lastName" placeholder='Enter Last Name' value={lastName} onChange={(e) => {setLastName(e.target.value)}} className='border-2 p-1 rounded-md' />
            </label>
         
              
           <fieldset className='border-2 p-4 '>
            <legend className='text-xl'>Status: </legend>
            <div className='flex flex-col'>
            <label htmlFor="active" className='text-xl m-2'>Active : 
            <input type="radio" name="isActive" id="active" className='ml-2' checked={isActive} onChange={() => {setIsActive(true)}}/>
            </label>
            <label htmlFor="inActive" className='text-xl m-2'>Inactive :
            <input type="radio" name="isActive" id="inActive" className='ml-2' checked={!isActive} onChange={() => {setIsActive(false)}}/>
            </label>
            </div>
            </fieldset>
            <button className='bg-gray-500 p-2 rounded-lg hover:scale-105 duration-300 ease-in-out'>Submit</button>
          </div>
      </form>
<ContactList/>
    </div>
  )
}

export default contactForm