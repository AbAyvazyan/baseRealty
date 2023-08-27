import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import {Checkbox} from "@mui/material";
import {ListItemText} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {
    Tmodels
} from "../../HomePage/Components/Filtering/InputFilterField/MultipleSelectCheckmarks/MultipleSelectCheckmarks";
import {useFilterContext} from "../../../Contexts/FilterContext";
import {TFilterSelect} from "../MainFiltering";


type TAccordionSelect = {
    id: number,
    paragraph: string,
    selects?: any
}

const AccordionSelect: FC<TAccordionSelect> = ({id, paragraph, selects}) => {

    const [expanded, setExpanded] = useState<string | false>(false);
    const [personName, setPersonName] = useState<string[]>([]);
    const [selectState, setSelectState] = useState<any>([])

    const {filterState, updateFilterState} = useFilterContext()

    const {t} = useTranslation()

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    useEffect(() => {
        if (!selects) {
            return
        }
        setSelectState(selects)
    }, [selects])

    const checkBoxHandler = (id: number) => {
        setSelectState((prevState: any) => {
            return prevState.map((values: any) => {
                if (values._id === id) {
                    return {
                        ...values,
                        isChecked: !values.isChecked,
                    };
                } else {
                    return values;
                }
            });
        });
    };

    useEffect(() => {
        if (!selectState) {
            return
        }

        const chosen = selectState
            .filter((item: TFilterSelect) => item.isChecked)
            .map((item: TFilterSelect) => item.title);

        paragraph === "Newly_Built" &&
        updateFilterState({
            ...filterState,
            [paragraph.toLowerCase()]: !!chosen.length
        });

        paragraph !== "Newly_Built" &&
        updateFilterState({
            ...filterState,
            [paragraph.toLowerCase()]: chosen,
        });
    }, [selectState])

    return (

        <Accordion expanded={expanded === `panel${id}`} onChange={handleChange(`panel${id}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1bh-content"
                id={`panel${id}bh-header`}
            >
                <Typography sx={{width: '33%', flexShrink: 0, color: 'rgb(12,51,58)'}}>
                    {t(paragraph)}
                </Typography>
                <Typography sx={{
                    color: 'text.secondary',
                    margin: '0 33px 0 auto',
                    display: 'flex',
                    alignItems: 'center'
                }}>{t('All')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {selectState.map((name: any) => (
                    <MenuItem key={name._id} value={name.title} onClick={() => checkBoxHandler(name._id)}
                              sx={{color: 'rgb(12, 51, 58)'}}>
                        <Checkbox checked={name.isChecked}/>

                        <ListItemText primary={`${t(name.title)}${name.title==='7'?'+':''}`}/>
                    </MenuItem>
                ))}
            </AccordionDetails>
        </Accordion>
    )
}

export default AccordionSelect