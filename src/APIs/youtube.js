import axios from "axios";

const KEY = "AIzaSyANWpTCguMa4Pwsh0iz5R95SXbrNbHhSZU";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: "5",
        key: KEY,
        q: {},
    },
});
