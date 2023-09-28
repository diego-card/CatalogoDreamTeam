/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { correctFlag, correctLogo, textClass } from "../helpers/helperFunctions"
import { TeamList } from "../helpers/TeamList"

const PaisInfo = ({ cards, bandeiras }) => {
    const country = useParams()
    const filteredCards = cards.filter(card => card.nacionalidade === country.pais)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 15
    const [displayedCards, setDisplayedCards] = useState([])

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const cardsToDisplay = filteredCards.slice(startIndex, endIndex);

        setDisplayedCards(cardsToDisplay);
    }, [currentPage, cards])

    // Calculate the total number of pages based on the number of items
    const totalPages = Math.ceil(filteredCards.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        <div>
            <table className="table tester" id="info-id">
                <tbody>
                    {displayedCards.map(card => (

                        card.posicao === 'Goleiro' ? (
                            <tr key={card.id}>
                                <td>
                                    <img src={correctLogo(card.time, TeamList)} width={15} height={15} id="teamLogoMiddle"></img> <img src={correctFlag(card.nacionalidade, bandeiras)} width={20} height={20}></img> <a href={`/carta/${card.id}`}>{card.nome}</a>
                                </td>
                                <td className={`${textClass(card.overall)}`}>{card.overall}</td>
                                <td>{card.posicao}</td>
                                <td>{card.colecao}</td>
                                <td>{card.preco}</td>

                                <td className={`${textClass(card.alcance)}`}>{card.alcance}</td>
                                <td className={`${textClass(card.reflexo)}`}>{card.reflexo}</td>
                                <td className={`${textClass(card.conducao)}`}>{card.conducao}</td>
                                <td className={`${textClass(card.explosao)}`}>{card.explosao}</td>
                                <td className={`${textClass(card.reposicao)}`}>{card.reposicao}</td>
                                <td className={`${textClass(card.posicionamento)}`}>{card.posicionamento}</td>
                                <td>{card.habilidade}</td>
                            </tr>

                        ) : (
                            <tr key={card.id}>
                                <td>
                                    <img src={correctLogo(card.time, TeamList)} width={15} height={15} id="teamLogoMiddle"></img> <img src={correctFlag(card.nacionalidade, bandeiras)} width={20} height={20}></img> <a href={`/carta/${card.id}`}>{card.nome}</a>
                                </td>
                                <td className={`${textClass(card.overall)}`}>{card.overall}</td>
                                <td>{card.posicao}</td>
                                <td>{card.colecao}</td>
                                <td>{card.preco}</td>

                                <td className={`${textClass(card.passe)}`}>{card.passe}</td>
                                <td className={`${textClass(card.drible)}`}>{card.drible}</td>
                                <td className={`${textClass(card.desarme)}`}>{card.desarme}</td>
                                <td className={`${textClass(card.finalizacao)}`}>{card.finalizacao}</td>
                                <td className={`${textClass(card.velocidade)}`}>{card.velocidade}</td>
                                <td className={`${textClass(card.resistencia)}`}>{card.resistencia}</td>
                                <td>{card.habilidade}</td>
                            </tr>
                        )
                    ))}
                </tbody>
            </table>

            <nav className="pagination is-small" role="navigation">
                <div className="pagination-list">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`pagination-link ${currentPage === index + 1 && 'is-current'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default PaisInfo