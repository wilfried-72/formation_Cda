/*
 * Utils
 * ******* */

// Date Format
export const dateFormatMeteo = (date) => {
  const dateUnix = new Date(date*1000);
  let weekday =new Date(dateUnix).toLocaleDateString("fr-FR", {
    // year: "numeric",
    // month: "long",
    weekday:"long"
  });

  let day =new Date(dateUnix).toLocaleDateString("fr-FR", {
    day: "numeric",
  });

  let newDate = weekday.substr(0, 3) + ". " + day 
  return newDate
};


export const datePaser = (date) => {
  let newDate = new Date(date*1000).toLocaleDateString('fr-FR',{
    weekday:"long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return newDate
};