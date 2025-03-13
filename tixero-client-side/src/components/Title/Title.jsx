import PropTypes from "prop-types";

const Title = ({title, subTitle}) => {
    return (
        <div className="max-w-2/3 mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
            <p className="text-secondary-color">{subTitle}</p>
        </div>
    );
};

Title.propTypes ={
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}
export default Title;