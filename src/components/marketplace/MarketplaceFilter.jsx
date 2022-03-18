import { useState } from "react";
import Slider from '@material-ui/core/Slider';

const MarketplaceFilter = () => {

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

                <p className="filter-header">Filter</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="apparel" />  Apparel
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="vehicle" />  Vehicles
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="furniture" />  Furniture
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="electronic" />  Electronics
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="office" />  Offices
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="free" />  Free Stuff
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="musical" />  Musical Instruments
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="sport" />  Sporting Goods
                    </label>
                </div>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="toy-game" />  Toys & Games
                    </label>
                </div>
            </div>
        </div>

    )
}

export default MarketplaceFilter;