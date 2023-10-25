
"use client"
import { useState } from "react";
import { FaArrowRightToBracket } from 'react-icons/fa6';
export default function Navbar() {
    const [open, setOpen] = useState(false)
    console.log(open)
    return (
        <>
            <div className="w-screen h-[120px] bg-white text-black">

            </div>
            <div className="absolute bg-slate-400 h-full w-20 rounded-br-lg">
                <button onClick={() => {setOpen(!open)}} className="bg-orange-800 h-20 w-full">
                    <div className="flex justify-center items-center align-middle h-full">
                        <FaArrowRightToBracket size={25} />
                    </div>
                </button>
            </div>
        </>
    )
}