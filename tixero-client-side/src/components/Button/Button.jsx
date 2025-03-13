import PropTypes from "prop-types";

const Button = ({children, onClick, className}) => {
    return (
        <button onClick={()=>onClick} className={`text-primary-color border-2 border-primary-color hover:bg-primary-color hover:text-white font-medium px-5 py-2 rounded-md  ${className}`}>
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