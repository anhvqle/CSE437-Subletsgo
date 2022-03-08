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
        </div>
        
    )
}

export default TenantFilter;