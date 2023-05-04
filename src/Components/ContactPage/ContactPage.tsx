import './ContactPage.css'
import YandexMap from "./OurLocation/OurLocation";
import {useTranslation} from "react-i18next";



const ContactPage = () =>{

    const { t } = useTranslation()

    const nameSurname = t('Name_Surname')
    const yourMail = t('Your_Email')
    const about = t('About')
    const telephone = t('Telephone')
    return(
        <section className={'contact_us_page'}>

            <h1>{t("Contact_Us")}</h1>

            <div className={'contact_part'}>
                    <div className={'contact_form_part'}>
                            <div className={'contact_form_input'}>
                                <form>

                                    <input type="text" placeholder={nameSurname}/>
                                    <input type="text" placeholder={yourMail}/>
                                    <input type="text" placeholder={about}/>
                                    <input type="text" placeholder={telephone}/>

                                    <textarea name="" id="" placeholder={'...'}></textarea>

                                    <div className={'single_button search_button contact_button'}>{t("Submit")}</div>
                                </form>
                            </div>

                            <div className={'contact_about_part'}>
                                <h5>
                                    {t("Contact_Summary")}
                                </h5>

                                <div className={'contact_about_tel_part'}>{t("Telephone")}.: <a href="tel:+1234567890">+374 00 00 00 00</a> | <a href="tel:+1234567890">+374 00 00 00 00</a></div>

                                <div className={'contact_about_social_part'}>
                                    <div>
                                        <div>Viber: <a href="tel:+1234567890">+374 00 00 00 00</a></div>
                                        <div>{t("Address")}: <a href="tel:+1234567890">Charbax</a></div>
                                    </div>
                                    <div>
                                        <div>Whatsapp: <a href="tel:+1234567890">+374 00 00 00 00</a></div>
                                        <div>Email: <a href="mailto:someone@example.com">info@baserealty.am</a></div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className={'contact_map_part'}>
                        <h3 style={{margin:'0 0 5vh 0',textAlign:'center',width:'100%'}}>{t("Our_Location")}</h3>
                        <YandexMap address="улица Хачатура Абовяна, 3/1" />
                    </div>
            </div>

        </section>
    )
}

export default ContactPage