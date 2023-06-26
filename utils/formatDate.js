const { format } = require('date-fns');

function formatDate(date) {
  // Format the date using the desired format
  return format(date, 'dd/MM/yyyy HH:mm:ss');
}

module.exports = formatDate;
