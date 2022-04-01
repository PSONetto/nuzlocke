import DropdownMenu from "../../Core/DropdownMenu"
import Link from "next/link"
import styles from '../../../styles/Layout/Header/MenuBar.module.scss'

function MenuBar() {
    return (
        <nav className={styles.menubar}>
            <DropdownMenu title="Pokedex">
                <Link href={{
                    pathname: "/pokedex/[gen]",
                    query: { gen: 'gen-1' }
                }}>
                    <a>Generation 1</a>
                </Link>
            </DropdownMenu>
            <DropdownMenu title="Guides">
                <Link href={"/guide/rgb"}>
                    <a>Generation 1</a>
                </Link>
            </DropdownMenu>
            <DropdownMenu title="Runs">
                <Link href={"/my-runs"}>
                    <a>My Runs</a>
                </Link>
                <Link href={"/community-runs"}>
                    <a>Community Runs</a>
                </Link>
            </DropdownMenu>
            <DropdownMenu title="Help">
                <Link href={"/about"}>
                    <a>About</a>
                </Link>
                <Link href={"/contact"}>
                    <a>Contact</a>
                </Link>
                <Link href={"/donations"}>
                    <a>Donations</a>
                </Link>
            </DropdownMenu>
        </nav>
    )
}

export default MenuBar