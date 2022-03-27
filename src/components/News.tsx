import styles from '../styles/News.module.scss'
import Headline from '../components/Headline'
import SecondaryNews from './SecondaryNews'

function News() {
    return (
        <section className={styles.news}>
            <Headline />
            <SecondaryNews />
        </section>
    )
}

export default News