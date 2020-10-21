import React from 'react'
import LoginOrRegister from './LoginOrRegister'
import Header from './Header'
import Footer from './Footer'

export default function Home() {
    return (
        <React.Fragment>
            <Header />
            <LoginOrRegister />
            <Footer />
        </React.Fragment>
    )
}
