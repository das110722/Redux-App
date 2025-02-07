import PropTypes from 'prop-types';
import '../EditComponent/Edit.scss';
import '../PostComponent/PostPage.scss';

function Input(props) {
    const { inputType, classStyle, label, data, setData } = props;
    return (
        <>
            <label>{label}</label>
            {inputType === 'textarea' ? (
                <textarea
                    type="text"
                    className={classStyle}
                    placeholder={data}
                    onChange={(e) => setData(e.target.value)}
                />
            ) : (
                <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)} />
            )}
        </>
    );
}

Input.propTypes = {
    inputType: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    setData: PropTypes.func.isRequired,
    classStyle: PropTypes.string,
};

export default Input;
