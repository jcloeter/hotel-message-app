const getDayOfWeek = (timestamp) => {
  const date = new Date(timestamp);
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
