function TenantFilter() {
    return (
        <div>
            <p className="filter-header">GENDER</p>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="male-gender" />  Male
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="female-gender" />  Female
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="other-gender" />  Other
                </label>   
            </div>
            <hr />

            <p className="filter-header">CAMPUS</p>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="danforth" />  Danforth Campus
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="wusm" />  WUSM Campus
                </label>   
            </div>
            <hr />

            <p className="filter-header">CLASS STANDING</p>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="freshman" />  Freshman
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="sophomore" />  Sophomore
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="junior" />  Junior
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="senior" />  Senior
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="master" />  Master Student
                </label>   
            </div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" id="phd" />  PhD Student
                </label>   
            </div>
        </div>
        
    )
}

export default TenantFilter;