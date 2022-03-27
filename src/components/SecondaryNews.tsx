import styles from '../styles/SecondaryNews.module.scss'

function SecondaryNews() {
    return (
        <div className={styles.secondary}>
            <h2 className={styles.subnews}>Secondary 1</h2>
            <h2 className={styles.subnews}>Secondary 2</h2>
            <h2 className={styles.subnews}>Secondary 3</h2>
            <h2 className={styles.subnews}>Secondary 4</h2>
        </div>
    )
}

export default SecondaryNews