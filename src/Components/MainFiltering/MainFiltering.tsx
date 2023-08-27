import './MainFiltering.css'
import AccordionSelect from "./AccordionSelect/AccordionSelect";
import FromToSelect from "./FromToSelect/FromToSelect";
import {Component, FC} from "react";
import uuid from "react-uuid";
import {useTranslation} from "react-i18next";

export type TFilterSelect = {
    title: string,
    isChecked: boolean,
    _id: string,
}

type TMainFiltering={
    setPage:(page:number)=>void
}

const filterList = [
    {
        id:1,
        paragraph:'Property_Type',
        selects:[
            {
                title: "Բնակարան",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Առանձնատուն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Կոմերցիոն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Հողատարածք",
                isChecked: false,
                _id: uuid(),
            },
        ],
        component:AccordionSelect
    },
    {
        id:2,
        paragraph:'Location',
        selects:[
            {
                title: "Կենտրոն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Արաբկիր",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Աջափնյակ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Ավան",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Քանաքեռ Զեյթուն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Դավթաշեն",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "էրեբունի",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Մալաթիա Սեբաստիա",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նոր Նորք",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նորք Մարաշ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Շենգավիթ",
                isChecked: false,
                _id: uuid(),
            },
            {
                title: "Նուբարաշեն",
                isChecked: false,
                _id: uuid(),
            },
        ],
        component:AccordionSelect
    },
     {
         id:3,
         paragraph:'Rooms',
         selects: [
             {
                 title: "1",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "2",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "3",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "4",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "5",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "6",
                 isChecked: false,
                 _id: uuid(),
             },
             {
                 title: "7",
                 isChecked: false,
                 _id: uuid(),
             },
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
        paragraph:'Newly_Built',
        selects:[
            {
                title: "Այո",
                isChecked: false,
                _id: uuid(),
            }
        ],
        component:AccordionSelect
    },
    {
        id:7,
        paragraph:'Floor',
        component:FromToSelect
    },
    {
        id:10,
        paragraph:'Building_Floors',
        component:FromToSelect
    },
    {
        id:11,
        paragraph:'Building_Type',
        selects:[
            { _id: 1, title: "Ստալինկա", isChecked: false },
            { _id: 2, title: "Քարե", isChecked: false },
            { _id: 3, title: "Պոստ Խրյուշովկա", isChecked: false },
            { _id: 4, title: "Խրյուշովկա", isChecked: false },
            { _id: 5, title: "Բարձրահարկ", isChecked: false },
            { _id: 6, title: "Խոշոր Պանելային", isChecked: false },
            { _id: 7, title: "Կասետաին", isChecked: false },
            { _id: 8, title: "վերանորոգված դիզաիներական ոճով", isChecked: false }
        ],
        component:AccordionSelect
    },
    {
        id:12,
        paragraph:'Renovation',
        selects:[
            { _id: 1, title: "հին վերանորոգում", isChecked: false },
            { _id: 2, title: "զրոական", isChecked: false },
            { _id: 3, title: "վերանորոգում 10 ավել", isChecked: false },
            { _id: 4, title: "վերանորոգում 5-10", isChecked: false },
            { _id: 5, title: "վերանորոգում 2-5", isChecked: false },
            { _id: 6, title: "վերանորոգված 2 տարի", isChecked: false },
            { _id: 7, title: "վերանորոգված չբնակեցված", isChecked: false },
            { _id: 8, title: "վերանորոգված դիզաիներական ոճով", isChecked: false },
        ],
        component:AccordionSelect
    }
]

const  MainFiltering:FC<TMainFiltering> = ({setPage}) => {

    const { t } =  useTranslation()

    const onSearchHandler = ()=>{
        setPage(1)
    }

    return (
        <div className={'main_filtering'}>

            {filterList.map(({id,component:Component,paragraph,selects})=>{
                return <Component id={id} paragraph={paragraph} key={id} selects={selects}/>
            })}

            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div className='single_button search_button' onClick={onSearchHandler}> {t("Search")} </div>
            </div>

        </div>
    );
}

export default MainFiltering