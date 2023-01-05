import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';

//is in charge of the settings for the program such as which bodies to display
export default function SettingsBar({ setPlanetType}) {

    //state to hold the value of the drop down bar
    const [dropDownValue, setDropdownValue] = useState('');
    //function to update the dropdown state when we change the drop down 
    const bodyTypeDropDownChange = (event) => {
        setDropdownValue(event.target.value);
    };
    //we use useEffect to stop an infinit loop 
    useEffect(() => {
        setPlanetType(dropDownValue)        
    }, [dropDownValue])

    
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
        </div>
    )
}