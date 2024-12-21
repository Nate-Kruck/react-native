const url = 'https://nfl-api-data.p.rapidapi.com/nfl-team-listing/v1/data';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'ff9928754amsh2b797a780063ce3p11fb11jsn3d4cc097fee5',
    'x-rapidapi-host': 'nfl-api-data.p.rapidapi.com'
  }
};

export const fetchNflData = async (): Promise<any[]> => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to Fetch');
  }
};
