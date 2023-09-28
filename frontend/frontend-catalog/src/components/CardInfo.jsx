/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom"
import '../styles/CardInfo.css'
import { correctFlag, correctLogo, progressBarClass, textClass } from "../helpers/helperFunctions"
import { TeamList } from "../helpers/TeamList"

const CardInfo = ({ cards, bandeiras }) => {
    const { id } = useParams()
    const card = Object.values(cards).find(item => item.id === id)

    const url = (code) => `https://api.pcloud.com/getpubthumb?code=${code}&size=700x800`

    return (
        <div className="container">
            {
                card.posicao === 'Goleiro' ? (

                    <div className="containeru has-background-grey">
                        <div className="side-by-side">
                            {/* The image section*/}
                            <div className="card-image">
                                <img src={url(card.code)} width={325} height={350}></img>
                            </div>

                            {/* The the table section */}
                            <div className="card-table">
                                <table className="table has-background-grey-darker has-text-white-ter">
                                    <tbody>
                                        <tr>
                                            <th className="has-text-light">Nome</th>
                                            <td>{card.nome}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Time</th>
                                            <td>
                                                <a href={`/times/${card.time}`}>
                                                    <img src={`${correctLogo(card.time, TeamList)}`} width={15} height={15} id="teamLogoMiddle"></img> {card.time}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Posição</th>
                                            <td><a href={`/posicoes/${card.posicao}`}>{card.posicao}</a></td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Coleção</th>
                                            <td><a href={`/colecoes/${card.colecao}`}>{card.colecao}</a></td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Nacionalidade</th>
                                            <td>
                                                <a href={`/paises/${card.nacionalidade}`}>
                                                    <img src={correctFlag(card.nacionalidade, bandeiras)} width={15} height={15}></img> {card.nacionalidade}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Preço</th>
                                            <td>{card.preco}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Habilidade</th>
                                            <td>{card.habilidade}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Overall</th>
                                            <td>{card.overall}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">ID</th>
                                            <td>{card.id}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        {/* The column section */}
                        <div className="kolumns has-background-grey-darker">
                            <div className="columns">
                                <div className="column">
                                    <span className="label">Alcance</span>
                                    <span className={`value ${textClass(card.alcance)}`}>{card.alcance}</span>
                                    <progress className={`progress ${progressBarClass(card.alcance)}`} value={card.alcance} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Reflexo</span>
                                    <span className={`value ${textClass(card.reflexo)}`}>{card.reflexo}</span>
                                    <progress className={`progress ${progressBarClass(card.reflexo)}`} value={card.reflexo} max="100"></progress>
                                </div>

                            </div>

                            <div className="columns">
                                <div className="column">
                                    <span className="label">Condução</span>
                                    <span className={`value ${textClass(card.conducao)}`}>{card.conducao}</span>
                                    <progress className={`progress ${progressBarClass(card.conducao)}`} value={card.conducao} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Explosão</span>
                                    <span className={`value ${textClass(card.explosao)}`}>{card.explosao}</span>
                                    <progress className={`progress ${progressBarClass(card.explosao)}`} value={card.explosao} max="100"></progress>
                                </div>
                            </div>


                            <div className="columns">
                                <div className="column">
                                    <span className="label">Reposição</span>
                                    <span className={`value ${textClass(card.reposicao)}`}>{card.reposicao}</span>
                                    <progress className={`progress ${progressBarClass(card.reposicao)}`} value={card.reposicao} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Posicionamento</span>
                                    <span className={`value ${textClass(card.posicionamento)}`}>{card.posicionamento}</span>
                                    <progress className={`progress ${progressBarClass(card.posicionamento)}`} value={card.posicionamento} max="100"></progress>
                                </div>
                            </div>

                        </div>

                    </div>

                ) : (

                    <div className="containeru has-background-grey">
                        <div className="side-by-side">
                            <div className="card-image">
                                <img src={url(card.code)} width={325} height={350}></img>
                            </div>

                            <div className="card-table">
                                <table className="table has-background-grey-darker has-text-white-ter">
                                    <tbody>
                                        <tr>
                                            <th className="has-text-light">Nome</th>
                                            <td>{card.nome}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Time</th>
                                            <td>
                                                <a href={`/times/${card.time}`}>
                                                    <img src={`${correctLogo(card.time, TeamList)}`} width={15} height={15} id="teamLogoMiddle"></img> {card.time}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Posição</th>
                                            <td><a href={`/posicoes/${card.posicao}`}>{card.posicao}</a></td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Coleção</th>
                                            <td><a href={`/colecoes/${card.colecao}`}>{card.colecao}</a></td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Nacionalidade</th>
                                            <td>
                                                <a href={`/paises/${card.nacionalidade}`}>
                                                    <img src={correctFlag(card.nacionalidade, bandeiras)} width={15} height={15}></img> {card.nacionalidade}
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Preço</th>
                                            <td>{card.preco}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Habilidade</th>
                                            <td>{card.habilidade}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">Overall</th>
                                            <td>{card.overall}</td>
                                        </tr>
                                        <tr>
                                            <th className="has-text-light">ID</th>
                                            <td>{card.id}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="kolumns has-background-grey-darker">
                            <div className="columns">
                                <div className="column">
                                    <span className="label">Passe</span>
                                    <span className={`value ${textClass(card.passe)}`}>{card.passe}</span>
                                    <progress className={`progress ${progressBarClass(card.passe)}`} value={card.passe} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Finalização</span>
                                    <span className={`value ${textClass(card.finalizacao)}`}>{card.finalizacao}</span>
                                    <progress className={`progress ${progressBarClass(card.finalizacao)}`} value={card.finalizacao} max="100"></progress>
                                </div>

                            </div>

                            <div className="columns">
                                <div className="column">
                                    <span className="label">Drible</span>
                                    <span className={`value ${textClass(card.drible)}`}>{card.drible}</span>
                                    <progress className={`progress ${progressBarClass(card.drible)}`} value={card.drible} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Velocidade</span>
                                    <span className={`value ${textClass(card.velocidade)}`}>{card.velocidade}</span>
                                    <progress className={`progress ${progressBarClass(card.velocidade)}`} value={card.velocidade} max="100"></progress>
                                </div>
                            </div>

                            <div className="columns">
                                <div className="column">
                                    <span className="label">Desarme</span>
                                    <span className={`value ${textClass(card.desarme)}`}>{card.desarme}</span>
                                    <progress className={`progress ${progressBarClass(card.desarme)}`} value={card.desarme} max="100"></progress>
                                </div>

                                <div className="column">
                                    <span className="label">Resistência</span>
                                    <span className={`value ${textClass(card.resistencia)}`}>{card.resistencia}</span>
                                    <progress className={`progress ${progressBarClass(card.resistencia)}`} value={card.resistencia} max="100"></progress>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </div >
    )
}

export default CardInfo