import "./App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <MovieCard
        movie={{ title: "test", release_date: "test", url: "#" }}
      ></MovieCard>
      <Home></Home>
    </>
  );
}

export default App;
