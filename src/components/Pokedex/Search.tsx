import styles from '../../styles/Pokedex/Search.module.scss'

function Search() {
    return (
        <form className={styles.searchForm} action="search">
            <input 
                type="search" 
                placeholder="Insert a Pokemon or its number ID..." 
                className={styles.searchInput} />
            <button>Advanced Search</button>
        </form>
    )
}

export default Search