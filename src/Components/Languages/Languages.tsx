import React from "react";


import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from '@mui/material/Select';
import English from "../../assets/flags/english.png";
import Armenian from '../../assets/flags/armenian.png';
import Russian from "../../assets/flags/russian.png";




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

// const useStyles = makeStyles((theme:Theme) => {
//
//     console.log(theme.spacing(2))
//     return {
//         button: {
//             display: "block",
//             marginTop: theme.spacing(2)
//         },
//         formControl: {
//             margin: theme.spacing(5),
//             minWidth: 120,
//             backgroundColor: "transparent"
//         },
//         select: {
//             textAlign: "center",
//             textDecoration: "none"
//         }
//     }
// });
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

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
    };

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