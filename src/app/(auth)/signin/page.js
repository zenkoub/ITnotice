"use client"
import { useState } from 'react'
export default function MyModal() {
    const [open, setOpen] = useState(true)
    return (
        <>
            <div>
                {/* <button className='text-white' onClick={() => setOpen(!open)}>
                    adsgasd
                </button> */}
                {/* <Form open={open} setOpen={setOpen}/> */}
            </div>
        </>
    )
}
