import { useState } from "react"

function Boolie(){


    const [isOpen, setIsopen] = useState(false)


    const handleMenu = ()=>{
        setIsopen(true)
    }

    const handleClosemenu = ()=>{
        setIsopen(false)
    }






    return <div className=" items-center px-10 justify-between sm:flex bg-sky-500 p-4 ">
        <h1 className="sm:text-3xl text-3xl font-bold">TechBookie</h1>
        <i style={{display: isOpen== true ? "none" : ""}} onClick={handleMenu} class="fa-solid sm:hidden absolute right-3 top-4 text-3xl font-bold fa-bars"></i>
        <i onClick={handleClosemenu} style={{display: isOpen== true ? "flex" : ""}} class="fa-solid hidden absolute right-3 top-4 text-3xl font-bold fa-x"></i>
        <ul style={{display: isOpen== true ? "flex" : ""}} className="sm:flex hidden flex-col sm:flex-row sm:gap-10 gap-3">
            <li className="text-2xl" >Home</li>
            <li className="text-2xl" >About Us</li>
            <li className="text-2xl" >Service</li>
        </ul>

        <button style={{display: isOpen== true ? "flex" : ""}} className="sm:flex hidden bg-white   px-2 py-1 rounded">Register</button>

    </div>
}
export default Boolie