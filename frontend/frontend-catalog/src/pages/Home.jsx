/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import Form from "../components/Form"
import '../styles/Home.css'

const Home = ({ cards, bandeiras }) => {
    const url = (code) => `https://api.pcloud.com/getpubthumb?code=${code}&size=700x800`
    const navigate = useNavigate()

    const filteredData = cards.filter(card => card.colecao !== 'Base')

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(filteredData)

    // Create a new array with the first 15 random elements
    const randomElements = filteredData.slice(0, 15)

    return (
        <div className="home-div">
            <Form cards={cards} bandeiras={bandeiras}/>
            <div className="container" id="em-destaque">
                <h3 className="stylish-border">Em Destaque</h3>
            </div>

            {randomElements.reduce((columns, card, index) => {
                if (index % 5 === 0) {
                    columns.push([]);
                }
                columns[columns.length - 1].push(
                    <div key={card.id} className="column" id="em-destaque">
                        <figure className="image is-96x96">
                            <img src={url(card.code)} onClick={() => navigate(`/carta/${card.id}`)}></img>
                        </figure>
                    </div>
                );
                return columns;
            }, []).map((columnGroup, index) => (
                <div key={index} className="columns is-gapless">
                    {columnGroup}
                </div>
            ))}
        </div>
    )
}

export default Home