export const transformDate = (date) => {
  ///  2024-03-20T15:52:58.843Z  ===>  20.03.2024
  const newDate = new Date(date);

  const day = newDate.getDate().toString().padStart(2, "0");
  const month = (newDate.getMonth() + 1).toString().padStart(2, "0");
  const year = newDate.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;
  return formattedDate;
};

export const transformDateTime = (dateString) => {
  ///  Wed Aug 07 2024 17:12:26 GMT+0600 (Киргизия)  ===>  2024-08-07
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};


export const transformDatePeriod = (dateString) => {
  ///  Mon Apr 01 2019 20:29:00 GMT+0600  ===>  01.04.2019
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const date = new Date(dateString);
  const formattedDate = date?.toLocaleDateString("ru-RU", options);
  return formattedDate;
};
