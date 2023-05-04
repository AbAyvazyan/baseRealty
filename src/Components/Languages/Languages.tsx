import React from "react";


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import English from "../../assets/flags/english.png";
import Armenian from '../../assets/flags/armenian.png';
import Russian from "../../assets/flags/russian.png";
import i18n from "i18next";




const countries = [
    {
        label: "English",
        src: English,
        link: " ",
        value: "en"
    },
    {
        label: "Armenian",
        src: Armenian,
        link: " ",
        value: "hy"
    },
    {
        label: "Russian",
        src: Russian,
        link: " ",
        value: "ru"
    }
];


const useStyles = {
        button: {
            display: "block",
            marginTop: '10px'
        },
        formControl: {
            margin: '35px',
            minWidth: 120,
            backgroundColor: "transparent"
        },
        select: {
            textAlign: "center",
            textDecoration: "none"
        }
};



const Languages = () => {



    const classes = useStyles


    const [country, setCountry] = React.useState(English);
    const [open, setOpen] = React.useState(false);


    const handleChange = (event: { target: { value: React.SetStateAction<string> } }) => {

        const language = event.target.value

        setCountry(language);

        countries.map(singleCountry=>{
            singleCountry.src === language && i18n.changeLanguage(singleCountry.value)
        })
    };

    console.log(country)

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <form autoComplete="off">
            <FormControl>
                <InputLabel htmlFor="open-select" />
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={country}
                    name="country"
                    onChange={handleChange}
                    inputProps={{
                        id: "open-select"
                    }}
                >
                    {countries.map((option, key) => (
                        <MenuItem value={option.src} key={key}>
                            <img src={option.src} alt={option.label} width='35px' />{" "}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
}

export default Languages;