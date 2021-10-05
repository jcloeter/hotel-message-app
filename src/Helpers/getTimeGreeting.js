const getTimeGreeting = (timeZone) => {
  const date = new Date();
  let time = date.getHours();

  //Adjusting for time zone. More timezones may be added here:
  if (timeZone === "US/Pacific") time -= 1;
  if (timeZone === "US/Eastern") time += 1;

  if (time > 17) return "evening";
  if (time > 12) return "afternoon";
  if (time > 0) return "morning";
};

export default getTimeGreeting;
