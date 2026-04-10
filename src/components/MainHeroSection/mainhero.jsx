import "./mainhero.scss";
import pattern from "../../assets/images/pattern.svg";
import mainHeroContent from "../../assets/images/main_hero_content.png";

function MainHero() {
  return (
    <section className="mainHero section-space" >
      <div className="pattern"></div>
      <div className="main-hero-content">
        <div className="container container-md ">
          <div className="row hero-row">
            <div className="col-lg-7 col-md-12">
              <div className="hero-inner">
                <h1>
                  Your finances matters,<span>and that matters to us.</span>
                </h1>
                <p className="theme_para">
                  We are your go-to source for all your borrowing needs, whether
                  it’s a personal loan, car loan, mortgage, or anything in
                  between. Our mission is to make lending easy and accessible to
                  everyone, regardless of their financial situation.
                </p>
              
                <a href="" className="main_theme_button theme-button ">
                  get started
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 col-md-12 ">
              <div className="hero-inner">
                <img src={mainHeroContent} className="content-img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
