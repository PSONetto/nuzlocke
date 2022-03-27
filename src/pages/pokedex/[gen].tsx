import Search from "../../components/Pokedex/Search"
import Pokemons from "../../components/Pokedex/Pokemons"
import styles from '../../styles/'

function Pokedex() {
    return (
        <main>
            <Search></Search>
            <Pokemons></Pokemons>
        </main>
    )
}

export default Pokedex