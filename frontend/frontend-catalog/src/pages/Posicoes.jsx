import { PositionList } from '../helpers/PositionList'
import '../styles/Posicoes.css'

const Posicoes = () => {
    return (
        <div className='container' id='colecao-center-posicao'>
            <ul className='is-size-4'>
                {PositionList.map(position => (
                    <li key={position}><a href={`/posicoes/${position}`}>{position}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Posicoes