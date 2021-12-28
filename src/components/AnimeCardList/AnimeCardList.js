import AnimeCard from "../AnimeCard/AnimeCard";
import "./AnimeCardList.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAnime } from "../../redux/actions";
import LdsDefault from "../ldsDefault/LdsDefault";

function AnimeCardList() {
  const dispatch = useDispatch();
  const animeCards = useSelector((state) => state.cards.anime);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(fetchAnime());
  }, []);

  return (
    <div className="anime-cardList">
      {animeCards &&
        animeCards.map((anime, index) => (
          <AnimeCard key={index} data={anime} />
        ))}
      {loading && <LdsDefault />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    animeCards: state.cards.animes,
  };
};

const mapDispatchToProps = {
  fetchAnime,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimeCardList);
