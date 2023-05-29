

const SideBar = () => {

    return ( 
  
        <div className='w-1/4 box-border h-screen bg-white top-0 sticky'>
       <div className='py-4 flex justify-center'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>
       </div>
       <div className='border border-t-gray-300 py-4 px-2'>
        <ul className=''>
          <li className=''>
          <p>Overviews</p>
          </li>
          <li className=''>
            <p>Calender</p>
          </li>
          <li className=''>
           <p>Messages</p>
          </li>
          <li className=''>
           <p>Settings</p>
          </li>
          <li className=''>
           <p>Logout</p>
          </li>
        </ul>
         
       </div>
      </div>
     );
}
 
export default SideBar;