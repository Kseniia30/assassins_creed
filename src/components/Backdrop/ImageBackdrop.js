import css from './Backdrop.module.css';
import { RxCross2 } from 'react-icons/rx';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const ImageBackdrop = ({ onClose, image, title, setIndex, index }) => {
    useEffect(() => {
        const handleEsc = evt => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        const handleClick = evt => {
            if (evt.target === document.querySelector('#\\#image-backdrop')) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('click', handleClick);
        };
    }, [onClose]);

    const clickRight = () => {
        setIndex((index += 1));
        if (index > 11) {
            setIndex(0);
        }
    };

    const clickLeft = () => {
        setIndex((index -= 1));
        if (index < 0) {
            setIndex(11);
        }
    };

    return createPortal(
        <div className={css.backdrop} id="#image-backdrop">
            <button
                type="button"
                onClick={() => onClose()}
                className={css.closeBtn}
                style={{ color: '#FFF' }}
            >
                <RxCross2 />
            </button>
            <div className={css.imageModalBox}>
                <TbArrowBigLeftLine
                    style={{ color: '#FFF', marginRight: '20px' }}
                    onClick={clickLeft}
                />
                <div>
                    <img src={image} alt={title} className={css.largeImg} />
                </div>
                <TbArrowBigRightLine
                    style={{ color: '#FFF', marginLeft: '20px' }}
                    onClick={clickRight}
                />
            </div>
        </div>,
        modalRoot
    );
};

ImageBackdrop.propTypes = {
    onClose: PropTypes.func,
    image: PropTypes.string,
    title: PropTypes.string,
    setIndex: PropTypes.func,
    index: PropTypes.number,
};
