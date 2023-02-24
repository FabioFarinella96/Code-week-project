const GET = async () => {
  const res = await fetch(`https://api.musement.com/api/v3/cities.json`);
  const data = await res.json();
  return data;
};

export { GET };
