const convertToISODate = (inputDate: string) => {
    const date = new Date(inputDate);

    if (!date) {
        return "Invalid Date";
    }

    const year = date.getFullYear();
    const month = date.toString().split(' ')[1]
    const day = date.getDate();

    return `${year}/${month}/${day}`;
}

function getDateDifference(inputDate: string): "timeLimited" | "warningLimit" | "" {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
        return "";
    }

    const currentDate = new Date();
    const daysDifference = Math.floor((currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (daysDifference <= 7) {
        return ''
    } else if (daysDifference <= 15) {
        return "warningLimit";
    } else {
        return "timeLimited";
    }
}


export {convertToISODate, getDateDifference}