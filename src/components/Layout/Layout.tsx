import Header from './Header/Header'
import Footer from './Footer'
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