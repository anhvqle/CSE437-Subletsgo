const HousingFilter = () => {
    return (
        <div>
            <div>
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" /> Exclude my post
                </label>
                <p className="filter-header">Price</p>
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange"></input>
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

                <p className="filter-header">Washer/Dryer</p>
                <div className="ui">
                    <label className="filter-option">
                        <input className="checkbox" type="checkbox" id="in-unit" />  In unit
                    </label>
                </div>
            </div>
        </div>

    )
}

export default HousingFilter;