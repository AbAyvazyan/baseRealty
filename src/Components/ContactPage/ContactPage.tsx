import './ContactPage.css'
import YandexMap from "./OurLocation/OurLocation";



const ContactPage = () =>{
    return(
        <section className={'contact_us_page'}>

            <h1>Contact Us</h1>

            <div className={'contact_part'}>
                    <div className={'contact_form_part'}>
                            <div className={'contact_form_input'}>
                                <form>

                                    <input type="text" placeholder={'Name Surname'}/>
                                    <input type="text" placeholder={'Your Email'}/>
                                    <input type="text" placeholder={'About'}/>
                                    <input type="text" placeholder={'Telephone'}/>

                                    <textarea name="" id=""></textarea>

                                    <div className={'single_button search_button contact_button'}>Submit</div>
                                </form>
                            </div>

                            <div className={'contact_about_part'}>
                                <h5>
                                    We are a dedicated team of real estate professionals,
                                    committed to helping you find your dream home or investment property.
                                    Contact us today for personalized service and expert guidance.
                                </h5>

                                <div className={'contact_about_tel_part'}>Telephone.: <a href="tel:+1234567890">+374 00 00 00 00</a> | <a href="tel:+1234567890">+374 00 00 00 00</a></div>

                                <div className={'contact_about_social_part'}>
                                    <div>
                                        <div>Viber: <a href="tel:+1234567890">+374 00 00 00 00</a></div>
                                        <div>Address: <a href="tel:+1234567890">Charbax</a></div>
                                    </div>
                                    <div>
                                        <div>Whatsap: <a href="tel:+1234567890">+374 00 00 00 00</a></div>
                                        <div>Email: <a href="mailto:someone@example.com">info@baserealty.am</a></div>
                                    </div>
                                </div>
                            </div>
                    </div>


                    <div className={'contact_map_part'}>
                        <YandexMap address="улица Хачатура Абовяна, 3/1" />
                    </div>
            </div>

        </section>
    )
}

export default ContactPage