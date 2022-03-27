import Header from './Header/Header'
import Footer from './Footer'
import React from 'react'
import styles from '../../styles/Layout/Layout.module.scss'

function Layout({ children }) {
    return (
        <>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </>
    )
}

export default Layout