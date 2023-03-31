import {Checkbox, ListItemText, TextField} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {FC} from "react";

type TFromToSelect = {
    id:number,
    paragraph:string
}


const  FromToSelect:FC<TFromToSelect> = ({id,paragraph}) =>{


    return(
            <AccordionSummary
                aria-controls={`panel${id}bh-content`}
                id={`panel${id}bh-header`}
                sx={{
                    padding:'0.5vh 16px',
                    boxShadow: "none",
                    borderRadius: 0,
                    borderLeft: "1px solid rgba(0, 0, 0, 0.09)",
                    borderRight: "1px solid rgba(0, 0, 0, 0.09)",
                    borderTop: "1px solid rgba(0, 0, 0, 0.09)",
                    backgroundColor:"white",
                    width: "calc(100% + 2px)",
                    marginLeft:'-1px'
                }}
            >
                <Typography sx={{ width: '33%', flexShrink: 0,display:'flex',alignItems:'center'}}>
                    {paragraph}
                </Typography>
                <Typography sx={{ color: 'text.secondary',gap:'25px',padding:'0 25px',boxSizing:'b',display:'flex',alignItems:'center' }}>
                    <div>
                        <TextField id="standard-basic" placeholder={'From'} variant="standard" />
                    </div>

                    <div>
                        <TextField id="standard-basic-1" placeholder={'To'} variant="standard" />
                    </div>
                </Typography>


            </AccordionSummary>
    )
}


export default FromToSelect