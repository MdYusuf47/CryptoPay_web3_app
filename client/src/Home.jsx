import React from 'react'
import { Services, Transactions, Welcome } from './components'

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Welcome />
            </div>
            <Services />
            <Transactions />

        </div>
    )
}

export default Home
