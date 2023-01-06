import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';

//is in charge of the settings for the program such as which bodies to display
export default function SettingsBar({ setPlanetType, setTripLocation, tripLocation}) {

    //state to hold the value of the drop down bars
    const [dropDownValue, setDropdownValue] = useState('');
    const [dropDownLocationValue, setDropDownLocationValue] = useState('')

    //function to update the body type dropdown state when we change the drop down 
    const bodyTypeDropDownChange = (event) => {
        setDropdownValue(event.target.value);
    };
    //we use useEffect to stop an infinit loop 
    useEffect(() => {
        setPlanetType(dropDownValue)        
    }, [dropDownValue])


    //function to update the location dropdown state when we change the drop down 
    const locationDropDownChange = (event) => {
        setDropDownLocationValue(event.target.value);       
    };
    //we use useEffect to stop an infinit loop 
    useEffect(() => {
        setTripLocation(dropDownLocationValue) 
    }, [dropDownLocationValue])

    
    return(
        <div className='settings-bar'>
            {/* the drop down bar */}
            <FormControl sx={{ m: 1, minWidth: 160 }} size="small" variant="filled">
                <InputLabel>Body Type</InputLabel>
                <Select
                    className='select'
                    value={dropDownValue}
                    defaultValue={'planets'}
                    label="Body Type"
                    onChange={bodyTypeDropDownChange}
                >                    
                    <MenuItem value={'planets'} >Planets</MenuItem>
                    <MenuItem value={'dwarfPlanets'}>Dwarf Planets</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, minWidth: 160 }} size="small" variant="filled">
                <InputLabel>Location</InputLabel>
                <Select
                    className='select'
                    value={dropDownLocationValue}
                    defaultValue={'start'}
                    label="Location"
                    onChange={locationDropDownChange}
                >                    
                    <MenuItem value={'start'} >Start</MenuItem>
                    <MenuItem value={'end'}>End</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

