import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d4a1d5d252ba47c99e963d8786823c09",
  },
});
