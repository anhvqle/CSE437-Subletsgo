import { useState } from "react";
import Slider from '@material-ui/core/Slider';

const MarketplaceFilter = ({ initialPriceRange, changeOption, changePrice }) => {

    const [priceRange, setPriceRange] = useState([null, null]);

    const priceRangeSelector = (e, newPrice) => {
        setPriceRange(newPrice);
        changePrice(newPrice);
    };
    const onCheckboxChange = (e) => {
        const data = e.target.dataset;
        changeOption(data.category, data.option, e.target.checked);
    }
    const defaultValue = priceRange[0] !== null ? priceRange : initialPriceRange;

    return (
        <div>
            <div>
                <p className="filter-header">Price</p>
                <Slider
                    value={defaultValue}
                    onChange={priceRangeSelector}
                    valueLabelDisplay="auto"
                    defaultValue={defaultValue}
                    min={initialPriceRange[0]}
                    max={initialPriceRange[1]}
                />
                <div>
                    Current Selected Price Range: ${priceRange[0] || initialPriceRange[0]} - ${priceRange[1] || initialPriceRange[1]}
                </div>
                <p />

                <p className="filter-header">Categories:</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="apparel" data-category="category" data-option="apparel" onChange={onCheckboxChange} />  Apparel
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="vehicle" data-category="category" data-option="vehicle" onChange={onCheckboxChange} />  Vehicles
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="furniture" data-category="category" data-option="furniture" onChange={onCheckboxChange} />  Furniture
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="electronic" data-category="category" data-option="electronic" onChange={onCheckboxChange} />  Electronics
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="office" data-category="category" data-option="office" onChange={onCheckboxChange} />  Offices
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="free" data-category="category" data-option="free" onChange={onCheckboxChange} />  Free Stuff
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="musical" data-category="category" data-option="musical" onChange={onCheckboxChange} />  Musical Instruments
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="sport" data-category="category" data-option="sport" onChange={onCheckboxChange} />  Sporting Goods
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="toy-game" data-category="category" data-option="toy-game" onChange={onCheckboxChange} />  Toys & Games
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="other" data-category="category" data-option="other" onChange={onCheckboxChange} />  Other
                    </label>
                </div>
                <p />
                <p className="filter-header">Conditions:</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="new" data-category="condition" data-option="new" onChange={onCheckboxChange} />  New
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="used" data-category="condition" data-option="used" onChange={onCheckboxChange} />  Used
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="refurbished" data-category="condition" data-option="refurbished" onChange={onCheckboxChange} />  Refurbished
                    </label>
                </div>
            </div>
        </div>

    )
}

export default MarketplaceFilter;