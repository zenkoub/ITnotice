"use client"
import Link from "next/link"
import { FaStar, FaCheckToSlot } from 'react-icons/fa';
export default function Navbar({
    data = []
}) {
    const buttons = [
        { name: "PSCP", color: '#FA6516', href: 'pscp' },
        { name: "ITF", color: '#FA6516', href: 'itf' },
        { name: "ICS", color: '#FA6516', href: 'ics' },
        { name: "MFIT", color: '#FA6520', href: 'mfit' },
        { name: "FE1", color: '#FA6520', href: 'fe1' },
        { name: "CHARM", color: '#FA6520', href: 'charm' },
        { name: "OTHERS", color: '#FA6520', href: 'others' },
    ]
    return (
        <>
            <div className="w-screen h-[120px] bg-white text-black">
                ITnotice
            </div>
            <div className="flex">
                <div className="h-screen max-w-xs bg-[#15284B] hidden sm:block">
                    <div className="flex justify-center">
                        <div className="p-8">
                            <button className="w-[207px] h-[54px] rounded-md border-2 border-white HEELlO bg-[#314C7E]">
                                ALL NOTICE
                            </button>
                            <div className="flex flex-col gap-2 mt-2">
                                {
                                    buttons.map((e) => {
                                        return <Link href={e.href}>
                                            <div className={`w-[207px] h-[54px] text-center p-3 rounded-md border-2 border-white `} style={{ backgroundColor: e.color }}>
                                                {e.name}
                                            </div>
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen mt-11">
                    <div className="flex text-center justify-center mx-auto items-center h-24 w-full max-w-6xl text-black bg-white rounded-2xl">
                        <div className="flex justify-start items-center w-full h-full p-3 gap-2">
                            <FaStar/>
                            <div className="">
                                Primary
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        {data &&
                            <div>
                                {data.map(e => {
                                    return (
                                        <div className="text-white text-3xl">
                                            {e.title}
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}