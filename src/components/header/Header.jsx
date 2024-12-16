import mainLogo from '../../assets/icons/main-logo-dark 1.svg'
import profileIcon from '../../assets/icons/Avatar.svg'
import burgerIcon from '../../assets/icons/bx-menu.svg.svg'
import styles from './Header.module.scss'

const HeaderComponent = () => {
    return (
        <header className={styles.header}>
            <img src={mainLogo} alt="GuardarianLogo" className={styles.mainLogo} />
            <img src={burgerIcon} alt="burgerIcon" className={styles.burgerIcon} />
            <nav className={styles.headerMenu}>
                <ul className={styles.headerLinks}>
                    <li className={styles.link}>Currencies</li>
                    <li className={styles.link}>Products</li>
                    <li className={styles.link}>For Partners</li>
                    <li className={styles.link}>Support</li>
                </ul>
                <button className={styles.headerBtn}>Integrate Us</button>
                <img src={profileIcon} alt="profileIcon" className={styles.profileIcon} />
            </nav>
        </header>
    )
}

export default HeaderComponent;