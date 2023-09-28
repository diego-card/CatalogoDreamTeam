import { CollectionList } from '../helpers/CollectionList'

const Colecoes = () => {
    return (
        <div className='container' id='colecao-center'>
            <ul className='scrollable-ul is-size-4'>
                {CollectionList.map(collection => (
                    <li key={collection}><a href={`/colecoes/${collection}`}>{collection}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Colecoes