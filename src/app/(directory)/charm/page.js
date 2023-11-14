import axios from 'axios'
import Loader from '@/components/Loader'

export default async function page() {
    const result = await (await axios('https://2b55-165-22-25-77.ngrok-free.app/tasks/CHARM')).data

    return (
        <>
            <div>
                <Loader data={result} />
            </div>
        </>
    )
}