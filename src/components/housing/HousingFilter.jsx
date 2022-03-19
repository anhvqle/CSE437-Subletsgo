import { useState } from "react";
import Slider from '@material-ui/core/Slider';

const HousingFilter = ({ initialPriceRange }) => {

    const [priceRange, setPriceRange] = useState([null, null]);
    const priceRangeSelector = (e, newPrice) => {
        setPriceRange(newPrice);
    };
    const defaultValue = priceRange[0] ? priceRange : initialPriceRange;
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

                <p className="filter-header">Bedroom(s)</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="one-bed" />  1 bed
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="two-bed" />  2 beds
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="three-bed" />  3 beds
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="four-bed" />  4+ beds
                    </label>
                </div>
                <p />

                <p className="filter-header">Bathroom(s)</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="one-bath" />  1 bath
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="two-bath" />  2 baths
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="three-bath" />  3 baths
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="four-bath" />  4+ baths
                    </label>
                </div>
                <p />

                <p className="filter-header">Amenities</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="air-conditioning" />  Air Conditioning
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="in-unit-washer-dryer" />  In Unit Washer & Dryer
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="patio-balcony" />  Patio/Balcony
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="pet-friendly" />  Pet-friendly
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="elevator" />  Elevator
                    </label>
                </div>
            </div>
        </div>

    )
}

export default HousingFilter;