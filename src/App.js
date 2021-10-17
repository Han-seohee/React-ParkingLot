import './App.css';
import axios from "axios";
import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ABC: "",
      aaa: 0
    };
  }

  componentDidMount() {
    this.call();
  }

  call = async () => {
    await axios
    .get("/service/rest/AirportParking/airportparkingRT?serviceKey=H%2Bn33W2WWhRLY358pYUSI7utTn5NMjnA5wGhh3fOvjDu3Dr%2BWPllB9jLaLaHWQJXZVnwB1rqCn637HKz1aUrcQ%3D%3D&schAirportCode=GMP")
    .then((res) => {
      console.log( res.data.response.body.items.item);
      res.data.response.body.items.item.map((row) => {
        console.log(row.aprKor, "/", row.aprEng, "/", row.parkingAirportCodeName, "/", row.parkingFullSpace, "/", row.parkingGetdate, "/", row.parkingGettime, "/", row.parkingIincnt, "/", row.parkingIoutcnt, "/", row.parkingIstay);
      });
      return res;
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
    return <div className="App">{}</div>;
  }
}

export default App;
