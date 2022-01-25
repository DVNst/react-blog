export const formatDate = (date) => {
  var options = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Date(date).toLocaleString("ru", options).replace("г.,", "в");
};