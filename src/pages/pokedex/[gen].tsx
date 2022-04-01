import styles from '../../styles/Pokedex/Pokedex.module.scss'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Search from '../../components/Pokedex/Search'
import Pokemon from '../../components/Pokedex/Pokemon'


function Pokedex({ pokemonDataList }) {
    const router = useRouter()
    const { gen } = router.query

    const strGen = gen.slice(-1)

    return (
        <div className={styles.pokedex}>
            <Head>
                <title>Pokedex Gen {strGen} | Nuzlocke</title>
            </Head>
            <Search></Search>
            <Pokemon pokemonList={pokemonDataList} />
        </div>
    )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { gen: 'gen-1' } },
            { params: { gen: 'gen-2' } },
            { params: { gen: 'gen-3' } }
        ],
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    let pokemonNumber : number
    const pokemonDataList = []

    switch (params.gen) {
        case 'gen-1':
            pokemonNumber = 151
            break
        case 'gen-2':
            pokemonNumber = 251
            break
    }

    for (let i = 1; i <= pokemonNumber; i++) {
        const pokemonDataResponse = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        const pokemonData = await pokemonDataResponse.json()
        pokemonDataList.push(pokemonData)
    }

    return { props: { pokemonDataList } }
}

export default Pokedex