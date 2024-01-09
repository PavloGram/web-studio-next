import Benefits from "./components/Benefits";
import Team from "./components/Team";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Works from "./components/Works";

export default function Home() {
  return (
    <article>
      <h2 className="visually-hidden">Домашня сторінка</h2>
      <Hero />
      <Benefits />
      <Works />
      <Team />
      <Clients />
    </article>
  );
}
