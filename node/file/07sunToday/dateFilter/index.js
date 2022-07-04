function moment (dateStr) {
  const date = new Date(dateStr);

  const y = date.getFullYear();
  const m = fillZero(date.getMonth() + 1);
  const d = fillZero(date.getDate());

  const hh = fillZero(date.getHours());
  const mm = fillZero(date.getMinutes());
  const ss = fillZero(date.getSeconds());
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

function fillZero (num) {
  return num > 9 ? num : '0' + num;
}
module.exports = {
  moment,
}