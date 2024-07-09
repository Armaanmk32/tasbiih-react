import { useState } from "react"
function Tasbiih (){
    const [counter, setCounter]= useState(0)

    const incrementCounter = ()=>{
        setCounter(counter +1)
        if(counter === 0){
            document.body.style.backgroundColor = "skyblue"
        }
        else if(counter=== 1){
            document.body.style.backgroundColor = "green"  
        }
        else if(counter=== 2){
            document.body.style.backgroundColor = "gray"  
        }
        else if(counter === 3){
            document.body.style.backgroundColor = "yellow"
        }

        else{
            document.body.style.backgroundColor = "white"
        }
    }
     
    
    const handleDecrement =()=>{
        if(counter > 0){
            
            setCounter(counter -1)
        }
        if(counter === 5){
            document.body.style.backgroundColor = "skyblue"
        }
        else if(counter=== 4){
            document.body.style.backgroundColor = "green"  
        }
        else if(counter=== 3){
            document.body.style.backgroundColor = "gray"  
        }
        else if(counter === 2){
            document.body.style.backgroundColor = "yellow"
        }

        else{
            document.body.style.backgroundColor = "white"
        }
       
    }
    



    const resetCounter = ()=>{
        setCounter ( 0 )
    }

   





    return <div>
        <div className="flex justify-center mt-[100px] ">
            <div> 

            <h1 className="text-7xl font-bold text-center ">{counter}</h1>
            <button onClick={incrementCounter} className="bg-sky-500 w-[100px] h-[40px] rounded m-5 mt-10 ">Increment</button>
            <button onClick={handleDecrement} className="bg-sky-500 w-[100px] h-[40px] rounded m-5 mt-10 ">decrement</button>
            <button onClick={resetCounter} className="bg-green-500 w-[100px] h-[40px] rounded m-5 mt-10 ">Reset</button>
            </div>

        </div>
        
    </div>
}
export default Tasbiih