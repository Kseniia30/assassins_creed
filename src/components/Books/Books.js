import { Modal } from 'components/Backdrop/Backdrop';
import { bookList } from 'data/books';
import { useEffect, useState } from 'react';
import {
    BookAuthor,
    BookImg,
    BookItem,
    BookList,
    BookTitle,
} from './Books.styled';
import { BooksModal } from './BooksModal/BooksModal';

const { Container } = require('components/Common/styled/Common.styled');

const Books = () => {
    const [showModal, setShowModal] = useState(false);
    const [book, setBook] = useState('');

    useEffect(() => {
        if (showModal) {
            document.querySelector('body').style.overflow = 'hidden';
        }
        if (!showModal) {
            document.querySelector('body').style.overflow = 'scroll';
        }
    }, [showModal]);

    const toggleModal = evt => {
        setShowModal(!showModal);
    };

    const openBackdrop = evt => {
        toggleModal();
        const oneBook = bookList.find(
            book => book.id === evt.currentTarget.dataset.id
        );
        setBook(oneBook);
    };
    const { title, author, sub, img, read } = book;

    return (
        <Container>
            <BookList>
                {bookList.map(book => {
                    const { id, title, author, img } = book;
                    return (
                        <BookItem key={id} data-id={id} onClick={openBackdrop}>
                            <BookTitle>{title}</BookTitle>
                            <BookAuthor>{author}</BookAuthor>
                            <BookImg src={img} alt={title} />
                        </BookItem>
                    );
                })}
            </BookList>
            {showModal && (
                <Modal onClose={toggleModal}>
                    <BooksModal
                        img={img}
                        title={title}
                        author={author}
                        sub={sub}
                        read={read}
                    />
                </Modal>
            )}
        </Container>
    );
};

export default Books;
