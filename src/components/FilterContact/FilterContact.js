import React from "react";
import styles from './FilterContact.module.css'


const FilterContact = ({value, onChange}) => (
    <div className={styles.section}>
        <label className={styles.lable}>
            Finde contact by name
            <br/>
            <input type='text' value={value} onChange={onChange} className={styles.filters}/>
        </label>
    </div>
)

export default FilterContact