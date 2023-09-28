/* eslint-disable react/prop-types */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Form.css'
import { correctFlag, correctLogo, textClass } from "../helpers/helperFunctions"
import { TeamList } from "../helpers/TeamList"

const Form = ({ cards, bandeiras }) => {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredData = cards.filter(card =>
        card.nome.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const url = (code) => `https://api.pcloud.com/getpubthumb?code=${code}&size=200x300`

    const handleSearch = (event) => {
        const value = event.target.value
        setSearchTerm(value)
    }


    const navigate = useNavigate()

    return (
        <div className="container" id="formCenter">
            <h1 className="has-text-white-ter is-size-3 has-text-weight-bold">Pesquise um nome de jogador.</h1>
            <form>
                <div className="control">
                    <input className="input" value={searchTerm} onChange={handleSearch} placeholder="Ex: Arrascaeta..."></input>
                </div>
            </form>

            <ul>
                {
                    searchTerm === '' ? (
                        <p></p>
                    ) : filteredData.length > 10 ? (
                        <p className="has-text-white-ter">Muitos resultados, seja mais específico</p>
                    ) : filteredData.length === 0 ? (
                        <p className="has-text-white-ter">Nenhum resultado encontrado.</p>
                    ) : filteredData.map(card => (
                        <li key={card.id} id="wait">
                                <img src={correctLogo(card.time, TeamList)} width={30} height={20}></img>
                                <img src={correctFlag(card.nacionalidade, bandeiras)} width={35} height={25}></img>
                                <img src={url(card.code)}
                                    width={50}
                                    height={75}
                                    onClick={() => navigate(`/carta/${card.id}`)}></img>
                                <span className="has-text-weight-bold is-size-5">{card.nome}</span>
                            <div className="right">
                                <span className={`${textClass(card.overall)} has-text-weight-bold is-size-4`}>{card.overall}</span>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Form