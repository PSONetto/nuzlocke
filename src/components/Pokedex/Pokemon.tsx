import styles from '../../styles/Pokedex/Pokemon.module.scss'
import PokemonCard from './PokemonCard'

function addLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0');
}

function Pokemon({ pokemonList }) {
    return (
        <section className={styles.pokemon}>
            {pokemonList.map((e, i) => {
                const sprites = e.sprites.other
                const officialArtwork = 'official-artwork'
                const sprite = sprites[officialArtwork].front_default
                
                return (
                    <PokemonCard id={e.id} name={e.name} sprite={sprite} />
                )
            })}
        </section>
    )
}

export default Pokemon