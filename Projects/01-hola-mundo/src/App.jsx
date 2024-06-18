import "./App.css";
import FollowCard from "./FollowCard";

export default function App() {
  return(
    <section className="App">
    <FollowCard
      name="José"
      usrname="midudev"
      isFollowing
    />
    <FollowCard
    name="Panchito monchito junchito"
    usrname="juanchito"
    isFollowing={false}
    />
    <FollowCard
    name="Luis Delgado"
    usrname="ledg555"
    isFollowing={false}
    />
    </section>
  );
}