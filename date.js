
module.exports = getDate;

function getDate(){



    const Day = new Date();
        

    const options = {
        weekday: "long",
        day : "numeric",
        month : "long"

    };

    const day = toDay.toLocaleDateString("en-US",options);

    return day;

};    