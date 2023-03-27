import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {Checkbox} from "@mui/material";
import {ListItemText} from "@mui/material";


const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const AccordionSelect = () =>{

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };


    return (


        ////es paneli koxqi tivnel pti unique lini pti poxances verevic
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <Typography sx={{ width: '33%', flexShrink: 0}}>
                    Location
                </Typography>
                <Typography sx={{ color: 'text.secondary',margin:'0 33px 0 auto',display:'flex',alignItems:'center' }}>All</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionSelect