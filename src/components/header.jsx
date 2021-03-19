import styles from './header.module.css'

const Header = () => {
    return (
        <section className={styles.header}>
            <h1>Weathering with you <span role="img" aria-label={"umbrella"}>☂️</span></h1>
            <span className={styles.annotation}>( Weather App)</span>
        </section>
    )
}

export default Header;