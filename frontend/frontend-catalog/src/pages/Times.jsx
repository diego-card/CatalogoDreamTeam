import { TeamList } from '../helpers/TeamList'

const Times = () => {
    return (
        <div className='container' id='colecao-center'>
            <ul className='scrollable-ul is-size-4'>
                {TeamList.map(team => (
                    <li key={team}><a href={`/times/${team.team}`}>{team.team}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Times