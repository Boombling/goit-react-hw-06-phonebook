import React from "react";


const FilterContact = ({value, onChange}) => (
    <div>
        <label>
            Finde contact by name
            <input type='text' value={value} onChange={onChange}></input>
        </label>
    </div>
)

export default FilterContact