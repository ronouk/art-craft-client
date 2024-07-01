import PropTypes from "prop-types"

const CraftItem = ({craft}) => {

    const {image, item_name, subcategory_name, short_description, price, rating, customization, processing_time, stock_status} = craft

    return (
        <div>
            {
                item_name
            }
            {
                price
            }
        </div>
    );
};

CraftItem.propTypes = {
    craft: PropTypes.object
}

export default CraftItem;