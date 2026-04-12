import "./mainhero.scss";
// import pattern from "../../assets/images/pattern.svg";
import heroData from "../../data/heroData";

function MainHero() {
  const homeHero = heroData.homepage;
  return (
    <section className="mainHero section-space">
      <div className="pattern"></div>
      <div className="main-hero-content">
        <div className="container container-md ">
          <div className="row hero-row">
            <div className="col-lg-7 col-md-12">
              <div className="hero-inner">
                <h1>
                  {homeHero.hero_heading_first_line}
                  <span> {homeHero.hero_heading_second_line}</span>
                </h1>
                <p>{homeHero.hero_detail}</p>
                <a href="" className="main_theme_button theme-button ">
                  {homeHero.hero_button}
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 col-md-12 ">
              <div className="hero-inner">
                <img
                  src={homeHero.hero_floating_card}
                  className="content-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
