import { AiOutlineRead } from 'react-icons/ai';
import { BookAuthor } from '../Books.styled';
import {
    BookDescription,
    BookModalBox,
    BookModalImg,
    ReadLink,
} from './BooksModal.styled';
import PropTypes from 'prop-types';

export const BooksModal = ({ img, title, author, sub, read }) => {
    return (
        <BookModalBox>
            <BookModalImg src={img} alt={title} />
            <div>
                <h2>{title}</h2>
                <BookAuthor>{author}</BookAuthor>
                <BookDescription>{sub}</BookDescription>
                {read && (
                    <ReadLink href={read} target="_blank" rel="noreferrer">
                        Read <AiOutlineRead className="readIcon" />
                    </ReadLink>
                )}
            </div>
        </BookModalBox>
    );
};

BooksModal.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    sub: PropTypes.string,
    read: PropTypes.string,
};
