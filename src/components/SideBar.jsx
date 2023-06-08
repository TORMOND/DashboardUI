// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faHouse, faCalendarDays, faMessage, faChartSimple, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {

    return ( 
        <div className='w-1/5 box-border h-screen bg-white top-0 sticky'>
       <div className='py-4 flex justify-center'>
        <h1 className='font-bold text-3xl'>Dashboard</h1>
       </div>
       <div className='border border-t-gray-300 py-4 px-2'>
        <ul className='flex flex-col gap-1.5'>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faHouse} size="lg" />
          <p>Overviews</p>
          </li>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faCalendarDays} size="lg" />
            <p>Calender</p>
          </li>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faMessage} size="lg" />
           <p>Messages</p>
          </li>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faMoneyBill} size="lg" />
           <p>Purchases</p>
          </li>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faChartSimple} size="lg" />
           <p>Analytics</p>
          </li>
          <li className='flex gap-1.5'>
          <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
           <p>Logout</p>
          </li>
        </ul>
         
       </div>
      </div>
     );
}
 
export default SideBar;