// import { useState } from 'react'

import './main.css'
import { Navbar, SideBar, BarChart, LineChart }  from './components'

function App() {

  return (
    <div className=''>
    <div className='min-h-screen box-border w-screen bg-[#ceced1] flex'>
     <SideBar />
      <div className='w-3/4 '>
      <Navbar />
        <div className='w-full grid grid-cols-3 gap-1'>
          <div className='col-span-2 bg-white p-4 min-h-screen'>
            <BarChart />
            {/* <LineChart /> */}
            </div>
        <div className='bg-white p-4 top-0 sticky min-h-screen'>
         
          </div>
        </div>
      </div>
      
        
    </div>
    </div>
  )
}

export default App
