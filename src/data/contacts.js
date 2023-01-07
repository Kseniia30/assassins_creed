import nextId from 'react-id-generator';
import { SiUbisoft, SiYoutube, SiInstagram, SiTwitter } from 'react-icons/si';

export const contacts = [
    {
        id: nextId(),
        social: 'Ubisoft',
        link: 'https://www.ubisoft.com/ru-ru/game/assassins-creed/all-games',
        icon: <SiUbisoft className="contactIcon" />,
    },
    {
        id: nextId(),
        social: 'Yotube',
        link: 'https://www.youtube.com/@Ubisoft',
        icon: <SiYoutube className="contactIcon" />,
    },
    {
        id: nextId(),
        social: 'Instagram',
        link: 'https://www.instagram.com/ubisoft/',
        icon: <SiInstagram className="contactIcon" />,
    },
    {
        id: nextId(),
        social: 'Twitter',
        link: 'https://twitter.com/ubisoft',
        icon: <SiTwitter className="contactIcon" />,
    },
];
