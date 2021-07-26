/* import constants. */
const { MONTHS } = require('../const/dates');

const formatDate = (date) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${day} de ${MONTHS[month]} de ${year}`;
}

module.exports = { formatDate };