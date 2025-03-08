import PropTypes from "prop-types";

const Button = ({children, onClick, className}) => {
    return (
        <button onClick={()=>onClick} className={`  ${className}`}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
}
export default Button;