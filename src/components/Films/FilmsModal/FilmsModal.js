import nextId from 'react-id-generator';
import {
    FilmModalInfoBox,
    FilmOverview,
    GenresList,
    Poster,
} from './FilmsModal.styled';
const posterStartPath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

export const FilmsModal = ({
    poster,
    id,
    title,
    time,
    release,
    overview,
    genres,
}) => {
    return (
        <FilmModalInfoBox>
            <Poster
                src={
                    !poster && id === 1070635
                        ? `${posterStartPath}/ioluTkffQBrv5IUk9b0vPll1hKe.jpg`
                        : `${posterStartPath}${poster}`
                }
                alt={title}
            />
            <div>
                <h2>{title}</h2>
                <p>
                    Release date:{' '}
                    {!poster && id === 1070635 ? '2011' : release.slice(0, 4)}
                </p>
                <p>Runtime: {!poster && id === 1070635 ? '36' : time} min</p>
                <FilmOverview>
                    <b>Overview:</b>{' '}
                    {!poster && id === 1070635
                        ? "When the Duke of Milan is brutally murdered, the Assassin Giovanni Auditore is dispatched to investigate. What he uncovers implicates Italy's most powerful families reaching all the way back to the Vatican itself. As Giovanni draws closer to the truth, he becomes hunted himself. He must expose the conspirators before he joins their ever-growing list of victims."
                        : overview}
                </FilmOverview>
                {genres.length !== 0 && <p>Genres:</p>}
                <GenresList>
                    {genres.map(genre => {
                        return <li key={nextId()}>{genre.name}</li>;
                    })}
                </GenresList>
            </div>
        </FilmModalInfoBox>
    );
};
