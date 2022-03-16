import { useState } from "react";
import Slider from '@material-ui/core/Slider';

const HousingFilter = () => {

    const [priceRange, setPriceRange] =  useState([1,1000]);
  
    const priceRangeSelector = (e, newPrice) => {
        setPriceRange(newPrice);
    };

    return (
        <div>
            <div>
                <p className="filter-header">Price</p>
                <Slider
                    value={priceRange}
                    onChange={priceRangeSelector}
                    valueLabelDisplay="auto"
                    defaultValue={[1, 1000]}
                    min={1}
                    max={1000}
                />
                <div>
                    Current Selected Price Range: ${priceRange[0]} - ${priceRange[1]}
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