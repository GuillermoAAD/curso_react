import { useState } from "react"

const Castor = () => {
    
    const [name, setName] = useState()

    return (
        <>
            {name}
            <input onChange={(e) => setName(e.target.value)}/>
            {name}
        </>
    )    
}

export default Castor