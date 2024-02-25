import React from "react";
import {FaReact} from "react-icons/fa"
import {FaAmazon} from "react-icons/fa"
import {IconContext} from "react-icons"
import { Toast} from "react-toastify"
import "react-toastify/dist/react-toastify.css"

function Sample1()
{
    return(

        <IconContext.Provider value={{color:"Orange", size:"10rem"}}>
            <div>
                <FaReact/>
                <FaAmazon/>
            </div>
        </IconContext.Provider>

        

    )
}

export default Sample1