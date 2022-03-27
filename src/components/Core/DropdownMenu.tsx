import styles from '../../styles/Core/DropdownMenu.module.scss'

function DropdownMenu({ children, title }) {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>{title}</button>
            <div className={styles.dropdownContent}>
                {children}
            </div>
        </div>
    )
}

export default DropdownMenu