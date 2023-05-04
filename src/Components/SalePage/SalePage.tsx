import './SalePage.css'
import HouseCard from "../HouseCard";
import {ThouseCard} from "../HouseCard/HouseCard";
import uuid from "react-uuid";
import PaginationGroup from "../PaginationGroup/PaginationGroup";
import MainFiltering from "../MainFiltering";
import {useTranslation} from "react-i18next";



const houses:ThouseCard[] = [
    {
        src:'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
        house_type:'Apartment',
        code:'dp457899',
        build_type:'New buildings',
        location:'Nerqin Charbax',
        condition:'Fresh repaired',
        price:3333333,
        floor:3,
        building_floors:5,
        rooms:3,
        house_space:333
    },
    {
        src:'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
        house_type:'Apartment',
        code:'dp457899',
        build_type:'New buildings',
        location:'Nerqin Charbax',
        condition:'Fresh repaired',
        price:3333333,
        floor:3,
        building_floors:5,
        rooms:3,
        house_space:333
    },
    {
        src:'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
        house_type:'Apartment',
        code:'dp457899',
        build_type:'New buildings',
        location:'Nerqin Charbax',
        condition:'Fresh repaired',
        price:3333333,
        floor:3,
        building_floors:5,
        rooms:3,
        house_space:333
    },
    {
        src:'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
        house_type:'Apartment',
        code:'dp457899',
        build_type:'New buildings',
        location:'Nerqin Charbax',
        condition:'Fresh repaired',
        price:3333333,
        floor:3,
        building_floors:5,
        rooms:3,
        house_space:333
    },
    {
        src:'https://www.udr.com/globalassets/corporate/homepage/homepage_4_1274towson.jpg',
        house_type:'Apartment',
        code:'dp457899',
        build_type:'New buildings',
        location:'Nerqin Charbax',
        condition:'Fresh repaired',
        price:3333333,
        floor:3,
        building_floors:5,
        rooms:3,
        house_space:333
    },
]

const SalePage = () =>{

    const {t} = useTranslation()
    return(
        <section className={'sale_page'}>
            <h1>{t("Sale_Page")}</h1>

            <div className={'sale_page_content'}>

                <aside>
                    <MainFiltering/>
                </aside>
                <article>
                    {houses.map(house=>{
                        return <HouseCard {...house} key={uuid()}/>
                    })}
                </article>
            </div>

            <PaginationGroup/>
        </section>
    )
}

export default SalePage