import axios from 'axios'
import Loader from '@/components/Loader'

export default async function page() {
    const result = await (await axios('http://127.0.0.1:3002/tasks/MFIT')).data

    return (
        <>
            <div>
                <Loader data={result} />
            </div>
        </>
    )
}