import './Footer.scss';
import PropTypes from 'prop-types';

export const Footer = (props) => {
    const { isPost, setPost } = props;
    return (
        <footer>
            <div className="footer-title" onClick={() => setPost(!isPost)}>
                {isPost ? 'Cancel' : 'Create'}
            </div>
        </footer>
    );
};

Footer.propTypes = {
    isPost: PropTypes.bool.isRequired,
    setPost: PropTypes.func.isRequired,
};
