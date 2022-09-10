import Subdivisao from './Subdivisao'

export default function Linha (props) {
    let branco = "#FFF";
    let preto = "#000";
    let linha = [];

    for(let i = 0; i < 8; i++) {
        if(i%2 == 0) {
            linha.push(<Subdivisao cor={props.branco == true ? branco : preto}/>)
        } else {
            linha.push(<Subdivisao cor={props.branco == true ? preto : branco}/>)
        }
    }
        
    return <>{linha}</>
}