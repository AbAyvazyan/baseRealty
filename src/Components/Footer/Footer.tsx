import './Footer.css'
import instaImage from '../../assets/images/instagram.png'
import facebookImage from '../../assets/images/facebook.png'

const date = new Date
const year =  date.getFullYear()


const Footer = ( ) =>{
    return(
        <footer>
            <span className={'footer_copyright'}>© {year} Base Realty. All rights reserved</span>
            <div className={'footer_social_network'}>
                <a href="https://www.instagram.com/base_realty/" target={'_blank'}><img src={instaImage} alt="Instagram Logo"/></a>
                <a href="https://www.facebook.com/baserealty.am?mibextid=2JQ9oc" target={'_blank'}><img src={facebookImage} alt="Facebook Logo"/></a>
            </div>
        </footer>
    )
}

export default Footer