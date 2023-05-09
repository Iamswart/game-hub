import axios from "axios";

export interface FetchResponse <T> {
    count: number;
    results: T[];
  }
  

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4cb05c01e8af49f7b53394643827386a'
    }
})


