import axios from "axios";

// const BASE_URL = process.env.REACT_APP_API_URL;
const BASE_URL = 'localhost:3000';
const API_URL = `${BASE_URL}/api`;
class Api {
  constructor(baseURL = API_URL) {
    this.httpClient = axios.create({
      baseURL: baseURL,
      timeout: 30000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    this.httpClient.interceptors.response.use(this.interceptor);
  }

  interceptor = response => {
    // handle common request error
    if (response.data.error) {
      // this.dispatchLogOut()
    }

    return response;
  };

  getQuestions = () => this.httpClient.get("/questions.json");

  setDispatch(dispatch) {
    this.dispatch = dispatch;
  }

  // dispatchLogOut() {
  //   if (this.dispatch) {
  //     this.dispatch(logOut());
  //   }
  // }
}

const api = new Api();

export default api;
