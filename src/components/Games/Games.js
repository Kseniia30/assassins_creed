import { gameList } from 'data/games';
import { Link } from 'react-router-dom';
import { GameImg, GamesItem, GamesList, GameTitle } from './Games.styled';

const { Container } = require('components/Common/styled/Common.styled');

const Games = () => {
    return (
        <Container>
            <GamesList>
                {gameList.map(game => {
                    const { id, title, img } = game;
                    return (
                        <GamesItem key={id}>
                            <Link to={`/games/${title.trim()}`}>
                                <GameImg src={img} alt={title} />
                                <GameTitle>{title}</GameTitle>
                            </Link>
                        </GamesItem>
                    );
                })}
            </GamesList>
        </Container>
    );
};

export default Games;
