const getDayOfWeek = (timestamp) => {
  const date = new Date(timestamp);
  console.log(timestamp);
  console.log(date);
  console.log(date.getDay());
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysOfWeek[date.getDay()];
};

export default getDayOfWeek;
