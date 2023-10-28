import './ContactPage.css'
import YandexMap from "./OurLocation/OurLocation";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_qq781us';
const TEMPLATE_ID = 'template_dc8a5wp'; // Replace with your Email.js template ID
const USER_ID = '54pI2oNq9FQygveb4'; // Replace with your Email.js user ID

const ContactPage = () => {
    const {t} = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const nameSurname = t('Name_Surname')
    const yourMail = t('Your_Email')
    const aboutT = t('About')
    const telephoneT = t('Telephone')

    const handleFormSubmit = (e: any) => {
        e.preventDefault();

        const emailData = {
            to_email: 'abayvazyan333@gmail.com',
            from_name: name, from_email: email, about: about, telephone: telephone, message: message,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, emailData, USER_ID)
        setName('');
        setEmail('');
        setAbout('');
        setTelephone('');
        setMessage('');
    };

    return (<section className="contact_us_page">
            <h1>{t('Contact_Us')}</h1>

            <div className="contact_part">
                <div className="contact_form_part">
                    <div className="contact_form_input">
                        <form>
                            <input
                                type="text"
                                placeholder={nameSurname}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder={yourMail}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder={aboutT}
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                                required
                            />

                            <input
                                type="text"
                                placeholder={telephoneT}
                                value={telephone}
                                onChange={(e) => setTelephone(e.target.value)}
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>

                            <div className={'single_button search_button contact_button'}
                                 onClick={handleFormSubmit}>{t("Submit")}</div>
                        </form>
                    </div>

                    <div className={'contact_about_part'}>
                        <h5>
                            {t("Contact_Summary")}
                        </h5>

                        <div className={'contact_about_tel_part'}>{t("Telephone")}.: <a href="tel:+1234567890">+374 00
                            00 00 00</a> | <a href="tel:+1234567890">+374 00 00 00 00</a></div>

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
                    <h3 style={{margin: '0 0 5vh 0', textAlign: 'center', width: '100%'}}>{t("Our_Location")}</h3>
                    <YandexMap address="улица Хачатура Абовяна, 3/1"/>
                </div>
            </div>

        </section>)
}

export default ContactPage