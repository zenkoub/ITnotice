"use client"
import { GrCheckbox, GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { ImCheckboxChecked } from 'react-icons/im'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function page() {
    const [result, setResult] = useState([])
    const [key, setKey] = useState('')

    useEffect(() => {
        // Make an Axios request to the GitHub API on the client side
        axios.get('http://localhost:3002/tasks')
            .then((response) => {
                setResult(response.data);
            })
            .catch((error) => {
                console.error('Error fetching GitHub repositories:', error);
            });
    }, []);
    const handleRead = async (id) => {
        try {
            // Make a PUT request to star/unstar a task
            await axios.put(`http://127.0.0.1:3002/tasks/${id}/read`);

            // Update the state with the new data
            setResult((prevResult) => {
                return prevResult.map((task) =>
                    task.id === id ? { ...task, read: true } : task
                );
            });
        } catch (err) {
            console.log(err);
        }
    }
    const handleStar = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:3002/tasks/${id}/star`);
            setResult((prevResult) => {
                return prevResult.map((task) =>
                    task.id === id ? { ...task, star: !task.star } : task
                );
            });
        } catch (err) {
            console.log(err);
        }
    }
    const handleCheck = async (id) => {
        try {
            await axios.put(`http://127.0.0.1:3002/tasks/${id}/check`);
            setResult((prevResult) => {
                return prevResult.map((task) =>
                    task.id === id ? { ...task, check: !task.check } : task
                );
            });
        } catch (err) {
            console.log(err);
        }
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
            <div>
                <div className="bg-white ml-12 w-full h-[70px] rounded-2xl">
                    <div className="grid grid-cols-4 text-center p-4">
                        <a onClick={() => setKey('Primary')} className='flex justify-center items-center text-black border-r-2 border-black'>
                            Primary
                        </a>
                        <a onClick={() => setKey('Assignment')} className='flex justify-center items-center text-black border-r-2 border-black'>
                            Assignment
                        </a>
                        <a onClick={() => setKey('News')} className='flex justify-center items-center text-black border-r-2 border-black'>
                            News
                        </a>
                        <div className='flex justify-center items-center text-black'>
                            <a onClick={() => setKey('Platform')} className='flex justify-center items-center text-black border-r-2 border-black'>
                                Platform
                            </a>
                            <div className='flex justify-items-end'>
                                <button> <GrAddCircle className='justify-end w-8 h-8' color='black' /></button>
                                <button> <GrSubtractCircle className='justify-end w-8 h-8' color='black' /></button></div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#CCCCCC] ml-12 w-full h-full p-4 rounded-lg mt-4'>
                    {
                        result.filter((e) => (key ? e.category === key : true)).map((e, i) => {
                            return <div className='relative'>
                                {/* {!e.read && <div className=' bg-[#FA6516] w-4 h-4 -left-1 -top-1 rounded-full'></div>} */}
                                {!e.read && <span class="absolute flex h-4 w-4 -left-1 -top-1">
                                    {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span> */}
                                    <span class="animate-pulse delay-100 relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
                                </span>}
                                <div className="flex items-center justify-between h-20 w-full rounded-md bg-white border-2 border-black mt-4 my-auto">
                                    <div className='flex items-center'>
                                        <button onClick={async () => { await handleCheck(e.id) }}>
                                            {!e.check ? <GrCheckbox className="pl-4 w-10 h-10" color="white" /> : <ImCheckboxChecked className="pl-4 w-10 h-10" color="black" />}
                                        </button>
                                        <button onClick={async () => { await handleStar(e.id) }}>
                                            {!e.star ? <AiOutlineStar className="ml-2 w-10 h-10" color="black" /> : <AiFillStar className="text-[#FFE559] ml-2 w-10 h-10" />}
                                        </button>

                                        <div className="text-black pl-4 text-2xl font-bold"> {e.subject} </div>
                                    </div>
                                    <button onClick={async () => { await handleRead(e.id) }}>
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
            </div>
        </>
    )
}