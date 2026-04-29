import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard
        movie={{ title: "test", release_date: "test", url: "#" }}
      ></MovieCard>
    </>
  );
}

export default App;
