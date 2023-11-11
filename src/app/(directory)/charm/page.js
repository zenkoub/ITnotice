import axios from 'axios'
import Loader from '@/components/Loader'

export default async function page() {
    const result = await (await axios('https://23b3-110-164-110-135.ngrok-free.app/tasks/CHARM')).data

    return (
        <>
            <div>
                <Loader data={result} />
            </div>
        </>
    )
}