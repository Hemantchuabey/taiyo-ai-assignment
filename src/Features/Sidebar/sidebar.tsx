import './sidebar.css'
import {Link} from 'react-router-dom'
const sidebar = () => {
  return (
    <div className='optionDetail flex flex-col gap-10 w-[20%] bg-gray-500 justify-center items-center'>
        <Link to='/contact '><button className='max-w-fit max-h-fit p-4 rounded-lg bg-white text-black hover:scale-105 duration-300 ease-in-out'>Contact</button></Link>
        <Link to='/chartMap '><button className='max-w-fit max-h-fit p-4 rounded-lg bg-white text-black hover:scale-105 duration-300 ease-in-out'>ChartMap</button></Link>
    </div>
  )
}

export default sidebar