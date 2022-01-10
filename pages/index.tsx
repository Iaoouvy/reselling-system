import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-black h-screen flex justify-center font-mono">
            <div className="pt-4">
                <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-red-500 ">Sun Rise</h2>
            </div>
        </div> 
    )
}

export default Home
