
import './App.css';
import Navbar from './Navbar';
import requests from './requests';
import axios from './axios';
import Banner from './Banner';
import Row from './Row';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAction} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
