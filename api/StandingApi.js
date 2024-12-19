import { APIURL, APIKEY } from "../utils/constants";

export async function getStandingApi(id, s) {
  try {
    const url = `${APIURL}/standings?season=${s}&league=${id}`;
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
