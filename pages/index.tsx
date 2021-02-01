import React from 'react'
const Home: React.FC = () => {
  return (
    <>
      <div id="colorlib-hero" className="js-fullheight">
        <div className="owl-carousel">
          <div className="item">
            <div className="hero-flex js-fullheight">
              <div className="col-three-forth">
                <div className="hero-img js-fullheight" />
              </div>
              <div className="col-one-forth js-fullheight">
                <div className="display-t js-fullheight">
                  <div className="display-tc js-fullheight">
                    <h2 className="number">01/03</h2>
                    <div className="text-inner">
                      <div className="desc">
                        <span className="tag">Welcome</span>
                        <h2>Photography is on it's way.</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                        <p>
                          <a href="work.html" className="btn-view">
                            View Galleries <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="hero-flex js-fullheight">
              <div className="col-three-forth">
                <div
                  className="hero-img js-fullheight"
                  style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}
                />
              </div>
              <div className="col-one-forth js-fullheight">
                <div className="display-t js-fullheight">
                  <div className="display-tc js-fullheight">
                    <h2 className="number">02/03</h2>
                    <div className="text-inner">
                      <div className="desc">
                        <span className="tag">Photography</span>
                        <h2>Capture interesting things.</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                        <p>
                          <a href="work.html" className="btn-view">
                            View Galleries <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="hero-flex js-fullheight">
              <div className="col-three-forth">
                <div
                  className="hero-img js-fullheight"
                  style={{ backgroundImage: 'url(images/img_bg_3.jpg)' }}
                />
              </div>
              <div className="col-one-forth js-fullheight">
                <h2 className="number">03/03</h2>
                <div className="display-t js-fullheight">
                  <div className="display-tc js-fullheight">
                    <div className="text-inner">
                      <div className="desc">
                        <span className="tag">Discover</span>
                        <h2>Discover New Things</h2>
                        <p>
                          A small river named Duden flows by their place and
                          supplies it with the necessary regelialia. It is a
                          paradisematic country, in which roasted parts of
                          sentences fly into your mouth.
                        </p>
                        <p>
                          <a href="work.html" className="btn-view">
                            View Galleries <i className="icon-arrow-right3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
