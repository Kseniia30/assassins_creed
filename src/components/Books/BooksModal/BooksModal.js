import { AiOutlineRead } from 'react-icons/ai';
import { BookAuthor } from '../Books.styled';
import {
    BookDescription,
    BookModalBox,
    BookModalImg,
    ReadLink,
} from './BooksModal.styled';

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
