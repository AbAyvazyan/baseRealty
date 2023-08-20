import {Checkbox, ListItemText, TextField} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useFilterContext} from "../../../Contexts/FilterContext";

type TFromToSelect = {
    id:number,
    paragraph:string
}


const  FromToSelect:FC<TFromToSelect> = ({id,paragraph}) =>{

    const [fromVal,setFromVal] = useState('')
    const [toVal,setToVal] = useState('')

    const {filterState,updateFilterState} = useFilterContext()

    const { t } = useTranslation()

    const from = t('from')
    const to = t('to')

    useEffect(()=>{
        updateFilterState({ ...filterState, [paragraph.toLowerCase()]: [+fromVal, +toVal] });
    },[fromVal,toVal])


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
                    {t(paragraph)}
                </Typography>
                <div style={{ color: 'text.secondary',gap:'25px',padding:'0 25px',boxSizing:'border-box',display:'flex',alignItems:'center' }}>
                    <div>
                        <TextField id="standard-basic" type={"number"} value={fromVal} onChange={(e)=>setFromVal(e.target.value)} placeholder={from} variant="standard" />
                    </div>

                    <div>
                        <TextField id="standard-basic-1" type={"number"} value={toVal} onChange={(e)=>setToVal(e.target.value)}  placeholder={to} variant="standard" />
                    </div>
                </div>


            </AccordionSummary>
    )
}


export default FromToSelect