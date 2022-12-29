const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formatDate = (dateNumber) => {
  const dates = new Date(dateNumber * 1000);
  const day = days[dates.getDay()];
  const date = dates.getDate();
  const month = months[dates.getMonth()];

  const formated = `${day}, ${date} ${month}`;
  return formated;
};

export default formatDate;
