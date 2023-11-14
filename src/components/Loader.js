'use client'
import { useState } from "react"
import { GrCheckbox, GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { ImCheckboxChecked } from 'react-icons/im'
import axios from 'axios'
import CreateForm from '@/components/CreateForm'
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

export default function Loader({ data }) {
    const [key, setKey] = useState('Primary')
    const router = useRouter()
    const handleRead = async (id) => {
        try {
            await axios.put(`https://2b55-165-22-25-77.ngrok-free.app/tasks/${id}/read`);
        } catch (err) {
            console.log(err);
        }
        router.refresh()
    }
    const handleStar = async (id) => {
        const t = toast.loading('กำลังทำรายการ', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
        try {
            await axios.put(`https://2b55-165-22-25-77.ngrok-free.app/tasks/${id}/star`);
            toast.success('เพิ่มรายการโปรดสำเร็จ', {
                id: t, icon: '⭐️',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        } catch (err) {
            console.log(err);
        }
        router.refresh()
    }
    const handleCheck = async (id) => {
        const t = toast.loading('กำลังทำรายการ', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        })
        try {
            await axios.put(`https://2b55-165-22-25-77.ngrok-free.app/tasks/${id}/check`);
            toast.success('เลือกสำเร็จ', {
                id: t,
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
        } catch (err) {
            console.log(err);
        }
        router.refresh()
    }
    const format_time = (val) => {
        const now = new Date(val);
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        return timeString
    }
    return (
        <>
            <div className="bg-white ml-12 w-full h-[70px] rounded-2xl">
                <div className="grid grid-cols-4 py-5 text-center">
                    <a onClick={() => setKey('Primary')} className='flex justify-center items-center text-black border-r-2 border-black'>
                        Primary
                    </a>
                    <a onClick={() => setKey('Assignment')} className='flex justify-center items-center text-black border-r-2 border-black'>
                        Assignment
                    </a>
                    <a onClick={() => setKey('News')} className='flex justify-center items-center text-black border-r-2 border-black'>
                        News
                    </a>
                    <a onClick={() => setKey('Platform')} className='flex justify-center items-center text-black'>
                        Platform
                    </a>
                </div>
            </div>
            <div className='bg-[#CCCCCC] ml-12 w-full h-full p-4 rounded-lg mt-4'>
                <div>
                    <div>
                        <div className="flex w-full h-10 bg-white items-center justify-between rounded-md">
                            <div onClick={() => setOpen(!open)} className="flex items-center justify-center p-4 rounded-tl-md rounded-bl-md text-white font-bold bg-orange-900 h-full w-16"> </div>
                            <CreateForm />
                        </div>
                    </div>
                </div>
                {
                    data.filter((e) => (key ? e.category === key : true)).map((e, i) => {
                        return <div className='relative'>
                            {/* {!e.read && <div className=' bg-[#FA6516] w-4 h-4 -left-1 -top-1 rounded-full'></div>} */}
                            {!e.read && <span class="absolute flex h-4 w-4 -left-1 -top-1">
                                {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span> */}
                                <span class="animate-pulse delay-100 relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
                            </span>}
                            <div className="flex items-center justify-between h-20 w-full rounded-md bg-white border-2 border-black mt-4 my-auto">
                                <div className='flex items-center'>
                                    <button onClick={() => handleCheck(e.id)}>
                                        {!e.check ? <GrCheckbox className="pl-4 w-10 h-10" color="white" /> : <ImCheckboxChecked className="pl-4 w-10 h-10" color="black" />}
                                    </button>
                                    <button onClick={() => handleStar(e.id)}>
                                        {!e.star ? <AiOutlineStar className="ml-2 w-10 h-10" color="black" /> : <AiFillStar className="text-[#FFE559] ml-2 w-10 h-10" />}
                                    </button>

                                    <div className="text-black pl-4 text-2xl font-bold"> {e.subject} </div>
                                </div>
                                <button onClick={() => handleRead(e.id)}>
                                    <div className='flex mr-96'>
                                        <div className="text-black pl-20 text-2xl font-bold">({e.category.slice(0, 1)})</div>
                                        <div className="text-[#AAAAAA] pl-4 text-2xl"> - {e.description} </div>
                                    </div>
                                </button>
                                <div>
                                    <div className="flex flex-row text-black text-lg mr-4"> {new Date(e.date).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                    }).replace(',', '')} </div>
                                    <div className="flex flex-row text-black text-lg mr-4"> {format_time(e.date)} </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>

        </>
    )
}