import { Container } from 'components/Common/styled/Common.styled';
import { developmentHistory, homeInfo } from 'data/mainInfo';
import nextId from 'react-id-generator';
import {
    AdditionalImg,
    AdditionalImgList,
    AdditionalListItem,
    DevelopmentText,
    DevelopmentTextBox,
    HomeMainInfoBox,
    HomeText,
    HomeTitle,
    Image,
    ImageList,
    ImageListItem,
} from './Home.styled';

export const Home = () => {
    return (
        <Container>
            <HomeTitle>Meet the Assassin's Creed series</HomeTitle>
            <div>
                {homeInfo.map(item => {
                    const { id, text, imgList } = item;
                    return (
                        <HomeMainInfoBox key={id}>
                            {imgList && (
                                <ImageList>
                                    {imgList.map(img => {
                                        return (
                                            <ImageListItem key={nextId()}>
                                                <Image
                                                    src={img}
                                                    alt="confrontation"
                                                />
                                            </ImageListItem>
                                        );
                                    })}
                                </ImageList>
                            )}
                            <HomeText>{text}</HomeText>
                        </HomeMainInfoBox>
                    );
                })}
            </div>
            <div>
                <div>
                    <h2>Development history</h2>
                    <DevelopmentText>
                        While the games in the series have had several narrative
                        arcs, Ubisoft views the series as currently having three
                        periods of development and design philosophy. Phase one,
                        covering up to Assassin's Creed Syndicate, featured
                        games structured around single-player content, and while
                        centering on open world spaces and several role-playing
                        elements, were more action-adventure and
                        stealth-oriented. Period two, covering from Assassin's
                        Creed Origins to Assassin's Creed Mirage, brought in
                        more role-playing elements and live-service features to
                        increase player engagement. Period three will launch
                        with Assassin's Creed: Red, using lessons from the
                        second period of development to make engrossing
                        single-player games similar to the original titles but
                        with features to allow players to share achievements and
                        content with others, all to be backed by the Infinity
                        hub system.
                    </DevelopmentText>
                </div>
                {developmentHistory.map(item => {
                    const { id, title, text, imgList } = item;
                    return (
                        <div key={id}>
                            <h2>{title}</h2>
                            <HomeMainInfoBox>
                                <DevelopmentTextBox>
                                    {text.map(it => (
                                        <DevelopmentText key={nextId()}>
                                            {it}
                                        </DevelopmentText>
                                    ))}
                                </DevelopmentTextBox>
                                <ImageList>
                                    {imgList.map(img => {
                                        return (
                                            <ImageListItem key={nextId()}>
                                                <Image
                                                    src={img}
                                                    alt="history"
                                                />
                                            </ImageListItem>
                                        );
                                    })}
                                </ImageList>
                            </HomeMainInfoBox>
                        </div>
                    );
                })}
                <AdditionalImgList>
                    <AdditionalListItem>
                        <AdditionalImg
                            src="https://pbs.twimg.com/media/Fcelx5pXkAMtdhF.jpg:large"
                            alt="Assassin's Creed: Hexe"
                        />
                    </AdditionalListItem>
                    <AdditionalListItem>
                        <AdditionalImg
                            src="https://cdn.mos.cms.futurecdn.net/CKK5rSTLhH2nVqN2m68XK3.jpg"
                            alt="Assassin's Creed Mirage"
                        />
                    </AdditionalListItem>
                </AdditionalImgList>
            </div>
        </Container>
    );
};
