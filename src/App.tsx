import { Routes,Route } from 'react-router-dom'
import './App.css'
import Sidebar from './Features/Sidebar/sidebar'
import ContactForm from './Compoent/Contact/contactForm'
import ChartMap from './Compoent/ChartMap/chartMap'
import ContactList from './Compoent/Contact/contactList'
function App() {


  return (
  
    <div className='flex w-full'>
     <Sidebar/>
     <div className='m-auto'>
     <Routes>
      <Route path='/' element={<ContactForm/>}></Route>
      <Route path='/contact' element={<ContactForm/>}></Route>
      <Route path='/chartMap' element={<ChartMap/>}></Route>
     </Routes>
     <ContactList/>
     </div>
  
    </div>

  )
}

export default App
