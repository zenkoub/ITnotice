import axios from 'axios'
import Loader from '@/components/Loader'

export default async function page() {
    const result = await (await axios('https://082b-58-97-49-99.ngrok-free.app/tasks/ICS')).data

    return (
        <>
            <div>
                <Loader data={result} />
            </div>
        </>
    )
}