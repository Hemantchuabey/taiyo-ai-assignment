import { Routes,Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Features/Sidebar/sidebar'
import ContactForm from './Compoent/Contact/contactForm'
import ChartMap from './Compoent/ChartMap/chartMap'
function App() {


  return (
    <div className='flex w-full'>
     <Sidebar/>
     <Routes>
      <Route path='/' element={<ContactForm/>}></Route>
      <Route path='/contact' element={<ContactForm/>}></Route>
      <Route path='/chartMap' element={<ChartMap/>}></Route>
     </Routes>
    </div>
  )
}

export default App
