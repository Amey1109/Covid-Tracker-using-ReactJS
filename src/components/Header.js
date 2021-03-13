import React from 'react'
import { FormControl, MenuItem, Select } from "@material-ui/core";
import "./Header.css"


function Header(props) {
    return (
        <div className="header">
        <h2>COVID-19 TRACKER</h2>
        <FormControl className="header__dropdown">
          <Select
            variant="outlined"
            onChange={props.onCountryChange}
            value={props.country}
          >
            <MenuItem value={props.country}>Worldwide</MenuItem>
            {props.countries.map((country,index) => {
              return <MenuItem key={index} value={country.value}>{country.name}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
    )
}

export default Header
