export function dateConverter(timeStamp: string) {
  return new Date(timeStamp).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function TimeDifference(timeStamp: string) {
  const dateRecieved = new Date(timeStamp);
  const dateDNow = new Date();
  const YDateDif = dateDNow.getFullYear() - dateRecieved.getFullYear();
  if (YDateDif > 0) {
    return `${YDateDif} years read`;
  }
  const MDateDif = dateDNow.getMonth() - dateRecieved.getMonth();
  if (MDateDif > 0) {
    return `${MDateDif} months read`;
  }
  const DDateDif = dateDNow.getDay() - dateRecieved.getDay();
  if (DDateDif > 0) {
    return `${DDateDif} days read`;
  }
  const HDateDif = dateDNow.getHours() - dateRecieved.getHours();
  if (HDateDif > 0) {
    return `${HDateDif} hours read`;
  }
  const MinDateDif = dateDNow.getMinutes() - dateRecieved.getMinutes();
  if (MinDateDif > 0) {
    return `${MinDateDif} minutes read`;
  }
  return "just read";
}
