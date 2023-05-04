import './MainFiltering.css'
import AccordionSelect from "./AccordionSelect/AccordionSelect";
import FromToSelect from "./FromToSelect/FromToSelect";
import {Component} from "react";
import uuid from "react-uuid";
import {useTranslation} from "react-i18next";

const filterList = [
    {
        id:1,
        paragraph:'Property Type',
        selects:[
            'Apartment',
            'House',
            'Commercial',
            'Land'
        ],
        component:AccordionSelect
    },
    {
        id:2,
        paragraph:'Location',
        selects:[
            'Yerevan',
            'Kentron',
            'Arabkir',
            'Achapnyak',
            'Avan',
            'Qanaqer-Zeytun',
            'Davtashen',
            'Erebuni',
            'Malatia-Sebastia',
            'Nor-Nork',
            'Norq-Marash',
            'Shengavit',
            'Nubarashen',
        ],
        component:AccordionSelect
    },
     {
         id:3,
         paragraph:'Rooms',
         selects:[
             '1',
             '2',
             '3',
             '4',
             '5',
             '6',
             '7+',
         ],
         component:AccordionSelect
     },

    {
        id:4,
        paragraph:'Area',
        component:FromToSelect
    },
    {
        id:5,
        paragraph:'Price',
        component:FromToSelect
    },
    {
        id:6,
        paragraph:'Newly Built',
        selects:[
            'Yes',
            'No',
        ],
        component:AccordionSelect
    },
    {
        id:7,
        paragraph:'Floor',
        component:FromToSelect
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
        id:10,
        paragraph:'Building Floors',
        component:FromToSelect
    },
    {
        id:11,
        paragraph:'Building Type',
        selects:[
            'Stone',
            'Monolith',
            'Panel',
            'All',
        ],
        component:AccordionSelect
    },
    {
        id:12,
        paragraph:'Renovation',
        selects:[
            'Zero Condition',
            'Newly repaired',
            'Good',
            'Old Renovation',
        ],
        component:AccordionSelect
    },
    {
        id:13,
        paragraph:'Lift',
        selects:[
            'Yes',
            'No',
        ],
        component:AccordionSelect
    },
]

export default function MainFiltering() {

    const { t } =  useTranslation()

    return (
        <div className={'main_filtering'}>

            {filterList.map(({id,component:Component,paragraph,selects})=>{
                return <Component id={id} paragraph={paragraph} key={id} selects={selects}/>
            })}

            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div className='single_button search_button'> {t("Search")} </div>
            </div>

        </div>
    );
}
