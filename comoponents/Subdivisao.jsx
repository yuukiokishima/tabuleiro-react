import styles from '../styles/Subdivisao.module.css'

export default function Subdivisao(props) { 
    return (<div class={styles.quadrado} style={{
        backgroundColor: props.cor
    }}></div>)
}