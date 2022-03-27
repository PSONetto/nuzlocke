import Image from 'next/image'
import styles from '../../../styles/Layout/Header/Logo.module.scss'

function Logo() {
    return (
        <div className={styles.logo}>
            <a href="/">
                <Image 
                    src='/assets/logo.png' 
                    alt='logo' 
                    width={270} 
                    height={100} />
            </a>
        </div>
    )
}

export default Logo