import { GrCheckbox } from 'react-icons/gr'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { ImCheckboxChecked } from 'react-icons/im'
import axios from 'axios'

export default async function page() {
    const result = await (await axios('https://3eef-161-246-72-2.ngrok-free.app')).data
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
                    <div className="grid grid-cols-4 text-center p-6">
                        <div className='flex justify-center items-center text-black border-r-2 border-black'>
                            Primary
                        </div>
                        <div className='flex justify-center items-center text-black border-r-2 border-black'>
                            <div className="flex text-black"> Assignment </div>
                        </div>
                        <div className='flex justify-center items-center text-black border-r-2 border-black'>
                            <div className="flex text-black"> News </div>
                        </div>
                        <div className='flex justify-center items-center text-black'>
                            <div className="flex text-black"> Platform </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#CCCCCC] ml-12 w-full h-full p-4 rounded-lg mt-4'>
                    {
                        result.map(e => {
                            return <div className='relative'>
                                {!e.read && <div className='absolute bg-[#FA6516] w-4 h-4 -left-1 -top-1 rounded-full'></div>}
                                <div className="flex items-center justify-between h-20 w-full rounded-md bg-white border-2 border-black mt-4 my-auto">
                                    <div className='flex items-center'>
                                        {!e.check ? <GrCheckbox className="pl-4 w-10 h-10" color="white" /> : <ImCheckboxChecked className="pl-4 w-10 h-10" color="black" />}
                                        {!e.star ? <AiOutlineStar className="ml-2 w-10 h-10" color="black" /> : <AiFillStar className="text-[#FFE559] ml-3 w-10 h-10" />}

                                        <div className="text-black pl-4 text-2xl font-bold"> {e.subject} </div>
                                    </div>
                                    <div className='flex mr-96'>
                                        <div className="text-black pl-20 text-2xl font-bold">({e.category.slice(0, 1)})</div>
                                        <div className="text-[#AAAAAA] pl-4 text-2xl"> - {e.description} </div>
                                    </div>
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