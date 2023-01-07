import { Modal } from 'components/Backdrop/Backdrop';
import {
    fetchAssassinCreedAll,
    fetchMovieById,
    fetchMovieTrailer,
} from 'data/films';
import { useEffect, useState } from 'react';
import { FilmImg, FilmItem, FilmList } from './Films.styled';
import { FilmsModal } from './FilmsModal/FilmsModal';

const { Container } = require('components/Common/styled/Common.styled');

const posterStartPath = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';

const Films = () => {
    const [filmList, setFilmList] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        fetchAssassinCreedAll().then(res => {
            setFilmList(res.data.results);
        });
    }, []);

    if (!filmList) {
        return;
    }

    const toggleModal = evt => {
        setShowModal(!showModal);
    };

    const openBackdrop = async evt => {
        toggleModal();
        const id = evt.currentTarget.dataset.id;
        await fetchMovieById(id).then(res => setMovie(res));
        await fetchMovieTrailer(id).then(res => {
            setTrailer(res.data.results[0]);
        });
    };
    return (
        <Container>
            <div style={{ paddingTop: '10px' }}>
                <FilmList>
                    {filmList.map(film => {
                        const {
                            id,
                            original_title,
                            poster_path,
                            release_date,
                        } = film;
                        return (
                            <FilmItem
                                key={id}
                                data-id={id}
                                onClick={openBackdrop}
                            >
                                <FilmImg
                                    src={`${posterStartPath}${poster_path}`}
                                    alt={original_title}
                                />
                                <h2>{original_title}</h2>
                                <p>{release_date.slice(0, 4)}</p>
                            </FilmItem>
                        );
                    })}
                </FilmList>
                {showModal && movie && (
                    <Modal onClose={toggleModal}>
                        <div>
                            <FilmsModal
                                poster={movie.data.poster_path}
                                id={movie.data.id}
                                title={movie.data.original_title}
                                time={movie.data.runtime}
                                release={movie.data.release_date}
                                overview={movie.data.overview}
                                genres={movie.data.genres}
                            />
                            {trailer && (
                                <iframe
                                    className="filmVideo"
                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                    title={trailer.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                            {!trailer && movie.data.id === 57051 && (
                                <iframe
                                    className="filmVideo"
                                    src="https://www.youtube.com/embed/dpfi25P2mVo"
                                    title="Assassin's Creed Ascendance - Trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                            {!trailer && movie.data.id === 79089 && (
                                <iframe
                                    className="filmVideo"
                                    src="https://www.youtube.com/embed/cv3OabBh2cY"
                                    title="Assassin's Creed Revelations: Embers | Trailer | Ubisoft [NA]"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                            {!trailer && movie.data.id === 1070635 && (
                                <iframe
                                    className="filmVideo"
                                    src="https://www.youtube.com/embed/QWXgtwHy8Ss"
                                    title="Assassin's Creed Lineage trailer"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                    </Modal>
                )}
            </div>
        </Container>
    );
};

export default Films;
