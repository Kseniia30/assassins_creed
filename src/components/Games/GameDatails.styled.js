import styled from 'styled-components';

export const DetailsMainInfo = styled.div`
    text-align: center;
    margin-bottom: 15px;
    margin-top: 15px;

    @media screen and (min-width: 768px) {
        text-align: left;
        display: flex;
    }
`;

export const GameImage = styled.img`
    width: 300px;
    height: max-content;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;

    @media screen and (min-width: 768px) {
        width: 350px;
        margin-left: 0;
        margin-right: 70px;
        margin-top: 60px;
    }

    @media screen and (min-width: 1200px) {
        width: 600px;
    }
`;

export const GameInfoText = styled.p`
    text-align: justify;
    text-indent: 20px;
    margin-bottom: 15px;
`;

export const TrailerBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const WatchBtn = styled.button`
    margin-bottom: 15px;
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR3gU5zHujWpIx8k51ev46TDGoGisgSYiGQ&usqp=CAU);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 15px 30px;
    border-radius: 10px;
    background-position: center;
    color: blue;
    font-weight: 700;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: flex;

    :hover,
    :focus {
        background-image: linear-gradient(
                rgba(255, 255, 255, 0.5),
                rgba(255, 255, 255, 0.5)
            ),
            url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf36664d-436a-4f35-8e8a-195a4d6bfe1b/dazts6t-f6891d66-6c01-466b-9c06-31d3008bbb1b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMzY2NjRkLTQzNmEtNGYzNS04ZThhLTE5NWE0ZDZiZmUxYlwvZGF6dHM2dC1mNjg5MWQ2Ni02YzAxLTQ2NmItOWMwNi0zMWQzMDA4YmJiMWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VU0vKWGfl9Ry5imqVO6TIVmJgMciJYZb3g0a9ByL-h0');
        color: black;
        border: 1px solid black;
    }

    @media screen and (min-width: 768px) {
        padding: 20px 40px;
    }

    @media screen and (min-width: 1200px) {
        padding: 20px 50px;
    }
`;

export const GameGalleryList = styled.ul`
    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        margin-right: -30px;
        margin-top: -30px;
    }
`;

export const GameGalleryItem = styled.li`
    :not(:last-child) {
        margin-bottom: 15px;
    }

    @media screen and (min-width: 768px) {
        width: calc(100% / 2 - 30px);
        margin-right: 30px;
        margin-top: 30px;

        :not(:last-child) {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 1200px) {
        width: calc(100% / 3 - 30px);
    }
`;

export const GameGalleryImg = styled.img`
    width: 280px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 768px) {
        width: 360px;
    }
`;
