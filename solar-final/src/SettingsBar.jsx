import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from 'react';





export default function SettingsBar({ setPlanetType}) {

    const [dropDownValue, setDropdownValue] = useState('');

    const bodyTypeDropDownChange = (event) => {
        setDropdownValue(event.target.value);
    };
    
    useEffect(() => {
        setPlanetType(dropDownValue)        
    }, [dropDownValue])

    

    return(
        <div className='settings-bar'>
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