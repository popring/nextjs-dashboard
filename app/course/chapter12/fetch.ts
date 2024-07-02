let count = 0;
export const fetchData = async () => {
  count++;
  console.log(
    '%c [ count ]-4',
    'font-size:13px; background:#45e14f; color:#89ff93;',
    count
  );
  const url = (
    await (await fetch('https://api.thecatapi.com/v1/images/search')).json()
  )[0].url;

  return url;
};
