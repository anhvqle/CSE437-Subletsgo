import { useState } from "react";

const TenantFilter = ({ selectedFilter, setSelectedFilter, setExcludeMyPost }) => {
    const [useFilter, setUseFilter] = useState(false);

    const changeUseFilter = (useFilter) => {
        setUseFilter(useFilter);
        let clonedFilter = { ...selectedFilter };
        clonedFilter.useFilter = useFilter;
        setSelectedFilter(clonedFilter);
    }
    const changeOption = (useFilter, optionId, checked) => {
        let clonedFilter = { ...selectedFilter };
        clonedFilter.useFilter = useFilter;
        if (!useFilter) {
            setSelectedFilter(clonedFilter);
            return;
        }
        let [category, option] = optionId.split("-");
        clonedFilter[category][option] = checked;
        setSelectedFilter(clonedFilter);
    }

    const onOptionChange = (e) => {
        changeOption(useFilter, e.target.id, e.target.checked);
    }

    return (
        <div>
            <div className="ui">
                <label className="filter-option">
                    <input className="checkbox" type="checkbox" onChange={(e) => { changeUseFilter(e.target.checked); }} />  USE FILTER?
                </label>
            </div>

            {
                useFilter && (
                    <div>
                        <label className="filter-option">
                            <input className="checkbox" type="checkbox" onChange={(e) => { setExcludeMyPost(e.target.checked); }} /> Exclude my post
                        </label>
                        <p className="filter-header">GENDER</p>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="gender-male" onChange={onOptionChange} />  Male
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="gender-female" onChange={onOptionChange} />  Female
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="gender-other" onChange={onOptionChange} />  Other
                            </label>
                        </div>
                        <hr />

                        <p className="filter-header">CAMPUS</p>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="campus-danforth" onChange={onOptionChange} />  Danforth Campus
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="campus-wusm" onChange={onOptionChange} />  WUSM Campus
                            </label>
                        </div>
                        <hr />

                        <p className="filter-header">CLASS STANDING</p>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-freshman" onChange={onOptionChange} />  Freshman
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-sophomore" onChange={onOptionChange} />  Sophomore
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-junior" onChange={onOptionChange} />  Junior
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-senior" onChange={onOptionChange} />  Senior
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-master" onChange={onOptionChange} />  Master Student
                            </label>
                        </div>
                        <div className="ui">
                            <label className="filter-option">
                                <input className="checkbox" type="checkbox" id="classStanding-phd" onChange={onOptionChange} />  PhD Student
                            </label>
                        </div>
                    </div>
                )
            }

        </div>

    )
}

export default TenantFilter;