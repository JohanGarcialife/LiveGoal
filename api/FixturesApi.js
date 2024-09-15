import { APIURL, APIKEY } from "../utils/constants";

export async function getFixturesApi(id, s) {
  try {
    const url = `${APIURL}/fixtures?league=${id}&season=${s}&date=2024-09-14`;
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
