import '../main.css'
import {useState } from 'react'
import { Navbar, SideBar, LineChart, PieChart, DonutChart, Modal, Purchases }  from '../components'

const Dashboard = ()=>{
  const [isModal, setIsModal ] = useState(false)
  const toggleSearch =()=>{
    setIsModal(!isModal)
  }

return(
    <div className='min-h-screen w-screen  box-border relative'>
      {isModal &&
         <Modal 
         toggleSearch={toggleSearch}
         />
      }
   
    <div className=' bg-[#ceced1] flex  box-border'>
     <SideBar  />
      <div className='w-4/5 box-border'>
      <Navbar
       toggleSearch={toggleSearch}
        />
        <div className='w-full grid grid-cols-3 gap-1'>
          <div className='col-span-2 bg-white p-4 min-h-screen'>  
            
            <PieChart/>
            {/* <BarChart /> */}
            <Purchases />
            </div>
        <div className='bg-white p-4 top-0 sticky h-screen'>

        <DonutChart />
        <LineChart />
          </div>
        </div>
      </div>
      
        
    </div>
    </div>
)
}

export default Dashboard;