function getDate() {
  var currentdate = new Date();
  var datetime =
    currentdate.getFullYear() +
    "-" +
    ("0" + (currentdate.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + currentdate.getDate()).slice(-2) +
    " " +
    ("0" + currentdate.getHours()).slice(-2) +
    ":" +
    ("0" + currentdate.getMinutes()).slice(-2) +
    ":" +
    ("0" + currentdate.getSeconds()).slice(-2);
  return datetime;
}

export default getDate;
