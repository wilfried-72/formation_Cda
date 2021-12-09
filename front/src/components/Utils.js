// ici function qui permet de vouir si un element n'est pas vide
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
};

// Date Format
export const datePaser = (date) => {
  // const dateUnix = new Date(date * 1000);
  let newDate = (new Date().setTime(date))
  // console.log(newDate)
  let DateModif = new Date(newDate).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return DateModif;
};
