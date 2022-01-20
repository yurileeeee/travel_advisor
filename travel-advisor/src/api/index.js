import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        // lang: "ko_KR",
      },
      headers: {
        "x-rapidapi-key": "d023956d74msh754dc11ee0f3073p1dc251jsna5019d9e0876",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
