import axios from "axios";

const API_BASE = "http://localhost:5000";

export async function fetchForecast(location) {
  const res = await axios.get(`${API_BASE}/api/weather`, {
    params: { location },
  });
  return res.data;
}
