import { CountryList } from "../helpers/CountryList"

const Paises = () => {
    return (
        <div className='container' id='colecao-center'>
            <ul className="scrollable-ul is-size-4">
                {CountryList.map(country => (
                    <li key={country}><a href={`/paises/${country}`}>{country}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Paises