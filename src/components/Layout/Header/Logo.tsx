import styles from '../../../styles/Layout/Header/Logo.module.scss'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <a>
                    <Image
                        src='/assets/logo.png'
                        alt='logo'
                        width={240}
                        height={90} />
                </a>
            </Link>

        </div>
    )
}

export default Logo