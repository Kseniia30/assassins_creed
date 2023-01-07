import { Container } from 'components/Common/styled/Common.styled';
import { gameList } from 'data/games';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import nextId from 'react-id-generator';
import { Modal } from 'components/Backdrop/Backdrop';
import {
    DetailsMainInfo,
    GameGalleryImg,
    GameGalleryItem,
    GameGalleryList,
    GameImage,
    GameInfoText,
    TrailerBox,
    WatchBtn,
} from './GameDatails.styled';
import { ImageBackdrop } from 'components/Backdrop/ImageBackdrop';

const GameDetails = () => {
    const titleParam = useParams();
    const [game, setGame] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [imageBackdrop, setImageBackdrop] = useState(false);
    const [index, setIndex] = useState(null);

    useEffect(() => {
        const details = gameList.find(
            game => game.title === titleParam.gameTitle
        );
        setGame(details);
    }, [titleParam]);

    if (!game) {
        return;
    }

    const toggleBackdrop = evt => {
        setImageBackdrop(!imageBackdrop);
    };
    const toggleModal = evt => {
        setShowModal(!showModal);
    };

    const { title, year, img, sub, trailer, film, imgList } = game;

    const openBackdrop = evt => {
        evt.preventDefault();
        toggleBackdrop();
        const id = evt.currentTarget.dataset.link;
        const idx = imgList.findIndex(imgItem => imgItem === id);
        setIndex(idx);
    };
    return (
        <Container>
            <DetailsMainInfo>
                <GameImage src={img} alt={title} />
                <div>
                    <h1>{title}</h1>
                    <p>{year}</p>
                    {sub.map(item => {
                        return (
                            <GameInfoText key={nextId()}>{item}</GameInfoText>
                        );
                    })}
                </div>
            </DetailsMainInfo>

            <TrailerBox>{trailer}</TrailerBox>
            <br />
            <WatchBtn type="button" onClick={toggleModal}>
                watch game film
            </WatchBtn>
            {showModal && <Modal onClose={toggleModal}>{film}</Modal>}
            <GameGalleryList>
                {imgList.map(image => {
                    return (
                        <GameGalleryItem key={nextId()}>
                            <a
                                className="gallery__link"
                                href={image}
                                data-lightbox="lbox"
                                onClick={openBackdrop}
                                data-link={image}
                            >
                                <GameGalleryImg src={image} alt={title} />
                            </a>
                        </GameGalleryItem>
                    );
                })}
            </GameGalleryList>
            {imageBackdrop && window.screen.width > 767 && (
                <ImageBackdrop
                    onClose={toggleBackdrop}
                    image={imgList[index]}
                    title={title}
                    setIndex={setIndex}
                    index={index}
                />
            )}
        </Container>
    );
};

export default GameDetails;
