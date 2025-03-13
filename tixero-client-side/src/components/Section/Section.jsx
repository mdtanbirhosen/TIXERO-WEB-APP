import PropTypes from "prop-types";

const Section = ({children}) => {
    return (
        <section className="bg-[#ffffffaf] rounded-lg p-3 md:p-5">
            {children}
        </section>
    );
};
Section.propTypes = {
    children: PropTypes.node.isRequired,
 };

export default Section;