import './header.scss';
import images from '../../assets/img';
const Header = () => {
    return (
        <>
            <header
                style={{
                    backgroundColor: '#ff9051',
                    backgroundImage: 'linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%)',
                }}>
                <div className="info-container">
                    <div className="info-edit">Edit</div>
                    <img className="info-ava" src={images.image1} alt="img1" />
                    <div className="info-username">Das110722</div>
                    <div className="info-age">I am 20 year old</div>
                    <div className="info-about"> I am developer</div>
                </div>
            </header>
        </>
    );
};

export default Header;
