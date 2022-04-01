import styles from '../../styles/Pokedex/PokemonCard.module.scss'
import Image from 'next/image'

function PokemonCard({ id, name, sprite }) {
    return (
        <div className={styles.pokemonCard}>
            <span>{id}</span><span>{name}</span>
            <Image src={sprite} width='100%' height='100%' />
        </div>
    )
}

export default PokemonCard