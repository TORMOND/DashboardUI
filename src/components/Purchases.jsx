// import { useState, useEffect } from 'react'
// https://dly.to/yYFSflfEgJV
import useFetch  from '../UseFetch'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faRectangleXmark} from '@fortawesome/free-solid-svg-icons';


const Purchases = ()=>{
    const {data:purchases, isPending: loading, error} = useFetch('http://localhost:8000/purchases')
    
return(
    <div className='flex justify-between p-2 w-full font-bold text-lg ' >
        {loading && 
        <div>
            <h3>Loading ...</h3>
        </div>
        }
         {error && 
        <div>
            <h3 className='font-bold text-red-500'>Error</h3>
        </div>
        }
        <div className='w-full  border'>
            <div className='flex justify-between p-2 w-full font-bold text-lg border-b'>
                <h2 className='text-start'>Name</h2>
                <h2 className='text-start'>Item</h2>
                <h2 className='text-start'>Price</h2>
                <h2 className='text-start'>Dispatched</h2>
            </div>
             {purchases && purchases.map((purchase, id)=>(
 
                <div key={id} className='flex justify-between p-2 w-full border-b'>
                    <h3 className='w-1/4 text-start'>{purchase.name }</h3>
                    <p className='w-1/4 text-start'>{purchase.item}</p>
                    <p className='w-1/4 text-start'>{purchase.price}</p>
                    {purchase.dispatched==="confirmed" &&
                  <p className='w-1/8 text-start'><FontAwesomeIcon icon={faCircleCheck} size='lg' className='font-light text-green-400' /></p>
                   }
                   
                   {purchase.dispatched !=="confirmed" &&
                    <p className='w-1/8 text-start text-red-500'><FontAwesomeIcon icon={faRectangleXmark} size="lg" /></p>
                   }
                   
                   
                    </div>
                    
            ))}

        </div>
   
 
    </div>
)
}

export default Purchases;