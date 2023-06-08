// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faChevronDown, faGear} from '@fortawesome/free-solid-svg-icons';


function Navbar({ toggleSearch }) {

  return (
    <div className="px-4 py-2 w-full bg-black box-border flex justify-between">
      <div className='flex justify-end w-3/4 border-r border-r-gray-50 px-2.5 gap-2.5 ' >
        <button className='w-4/5 bg-gray-900 text-start px-2 flex gap-1.5 items-center' 
        onClick={toggleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-white" />
            <p className="text-gray-50 font-light" >Search</p>
        </button>
        <button className=''>
            <FontAwesomeIcon icon={faGear} size="lg" className="text-white" />
        </button>
      </div>
      <div className=" flex gap-4 items-center px-4">
        <div>

        <FontAwesomeIcon icon={faBell} shake size="lg" className="text-white" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center gap-2">
            <img src="profilePic.jpg" alt="profilePic" className="object-cover rounded-full" />
            <FontAwesomeIcon icon={faChevronDown}  className="text-white"  />
        </div>
      </div>
    </div>
  )
}

export default Navbar
