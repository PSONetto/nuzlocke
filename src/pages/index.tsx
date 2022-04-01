import Head from 'next/head'
import Rules from '../components/Rules'
import styles from '../styles/Layout/Layout.module.scss'
import { getPokemon } from './api'

function Home() {
    const pokemon = getPokemon()
    console.log(pokemon)

    return (
        <div className={styles.main}>  
            <Head>
                <title>Home | Nuzlocke</title>
            </Head>
            <Rules />
        </div>
    )
}



export default Home