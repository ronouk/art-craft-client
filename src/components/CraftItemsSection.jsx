import CraftItem from "./CraftItem";
import PropTypes from 'prop-types';

const CraftItemsSection = ({ crafts }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {
                crafts.slice(0,9).map((craft, index) => <CraftItem key={index} craft={craft}></CraftItem>)
            }
            
        </div>
    );
};

CraftItemsSection.propTypes = {
    crafts: PropTypes.array
}

export default CraftItemsSection;