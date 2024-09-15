import { APIURL, APIKEY } from "../utils/constants";

export async function getLeaguesApi(id, s) {
  try {
    const url = `${APIURL}/leagues?id=39&season=2024`;
    const params = {
      headers: {
        "x-rapidapi-key": `${APIKEY}`,
        Accept: "*/*",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
