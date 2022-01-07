import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>CleanREI</title>
          <meta property="og:title" content="CleanREI" />
        </Head>
        <div data-role="Header" className="navbar-container">
          <div className="navbar">
            <div className="left-side">
              <img
                alt="image"
                src="/playground_assets/cleanrei-1500h.png"
                className="image"
              />
              <div data-type="BurgerMenu" className="burger-menu">
                <svg viewBox="0 0 1024 1024" className="icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
              <div className="links-container">
                <a href="#resources" className="link anchor">
                  Resources
                </a>
                <a href="#inspiration" className="link01 anchor">
                  Inspiration
                </a>
                <a href="#ourstory" className="link02 anchor">
                  Our story
                </a>
              </div>
            </div>
            <div data-type="MobileMenu" className="mobile-menu">
              <div className="container1">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="image1"
                />
                <div data-type="CloseMobileMenu" className="close-menu">
                  <svg viewBox="0 0 1024 1024" className="icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="links-container1">
                <a href="#resources" className="link03 anchor">
                  Resources
                </a>
                <a href="#inspiration" className="link04 anchor">
                  Inspiration
                </a>
                <span className="link05 anchor">Process</span>
                <a href="#ourstory" className="link06 anchor">
                  Our story
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="resources" className="hero">
          <div className="content-container">
            <div className="hero-text">
              <h1 className="heading section-Heading">Hi Visitor</h1>
              <span className="text section-Text">
                <span className="text01">CleanREI</span>
                <span>
                  {' '}
                  was created as a 2-in-1 business. 1st we are owning several
                  rental properties in Cincinnati area and 2nd we doing
                  &quot;Office Cleaning&quot; business in the same area. That is
                  how this name came to our vision. Clean - means we do cleaning
                  business and REI means we do real estate investments.
                </span>
              </span>
              <button className="cta-btn anchor button">WELCOME</button>
            </div>
          </div>
        </div>
        <div id="inspiration" className="features">
          <div className="heading-container">
            <h2 className="text03 section-Heading">
              Which are the greatest things about us?
            </h2>
          </div>
          <div className="cards-container">
            <div className="features-card">
              <div className="icon-container">
                <svg viewBox="0 0 1024 1024" className="icon04">
                  <path d="M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z"></path>
                </svg>
              </div>
              <div className="text-container">
                <span className="heading1 card-Heading">Number one</span>
                <span className="text04 card-Text">
                  Everything we do, we do it with love and passion. We never
                  stop in the middle and always finish what we start
                </span>
              </div>
            </div>
            <div className="features-card1">
              <div className="icon-container1">
                <svg viewBox="0 0 1024 1024" className="icon06">
                  <path d="M618 576v-128h86v128h-86zM768 598v-172q0-18-12-30t-30-12h-128q-18 0-31 12t-13 30v172q0 18 13 30t31 12h32v64h64v-64h32q18 0 30-12t12-30zM470 640v-256h-64v106h-86v-106h-64v256h64v-86h86v86h64zM810 170q34 0 60 26t26 60v512q0 34-26 60t-60 26h-596q-36 0-61-25t-25-61v-512q0-36 25-61t61-25h596z"></path>
                </svg>
              </div>
              <div className="text-container1">
                <span className="heading2 card-Heading">Number Two</span>
                <span className="text05 card-Text">
                  Quality should be everywhere. We look for each other do things
                  right and try to do it better.
                </span>
              </div>
            </div>
            <div className="features-card2">
              <div className="icon-container2">
                <svg viewBox="0 0 1024 1024" className="icon08">
                  <path d="M799.596 16.208c-90.526 0-148.62-16.208-241.848-16.208-301.284 0-441.792 171.584-441.792 345.872 0 102.678 48.64 136.458 144.564 136.458-6.758-14.864-18.914-31.080-18.914-104.034 0-204.010 77.006-263.458 175.636-267.51 0 0-80.918 793.374-315.778 888.542v24.672h316.594l108.026-512h197.844l44.072-128h-214.908l51.944-246.19c59.446 12.156 117.542 24.316 167.532 24.316 62.148 0 118.894-18.914 149.968-162.126-37.826 12.16-78.362 16.208-122.94 16.208z"></path>
                </svg>
              </div>
              <div className="text-container2">
                <span className="heading3 card-Heading">Number Three</span>
                <span className="text06 card-Text">
                  Family first. We care of each other and care about our
                  customers and tenants.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator"></div>
        <div className="team">
          <div className="heading-container1">
            <h1 className="text07 section-Heading">Meet the Team</h1>
            <span className="text08 section-Text">Here we are</span>
          </div>
          <div className="cards-container1">
            <div className="team-card">
              <div className="avatar-container">
                <svg viewBox="0 0 1024 1024" className="icon10">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="name card-Heading">Vildan aka Vil</span>
              <span className="position card-Text">Real Estate Landlord</span>
            </div>
            <div className="team-card1">
              <div className="avatar-container1">
                <svg viewBox="0 0 1024 1024" className="icon12">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="name1 card-Heading">Albina</span>
              <span className="position1 card-Text">Cleaning Manager</span>
            </div>
            <div className="team-card2">
              <div className="avatar-container2">
                <svg viewBox="0 0 1024 1024" className="icon14">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="name2 card-Heading">Irina aka Mom</span>
              <span className="position2 card-Text">
                <span>Cleanest Person</span>
              </span>
            </div>
            <div className="team-card3">
              <div className="avatar-container3">
                <svg viewBox="0 0 1024 1024" className="icon16">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="name3 card-Heading">Marsel</span>
              <span className="position3 card-Text">kid</span>
            </div>
            <div className="team-card4">
              <div className="avatar-container4">
                <svg viewBox="0 0 1024 1024" className="icon18">
                  <path d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"></path>
                </svg>
              </div>
              <span className="name4 card-Heading">Liam</span>
              <span className="position4 card-Text">kid</span>
            </div>
          </div>
        </div>
        <div className="section-separator1"></div>
        <div id="ourstory" className="our-story">
          <div className="heading-container2">
            <h1 className="text10 section-Heading">Our story</h1>
            <span className="text11 section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="cards-container2">
            <div className="left-section">
              <div className="video-container">
                <video
                  src="https://www.youtube.com/watch?v=Got6eAotM30"
                  poster="https://www.youtube.com/watch?v=Got6eAotM30"
                  autoPlay="true"
                  className="video"
                ></video>
                <div className="play-container">
                  <svg viewBox="0 0 1024 1024" className="icon20">
                    <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM426 704v-384l256 192z"></path>
                  </svg>
                </div>
              </div>
              <div className="content-container1">
                <span className="heading4 card-Heading">
                  This text is the name of the article. Lorem ipsum dolor sit
                  metsed do eiusm od tempor.
                </span>
                <span className="text12 card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                  Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                  nulla. Class aptent taciti sociosqu ad litora torquent per
                  conubia nostra, per inceptos himenaeos.
                </span>
                <span className="text13 card-Text">
                  {' '}
                  Fusce nec tellus sed augue semper porta. Mauris massa.
                  Vestibulum lacinia arcu eget nulla. Class aptent taciti
                  sociosqu ad litora torquent per conubia nostra, per inceptos
                  himenaeos.
                </span>
                <span className="anchor">Read more</span>
              </div>
              <div className="info-container">
                <span className="card-Text">12 Apr 2021</span>
                <div className="stats-container">
                  <div className="messages-container">
                    <svg viewBox="0 0 1024 1024" className="icon22">
                      <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                    </svg>
                    <span className="card-Text">123</span>
                  </div>
                  <div className="views-container">
                    <svg viewBox="0 0 1024 1024" className="icon24">
                      <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                    </svg>
                    <span className="card-Text">4567</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-section">
              <div className="card">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjbGVhbmluZ3xlbnwwfHx8fDE2NDE1NDAyOTA&amp;ixlib=rb-1.2.1&amp;w=1500"
                  poster="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxjbGVhbmluZ3xlbnwwfHx8fDE2NDE1NDAyOTA&amp;ixlib=rb-1.2.1&amp;w=1500"
                  className="image2"
                />
                <div className="content-container2">
                  <span className="text16 smallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="anchor">Read more</span>
                </div>
                <div className="info-container1">
                  <span className="card-Text">12 Apr 2021</span>
                  <div className="stats-container1">
                    <div className="messages-container1">
                      <svg viewBox="0 0 1024 1024" className="icon26">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="card-Text">123</span>
                    </div>
                    <div className="views-container1">
                      <svg viewBox="0 0 1024 1024" className="icon28">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxob3VzZXxlbnwwfHx8fDE2NDE1NDA0MTA&amp;ixlib=rb-1.2.1&amp;w=1500"
                  className="image3"
                />
                <div className="content-container3">
                  <span className="text19 smallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="anchor">Read more</span>
                </div>
                <div className="info-container2">
                  <span className="card-Text">12 Apr 2021</span>
                  <div className="stats-container2">
                    <div className="messages-container2">
                      <svg viewBox="0 0 1024 1024" className="icon30">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="card-Text">123</span>
                    </div>
                    <div className="views-container2">
                      <svg viewBox="0 0 1024 1024" className="icon32">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card2">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1549517045-bc93de075e53?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGhvdXNlfGVufDB8fHx8MTY0MTU0MDQxMA&amp;ixlib=rb-1.2.1&amp;w=1500"
                  className="image4"
                />
                <div className="content-container4">
                  <span className="text22 smallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="anchor">Read more</span>
                </div>
                <div className="info-container3">
                  <span className="card-Text">12 Apr 2021</span>
                  <div className="stats-container3">
                    <div className="messages-container3">
                      <svg viewBox="0 0 1024 1024" className="icon34">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="card-Text">123</span>
                    </div>
                    <div className="views-container3">
                      <svg viewBox="0 0 1024 1024" className="icon36">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card3">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGphbml0b3J8ZW58MHx8fHwxNjQxNTQwNDQ3&amp;ixlib=rb-1.2.1&amp;w=1500"
                  className="image5"
                />
                <div className="content-container5">
                  <span className="text25 smallCard-Heading">
                    This text is the name of the article. Lorem ipsum dolor sit
                    metsed ...
                  </span>
                  <span className="anchor">Read more</span>
                </div>
                <div className="info-container4">
                  <span className="card-Text">12 Apr 2021</span>
                  <div className="stats-container4">
                    <div className="messages-container4">
                      <svg viewBox="0 0 1024 1024" className="icon38">
                        <path d="M938.667 490.539v-21.205c0-0.725-0.043-1.621-0.085-2.475-5.803-99.755-47.488-190.336-112.768-258.176-68.352-71.125-162.731-117.419-268.843-123.264-0.64-0.043-1.493-0.085-2.304-0.085h-20.864c-59.947-0.683-122.965 13.227-181.931 43.008-52.181 26.539-97.749 63.531-133.931 108.203-56.405 69.675-89.899 158.037-89.941 253.653-0.597 54.4 10.795 111.36 35.157 165.419l-75.605 226.859c-2.816 8.363-3.072 17.835 0 26.965 7.467 22.357 31.616 34.432 53.973 26.965l226.731-75.563c49.493 22.485 105.984 35.243 165.376 35.115 58.539-0.384 115.84-13.141 168.149-36.949 81.579-37.163 151.040-101.248 193.707-186.667 27.477-53.291 43.307-115.84 43.136-181.803zM853.333 490.795c0.128 52.267-12.459 101.333-33.664 142.464-34.176 68.352-88.832 118.784-153.259 148.139-41.387 18.859-86.869 28.971-133.376 29.312-52.096 0.128-101.163-12.459-142.293-33.664-10.624-5.504-22.528-6.059-33.067-2.56l-162.261 54.101 54.101-162.261c3.755-11.221 2.56-22.912-2.389-32.725-23.552-46.72-34.304-96.213-33.792-142.464 0.043-76.331 26.411-145.877 70.912-200.917 28.629-35.328 64.768-64.725 106.283-85.76 46.592-23.552 96.085-34.304 142.336-33.792h19.456c83.712 4.565 158.037 41.003 212.011 97.109 51.285 53.376 84.139 124.416 89.003 202.837z"></path>
                      </svg>
                      <span className="card-Text">123</span>
                    </div>
                    <div className="views-container4">
                      <svg viewBox="0 0 1024 1024" className="icon40">
                        <path d="M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z"></path>
                      </svg>
                      <span className="card-Text">4567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator2"></div>
        <div className="get-in-touch">
          <h2 className="text28 section-Heading">Get in touch</h2>
          <div className="content-container6">
            <div className="form-container">
              <span className="heading5 bigCard-Heading">
                Send us a message
              </span>
              <input
                type="text"
                required="true"
                placeholder="Name"
                className="name5 input"
              />
              <input
                type="text"
                required="true"
                placeholder="E-mail"
                className="email input"
              />
              <textarea
                placeholder="Your Message"
                className="message textarea"
              ></textarea>
              <button className="cta-btn1 anchor button">SEND</button>
            </div>
            <div className="locations-container">
              <div className="location-1">
                <span className="heading6">Mason, OH</span>
                <div className="adress">
                  <svg viewBox="0 0 1024 1024" className="icon42">
                    <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                  </svg>
                  <span className="section-Text">Address</span>
                </div>
                <div className="email1">
                  <svg viewBox="0 0 1024 1024" className="icon44">
                    <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                  </svg>
                  <span className="section-Text">
                    E-mail Address: not ready
                  </span>
                </div>
                <div className="phone">
                  <svg viewBox="0 0 804.5714285714286 1024" className="icon46">
                    <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                  </svg>
                  <span className="section-Text">
                    Phone Number: 513-513-3134
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-separator3"></div>
        <div className="footer-container">
          <div className="footer">
            <div className="social-links">
              <svg viewBox="0 0 950.8571428571428 1024" className="icon48">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon50">
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon52">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="copyright-container">
              <svg viewBox="0 0 1024 1024" className="icon54">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .navbar-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 100;
            position: sticky;
            box-shadow: 5px 5px 10px 0px #b9b9b9;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .navbar {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .left-side {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .image {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .burger-menu {
            display: none;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon {
            width: 36px;
            height: 36px;
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .link {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link01 {
            margin-right: var(--dl-space-space-tripleunit);
            text-decoration: none;
          }
          .link02 {
            text-decoration: none;
          }
          .mobile-menu {
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-doubleunit);
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: #fff;
          }
          .container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: space-between;
          }
          .image1 {
            width: 50px;
            align-self: center;
            object-fit: cover;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .close-menu {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .icon02 {
            width: 24px;
            height: 24px;
          }
          .links-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .link03 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link04 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link05 {
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .link06 {
            text-decoration: none;
          }
          .hero {
            width: 100%;
            height: 588px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
            background-image: linear-gradient(
              to right,
              #fc00ff 0%,
              #00dbde 100%
            );
          }
          .content-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tenunits);
            justify-content: center;
          }
          .hero-text {
            width: 65%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .heading {
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .text {
            color: #000000;
            text-align: center;
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .text01 {
            font-weight: 700;
          }
          .cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: 30px;
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .text03 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .features-card {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon04 {
            width: 24px;
            height: 24px;
          }
          .text-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text04 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .features-card1 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon06 {
            width: 24px;
            height: 24px;
          }
          .text-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text05 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .features-card2 {
            width: 30%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon08 {
            width: 24px;
            height: 24px;
          }
          .text-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text06 {
            color: var(--dl-color-gray-700);
            text-align: left;
          }
          .section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .team {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text07 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text08 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .cards-container1 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-card {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .avatar-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon10 {
            width: 48px;
            height: 48px;
          }
          .name {
            margin-bottom: var(--dl-space-space-unit);
          }
          .position {
            color: var(--dl-color-gray-700);
          }
          .team-card1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .avatar-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon12 {
            width: 48px;
            height: 48px;
          }
          .name1 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .position1 {
            color: var(--dl-color-gray-700);
          }
          .team-card2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .avatar-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon14 {
            width: 48px;
            height: 48px;
          }
          .name2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .position2 {
            color: var(--dl-color-gray-700);
          }
          .team-card3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .avatar-container3 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon16 {
            width: 48px;
            height: 48px;
          }
          .name3 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .position3 {
            color: var(--dl-color-gray-700);
          }
          .team-card4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            flex-direction: column;
          }
          .avatar-container4 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .icon18 {
            width: 48px;
            height: 48px;
          }
          .name4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .position4 {
            color: var(--dl-color-gray-700);
          }
          .section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .our-story {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-tenunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .text10 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .text11 {
            color: var(--dl-color-gray-700);
            text-align: center;
          }
          .cards-container2 {
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-doubleunit);
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .left-section {
            width: 50%;
            display: flex;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            margin-right: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .video-container {
            width: 100%;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .video {
            width: 100%;
            height: 350px;
            position: relative;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .play-container {
            top: calc(50% - 25px);
            left: calc(50% - 25px);
            right: auto;
            width: 50px;
            bottom: auto;
            height: 50px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-gray-500);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
          }
          .icon20 {
            fill: var(--dl-color-gray-500);
            width: 48px;
            height: 48px;
          }
          .content-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: flex-start;
          }
          .heading4 {
            text-align: left;
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .text12 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .text13 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .info-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .stats-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .messages-container {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .icon22 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .views-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon24 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .right-section {
            width: 50%;
            display: flex;
            flex-wrap: wrap;
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: row;
            justify-content: space-between;
          }
          .card {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .image2 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .content-container2 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .text16 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .info-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .stats-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .messages-container1 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .icon26 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .views-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon28 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .card1 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
            justify-content: space-between;
          }
          .image3 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .content-container3 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .text19 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .info-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .stats-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .messages-container2 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .icon30 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .views-container2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon32 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .card2 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .image4 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .content-container4 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .text22 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .info-container3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .stats-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .messages-container3 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .icon34 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .views-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon36 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .card3 {
            width: 48%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            justify-content: space-between;
          }
          .image5 {
            width: 100%;
            height: 160px;
            object-fit: cover;
            border-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .content-container5 {
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .text25 {
            text-align: left;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .info-container4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 0px;
          }
          .stats-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .messages-container4 {
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
          }
          .icon38 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .views-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon40 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-unit);
          }
          .section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .get-in-touch {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .text28 {
            text-align: center;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .content-container6 {
            width: 100%;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .form-container {
            width: 40%;
            display: flex;
            align-self: stretch;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            margin-right: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
          }
          .heading5 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .name5 {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .email {
            width: 100%;
            border: none;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-doubleunit);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .message {
            width: 100%;
            border: none;
            height: 140px;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tripleunit);
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-tripleunit);
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .cta-btn1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius24);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .locations-container {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .location-1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .heading6 {
            font-size: 24px;
            font-style: normal;
            font-family: Roboto;
            font-weight: 700;
            margin-bottom: var(--dl-space-space-doubleunit);
          }
          .adress {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .icon42 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .email1 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .icon44 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .phone {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
          }
          .icon46 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .icon48 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon50 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .icon52 {
            width: 24px;
            height: 24px;
          }
          .copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon54 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column-reverse;
            }
            .content-container {
              flex-direction: column-reverse;
            }
            .hero-text {
              width: 80%;
            }
            .cards-container1 {
              justify-content: center;
            }
            .cards-container2 {
              flex-direction: column;
            }
            .left-section {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .right-section {
              width: 100%;
            }
            .form-container {
              width: 60%;
            }
            .locations-container {
              flex-wrap: wrap;
            }
            .location-1 {
              margin-bottom: var(--dl-space-space-tripleunit);
            }
          }
          @media (max-width: 767px) {
            .burger-menu {
              display: flex;
              padding: var(--dl-space-space-halfunit);
              border-radius: var(--dl-radius-radius-radius4);
              background-color: var(--dl-color-gray-black);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .links-container {
              display: none;
            }
            .heading-container {
              width: 100%;
            }
            .cards-container {
              align-items: center;
              flex-direction: column;
            }
            .features-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .features-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .features-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .heading-container1 {
              width: 100%;
            }
            .heading-container2 {
              width: 100%;
            }
            .cards-container2 {
              align-items: center;
              flex-direction: column;
            }
            .content-container6 {
              width: 100%;
              flex-direction: column;
            }
            .form-container {
              width: 100%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .locations-container {
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .hero {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .content-container {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .hero-text {
              width: 100%;
            }
            .features {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .features-card {
              width: 100%;
            }
            .features-card1 {
              width: 100%;
            }
            .features-card2 {
              width: 100%;
            }
            .team {
              padding-top: var(--dl-space-space-fiveunits);
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .text07 {
              text-align: center;
            }
            .our-story {
              padding-top: var(--dl-space-space-fiveunits);
            }
            .text10 {
              text-align: center;
            }
            .video {
              height: 200px;
            }
            .card {
              width: 100%;
            }
            .card1 {
              width: 100%;
            }
            .card2 {
              width: 100%;
            }
            .card3 {
              width: 100%;
            }
            .content-container6 {
              padding-left: 0px;
            }
            .form-container {
              padding: var(--dl-space-space-tripleunit);
              margin-right: 0px;
            }
            .heading5 {
              text-align: center;
            }
            .location-1 {
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
