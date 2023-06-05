import { motion } from 'framer-motion'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Modal = ({toggleSearch})=>{
    const containerVariants={
        hidden:{
            opacity:0,
           
        },
        visible:{
            opacity:1,
            transition:{
                type:'spring',
                delay:0.5
            }
        }
    }
    const boxVariants={
        hidden:{
            opacity:0,
            y:'-100vw'
        },
        visible:{
            opacity:1,
            y:0,
            transition:{
                type:'spring',
                delay:0.5,
                duration:3
            }
        }
    }

    return(
        <motion.div
         varaints= {containerVariants}
         initial='hidden'
         animate='visible'
         className='w-screen bg-[#00000071] fixed z-20 h-screen flex justify-center items-center box-border'
         >
            <motion.div
             varaints= {boxVariants}
             initial='hidden'
             animate='visible'
             className='rounded-lg flex flex-col p-2 bg-gray-50 w-1/2 h-2/5'
             >
                <div className='w-full p-2 flex gap-2.5 justify-between items-center border-b border-b-gray-300'>
                <div  className=' text-start px-2 flex gap-1.5 items-center w-5/6'>
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="" />
                    <input type='text' placeholder='Search' className='border-0 w-full py-1 px-2 bg-gray-50 focus:outline-0' />
                </div>
                    <button onClick={toggleSearch} className='border border-gray-300 rounded-sm py-1 px-1.5'>
                    <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Modal;