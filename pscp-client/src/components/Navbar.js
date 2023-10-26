"use client"
import { useState } from "react";
import { FaArrowRightToBracket, FaCode } from 'react-icons/fa6';
import { MdComputer, MdGroups } from 'react-icons/md'
import { LuCircuitBoard } from "react-icons/lu";
import { BiNetworkChart } from "react-icons/bi";
import { TbMathIntegralX, TbMessageLanguage } from "react-icons/tb";
import { VscSymbolMisc } from 'react-icons/vsc'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const list = [
        { title: "PSCP", href: 'pscp', icon: MdComputer },
        { title: "ICS", href: 'ics', icon: LuCircuitBoard },
        { title: "ITF", href: 'itf', icon: BiNetworkChart },
        { title: "MFIT", href: 'mfit', icon: TbMathIntegralX },
        { title: "CHARM", href: 'charm', icon: MdGroups },
        { title: "FE", href: 'fe', icon: TbMessageLanguage },
        { title: "OTHERS", href: 'others', icon: VscSymbolMisc }

    ]
    return (
        <>
            <div className="w-screen h-[120px] bg-white text-black">
                <div className="flex items-center justify-between h-full">
                    <img className="w-40 object-fill" src="https://media.discordapp.net/attachments/1148602171068260384/1155540854681903134/ITnotice.png?ex=6547c248&is=65354d48&hm=9fdb9298dddf87a68ac301ad9cc9c9217351c8368ee917e1613839ea0158628f&=" />
                    <div className="flex justify-center items-center">
                        <img className="rounded-full p-7" src="https://images-ext-1.discordapp.net/external/mukZM-_GodY98Mbmheh6MCF1tcS9cljHkTxH5joSWgI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/685511264818036925/536ae4ef9e60ef9479d9044f88ffd81f.png?width=60&height=60" />
                    </div>
                </div>
            </div>
            <div>
                <div className={`absolute bg-[#15284B] h-full animate-delay-none transform transition duration-300 ${open ? 'w-52 scale-x-105' : 'w-20 scale-x-100'}`}>
                    <div className="relative h-20 border-b-2 border-white">
                        <button onClick={() => setOpen(!open)} className={`bg-orange-800 transition-transform h-full w-full `}>
                            <div className="flex justify-center items-center align-middle h-full">
                                <FaArrowRightToBracket size={25} className={`${!open ? '' : '-scale-x-100'}`} />
                            </div>
                        </button>
                    </div>
                    {list.map(e => {
                        return <div className="relative h-20 border-b-2 border-white">
                            <button className={`bg-red-800 transition-transform h-full w-full`}>
                                <div className="flex justify-center items-center align-middle h-full">
                                    {open ? <div className="flex items-center justify-center gap-2">
                                        <e.icon size={25} />
                                        <span className="text-lg">{e.title}</span>
                                    </div> :
                                        <e.icon size={25} />
                                    }
                                </div>
                            </button>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}