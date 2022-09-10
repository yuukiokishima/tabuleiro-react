import styles from '../styles/Home.module.css'
import Linha from '../comoponents/Linha'
import Subdivisao from '../comoponents/Subdivisao'

export default function Home() {
    return (
        <div style={{backgroundColor: "gray"}}>
            <div className={styles.main}>
                <Linha/>
            </div>            
        </div>
    )
}