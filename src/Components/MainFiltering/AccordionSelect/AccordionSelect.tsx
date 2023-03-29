import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {Checkbox} from "@mui/material";
import {ListItemText} from "@mui/material";
import {FC} from "react";



type TAccordionSelect = {
    id:number,
    paragraph:string,
    selects?:string[]
}

const AccordionSelect:FC<TAccordionSelect> = ({id,paragraph,selects}) =>{

    const [expanded, setExpanded] = React.useState<string | false>(false);
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };


    return (


        ////es paneli koxqi tivnel pti unique lini pti poxances verevic
        <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id={`panel${id}bh-header`}
            >
                <Typography sx={{ width: '33%', flexShrink: 0,color:'rgb(12,51,58)'}}>
                    {paragraph}
                </Typography>
                <Typography sx={{ color: 'text.secondary',margin:'0 33px 0 auto',display:'flex',alignItems:'center' }}>All</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {selects && selects.map((name) => (
                        <MenuItem key={name} value={name} sx={{color:'rgb(12,51,58)'}}>
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