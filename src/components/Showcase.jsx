import ShowcaseCard from "./ShowcaseCard";
import wave from "../assets/images/wave1440.svg";

export default function Showcase() {
  return (
    <div
      className="showcase_container"
      id="showcase_container"
      style={{
        backgroundImage: `url(${wave})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="showcase">
        <h3 className="showcase_title">Showcase</h3>
      </div>
      <section className="content-wrapper" id="showcase">
        <ShowcaseCard />
      </section>
    </div>
  );
}
