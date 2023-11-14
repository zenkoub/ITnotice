import axios from 'axios'
import Loader from '@/components/Loader'

export default async function page() {
    const result = await fetch('https://2b55-165-22-25-77.ngrok-free.app/tasks/MFIT', {
        cache: "no-store",
    }).then(res => res.json())

    return (
        <>
            <div>
                <Loader data={result} />
            </div>
        </>
    )
}