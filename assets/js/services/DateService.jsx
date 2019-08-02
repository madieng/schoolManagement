import moment from "moment";
function dateFormat(date) {
  return moment(date).format("DD/MM/YYYY");
}

export default {
  dateFormat
};
