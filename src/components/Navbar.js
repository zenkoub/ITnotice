"use client"
import { useState } from "react";
import { FaArrowRightToBracket, FaCode } from 'react-icons/fa6';
import { MdComputer, MdGroups, MdMobileOff } from 'react-icons/md'
import { LuCircuitBoard } from "react-icons/lu";
import { BiNetworkChart } from "react-icons/bi";
import { TbMathIntegralX, TbMessageLanguage } from "react-icons/tb";
import { VscSymbolMisc } from 'react-icons/vsc'
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    const router = usePathname()
    const navs = {
        '/pscp': "PSCP",
        '/ics': "ICS",
        '/itf': "ITF",
        '/mfit': "MFIT",
        '/charm': "CHARM",
        '/fe': "FE",
        '/others': "OTHERS",
    }
    return (
        <>
            <div className="block sm:hidden">
                <div className="flex flex-col items-center justify-center h-screen uppercase w-full p-10 text-center">
                    <MdMobileOff className="w-[100px] h-[100px]" color="#860A35" />
                    <p className="mt-4 text-white">
                        this website can only use in computer only!
                    </p>
                </div>
            </div>
            <div className="hidden sm:block">
                <div className="w-screen h-[120px] bg-white text-black">
                    <div className="flex items-center justify-between h-full">
                        <Link href='\'>
                            <img className="w-40 object-fill" src="https://media.discordapp.net/attachments/1148602171068260384/1155540854681903134/ITnotice.png?ex=6547c248&is=65354d48&hm=9fdb9298dddf87a68ac301ad9cc9c9217351c8368ee917e1613839ea0158628f&=" />
                        </Link>
                        <div className="flex justify-center items-center w-36 h-36 z-10">
                            <img className="rounded-full p-7" src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg" />
                        </div>
                    </div>
                </div>
                <div className="z-10">
                    <div className={`absolute bg-[#15284B] h-screen animate-delay-none transform transition duration-300 ${open ? 'w-52 scale-x-105' : 'w-20 scale-x-100'}`}>
                        <div className="relative h-20 border-b-2 border-white">
                            <button onClick={() => setOpen(!open)} className={`${router == '/' ? 'bg-[#FA6516]' : 'bg-red-800'} transition-transform h-full w-full `}>
                                <div className="flex justify-center items-center align-middle h-full">
                                    <FaArrowRightToBracket size={25} className={`text-white ${!open ? '' : '-scale-x-100'}`} />
                                </div>
                            </button>
                        </div>
                        {list.map(e => {
                            return <Link href={e.href}>
                                <div className="relative h-20 border-b-2 border-white">
                                    <button className={`${navs[router] == e.title ? 'bg-[#FA6516]' : 'bg-red-800'} transition-transform h-full w-full`}>
                                        <div className="flex justify-center items-center align-middle h-full">
                                            {open ? <div className="flex items-center justify-center gap-2">
                                                <e.icon className="text-white" size={25} />
                                                <span className="text-lg text-white">{e.title}</span>
                                            </div> :
                                                <e.icon className="text-white" size={25} />
                                            }
                                        </div>
                                    </button>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}