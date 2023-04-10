import './MainFiltering.css'
import AccordionSelect from "./AccordionSelect/AccordionSelect";
import FromToSelect from "./FromToSelect/FromToSelect";
import {Component} from "react";

const filterList = [
    {
        id:1,
        paragraph:'Location',
        selects:[
            'All',
            'Arabkir',
            'Charbax',
        ],
        component:AccordionSelect
    },
     {
         id:2,
         paragraph:'Price',
         component:FromToSelect
     },
    {
        id:3,
        paragraph:'Construction Type',
        selects:[
            'All',
            'Stone',
            'Panels',
            'Bricks',
            'Cassette',
            'Wooden',
        ],
        component:AccordionSelect
    },
    {
        id:4,
        paragraph:'New Construction',
        selects:[
            'All',
            'No',
            'Yes'
        ],
        component:AccordionSelect
    },
    {
        id:5,
        paragraph:'Elevetor',
        selects:[
            'All',
            'Available',
            'Not Available'
        ],
        component:AccordionSelect
    },
    {
        id:6,
        paragraph:'FloorArea',
        component:FromToSelect
    },
    {
        id:7,
        paragraph:'Number of Rooms',
        selects:[
            'All',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6+'
        ],
        component:AccordionSelect
    },
    {
        id:8,
        paragraph:'Number of Bathrooms',
        selects:[
            'All',
            '1',
            '2',
            '3+',
        ],
        component:AccordionSelect
    },
    {
        id:9,
        paragraph:'Floor',
        component:FromToSelect
    },
    {
        id:10,
        paragraph:'Furniture',
        selects:[
            'All',
            'Available',
            'Not Available',
            'Partial Furniture',
            'By agreement'
        ],
        component:AccordionSelect
    },
    {
        id:11,
        paragraph:'Renovation',
        selects:[
            'All',
            'No Renovation',
            'Not Old Renovation',
            'Partial Renovation',
            'Cosmetic Renovation',
            'Euro Renovation',
            'Designer Renovation',
            'Major Renovation',
        ],
        component:AccordionSelect
    },
]

export default function MainFiltering() {

    return (
        <div className={'main_filtering'}>

            {filterList.map(({id,component:Component,paragraph,selects})=>{
                return <Component id={id} paragraph={paragraph} key={id} selects={selects}/>
            })}

            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div className='single_button filter_button' style={{marginRight:'5px'}}><i className="fa fa-solid fa-filter"></i> </div>
                <div className='single_button search_button'> Search </div>
            </div>

        </div>
    );
}
