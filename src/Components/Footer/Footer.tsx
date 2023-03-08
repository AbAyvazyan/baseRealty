import './Footer.css'

const date = new Date
const year =  date.getFullYear()


const Footer = ( ) =>{
    return(
        <footer>
            © {year} Base Realty. All rights reserved
        </footer>
    )
}

export default Footer