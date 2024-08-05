import Xd from "./Xd"
import { Toaster, toast } from "react-hot-toast"

const Isaac = ({nombre, children: Castor} ) => {

    return (
        <>
            {Castor}
            <h1>{nombre}</h1>
            <Xd name={nombre}/>
            <div><Toaster/></div>
            <button onClick={() => {
                toast((t) => (
                    <span>
                      Custom and <b>bold</b>
                      <button onClick={() => toast.dismiss(t.id)}>
                        Dismiss
                      </button>
                    </span>
                  ));
            }}>HOLA</button>
            
        </>
    )
}

export default Isaac