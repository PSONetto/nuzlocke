import Logo from "./Logo"
import MenuBar from "./MenuBar"
import LoginHeader from './LoginHeader'
import styles from '../../../styles/Layout/Header/Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <Logo />
            <MenuBar />
            <LoginHeader />
        </header>
    )
}

export default Header