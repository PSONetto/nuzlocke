import Link from "next/link"
import styles from '../../../styles/Layout/Header/LoginHeader.module.scss'

function LoginHeader() {
    return (
        <nav className={styles.login}>
            <Link href='/'>Login</Link>
            <Link href='/'>Sign in</Link>
        </nav>
    )
}

export default LoginHeader