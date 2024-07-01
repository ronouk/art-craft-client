import CraftItem from "./CraftItem";
import PropTypes from 'prop-types';

const CraftItemsSection = ({ crafts }) => {
    return (
        <div>
            {
                crafts.map((craft, index) => <CraftItem key={index} craft={craft}></CraftItem>)
            }
        </div>
    );
};

CraftItemsSection.propTypes = {
    crafts: PropTypes.array
}

export default CraftItemsSection;