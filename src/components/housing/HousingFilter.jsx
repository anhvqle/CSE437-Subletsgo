import { useState } from "react";
import Slider from '@material-ui/core/Slider';

const HousingFilter = ({ initialPriceRange, changeOption, changePrice }) => {

    const [priceRange, setPriceRange] = useState([null, null]);
    const priceRangeSelector = (e, newPrice) => {
        setPriceRange(newPrice);
        changePrice(newPrice);
    };
    const onCheckboxChange = (e) => {
        const data = e.target.dataset;
        changeOption(data.category, data.option, e.target.checked)
    }
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
                        <input className="checkbox" type="checkbox" id="one-bed" data-category="numBed" data-option="1" onChange={onCheckboxChange} />  1 bed
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="two-bed" data-category="numBed" data-option="2" onChange={onCheckboxChange} />  2 beds
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="three-bed" data-category="numBed" data-option="3" onChange={onCheckboxChange} />  3 beds
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="four-bed" data-category="numBed" data-option="4+" onChange={onCheckboxChange} />  4+ beds
                    </label>
                </div>
                <p />

                <p className="filter-header">Bathroom(s)</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="one-bath" data-category="numBath" data-option="1" onChange={onCheckboxChange} />  1 bath
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="two-bath" data-category="numBath" data-option="2" onChange={onCheckboxChange} />  2 baths
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="three-bath" data-category="numBath" data-option="3" onChange={onCheckboxChange} />  3 baths
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="four-bath" data-category="numBath" data-option="4+" onChange={onCheckboxChange} />  4+ baths
                    </label>
                </div>
                <p />

                <p className="filter-header">Amenities</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="air-conditioning" data-category="amenities" data-option="airConditioner" onChange={onCheckboxChange} />  Air Conditioning
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="in-unit-washer-dryer" data-category="amenities" data-option="laundry" onChange={onCheckboxChange} />  In Unit Washer & Dryer
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="patio-balcony" data-category="amenities" data-option="balcony" onChange={onCheckboxChange} />  Patio/Balcony
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="pet-friendly" data-category="amenities" data-option="petFriendly" onChange={onCheckboxChange} />  Pet-friendly
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="elevator" data-category="amenities" data-option="elevator" onChange={onCheckboxChange} />  Elevator
                    </label>
                </div>
            </div>
        </div>

    )
}

export default HousingFilter;