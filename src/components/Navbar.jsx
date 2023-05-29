
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faArrowDown} from '@fortawesome/free-solid-svg-icons';


function Navbar() {

  return (
    <div className="px-4 py-2 w-full bg-black box-border flex justify-between">
      <div className='flex justify-end w-3/4 border-l-gray-50 px-2'>
        <button className=''>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" className="text-white" />
        </button>
      </div>
      <div className=" flex gap-4 items-center px-4">
        <div>

        <FontAwesomeIcon icon={faBell} shake size="lg" className="text-white" />
        </div>
        <div className="w-10 h-10 rounded-full flex items-center gap-2">
            <img src="profilePic.jpg" alt="profilePic" className="object-cover rounded-full" />
            <FontAwesomeIcon icon={faArrowDown} size="lg" className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
