import './header.scss';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
const Header = (props) => {
    const { setEdit } = props;

    const user = useSelector((state) => state.user);

    const handleEdit = () => {
        setEdit(true);
    };
    return (
        <>
            <header
                style={{
                    backgroundColor: '#ff9051',
                    backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)',
                }}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img className="info-ava" src={user.avaUrl} alt="img1" />
                    <div className="info-username">{user.name}</div>
                    <div className="info-age">{user.age}</div>
                    <div className="info-about">{user.about}</div>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    setEdit: PropTypes.func.isRequired,
};

export default Header;
