import { useState, useEffect } from 'react'

const Purchases = ()=>{
    const [purchases, setPurchases] = useState(null)
    const [loading, isLoading ] =useState(false)
    const [error, setError] = useState(false)
   
    useEffect(()=>{
        isLoading(true)
        fetch('http://localhost:8000/purchases')
        .then(res=>{
            console.log(res)
            const data = res.parse()
            setPurchases(data)
            isLoading(false)
            setError(false)
        })
        .catch(err=>{
            console.log(err)
            isLoading(false)
            setError(true)
        })
    
    }, [])
   
return(
    <div>
        {loading && 
        <div>

        </div>
        }
         {error && 
        <div>

        </div>
        }
         {purchases && purchases.map((purchase, id)=>(
                <div key={id}>
                    <h3>{purchase.name }</h3>
                     <p>{purchase.item}</p>

                     <p>{purchase.price}</p>
                     <p></p>
                     <p></p>
                    </div>
            ))}

 
    </div>
)
}

export default Purchases;