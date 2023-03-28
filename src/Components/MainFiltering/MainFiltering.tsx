import './MainFiltering.css'
import AccordionSelect from "./AccordionSelect/AccordionSelect";
import FromToSelect from "./FromToSelect/FromToSelect";

const filterList = [
    {
        component:AccordionSelect
    },
    {
        component:FromToSelect
    }
]

export default function MainFiltering() {

    return (
        <div>

            {/*   ste inchqan agardyon ka pti etdra tvyalnerov object verevy unenanq arrayi mej u map franq            */}

            <AccordionSelect/>
            <FromToSelect></FromToSelect>
            {/*<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel1bh-content"*/}
            {/*        id="panel1bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Location*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>All</Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.*/}
            {/*            Aliquam eget maximus est, id dignissim quam.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}


            {/*<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel2bh-content"*/}
            {/*        id="panel2bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>Construction Type</Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,*/}
            {/*            varius pulvinar diam eros in elit. Pellentesque convallis laoreet*/}
            {/*            laoreet.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}


            {/*<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            New Construction*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}


            {/*<Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Elevator*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}


            {/*<Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Number of Rooms*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}

            {/*<Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Number of Bathrooms*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}

            {/*<Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Furniture*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}


            {/*<Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>*/}
            {/*    <AccordionSummary*/}
            {/*        expandIcon={<ExpandMoreIcon />}*/}
            {/*        aria-controls="panel3bh-content"*/}
            {/*        id="panel3bh-header"*/}
            {/*    >*/}
            {/*        <Typography sx={{ width: '33%', flexShrink: 0 }}>*/}
            {/*            Renovation*/}
            {/*        </Typography>*/}
            {/*        <Typography sx={{ color: 'text.secondary' }}>*/}
            {/*            All*/}
            {/*        </Typography>*/}
            {/*    </AccordionSummary>*/}
            {/*    <AccordionDetails>*/}
            {/*        <Typography>*/}
            {/*            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit*/}
            {/*            amet egestas eros, vitae egestas augue. Duis vel est augue.*/}
            {/*        </Typography>*/}
            {/*    </AccordionDetails>*/}
            {/*</Accordion>*/}
        </div>
    );
}
