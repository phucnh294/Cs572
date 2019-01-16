function isWeekend(){
  const todayDate = new Date();
  const day = todayDate.getDay();
  
  const weekendOrWeekDay = (day)=>{
    
    return weekendOrWeekDay.labels[day]||weekendOrWeekDay.labels["default"];
  };
  
  weekendOrWeekDay.labels={
    0:"Weekend",
    6:"Weekend",
    default:"Weekday"
  };
  return weekendOrWeekDay(day);
}

let test = isWeekend;
console.log(test());