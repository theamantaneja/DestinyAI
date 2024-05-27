import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import SignIn from "../SignIn/SignIn";

const Main = () => {
  const {
    setThemeDark,
    themeDark,
    logout,
    user,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  const handleTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <div className={themeDark ? "main-dark" : "main"}>
      <div className="nav">
        <div className={themeDark?"heading-dark":"heading"}>
          <p>DestinyAI </p>
          <span> an assistant with Max IQ</span>
        </div>
        <div className="nav-right">
          <div onClick={handleTheme} className="theme">
            {themeDark ? (
              <img className="sun" src={assets.brightness} alt="" />
            ) : (
              <img src={assets.moon} alt="" />
            )}
          </div>
          <SignIn />
          <img
            onClick={toggleMenu}
            src={user.picture ? user.picture : assets.user_icon}
            alt=""
          />
          <div className={`sub-menu-wrap${isOpen ? "-open-menu" : ""}`}>
            <div className={themeDark ? "sub-menu-dark" : "sub-menu"}>
              <div className="user-info">
                <img
                  src={user.picture ? user.picture : assets.user_icon}
                  alt=""
                />
                <h4>
                  {user.given_name
                    ? user.given_name + " " + user.family_name
                    : "Sign in"}
                </h4>
              </div>
              <hr />
              <a href="#" className="sub-menu-link">
                <img src={assets.profile} alt="" />
                <p>Edit Profile</p>
                <span> &gt; </span>
              </a>
              <a href="#" className="sub-menu-link">
                <img src={assets.setting_icon} alt="" />
                <p>Settings & Privacy</p>
                <span> &gt; </span>
              </a>
              <a href="#" className="sub-menu-link">
                <img src={assets.question_icon} alt="" />
                <p>Help & Support</p>
                <span> &gt; </span>
              </a>
              <a href="#" className="sub-menu-link">
                <img src={assets.logout} alt="" />
                <p onClick={handleLogout}>Logout</p>
                <span> &gt; </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={closeMenu}
        className={themeDark ? "main-container-dark" : "main-container"}
      >
        {!showResult ? (
          <>
            <div className={themeDark ? "greet-dark" : "greet"}>
              <p>
                <span>Hello {user.name ? user.given_name + "," : "User,"}</span>
              </p>
              <p>How can I assist you today?</p>
            </div>
            <div className="cards">
              <div className={themeDark ? "card-dark" : "card"}>
                <p>Suggest beautiful places to see on an upcoming road trip.</p>

                <img
                  src={themeDark ? assets.compass_icon_w : assets.compass_icon}
                  alt=""
                />
              </div>
              <div className={themeDark ? "card-dark" : "card"}>
                <p>Briefly summarize this concept: Urban Planning</p>

                <img
                  src={themeDark ? assets.bulb_icon_w : assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className={themeDark ? "card-dark" : "card"}>
                <p>Brainstorm team bonding activities for our work retreat.</p>
                <img
                  src={themeDark ? assets.message_icon_w : assets.message_icon}
                  alt=""
                />
              </div>
              <div className={themeDark ? "card-dark" : "card"}>
                <p>Improve the readability of the following code.</p>
                <img
                  src={themeDark ? assets.code_icon_w : assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className={themeDark ? "main-bottom-dark" : "main-bottom"}>
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img
                src={themeDark ? assets.gallery_icon_w : assets.gallery_icon}
                alt=""
              />

              <img
                src={themeDark ? assets.mic_icon_w : assets.mic_icon}
                alt=""
              />

              {input ? (
                <img
                  onClick={() => onSent()}
                  src={themeDark ? assets.send_icon_w : assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Destiny may display inaccurate info, including about people, so
            double-check its responses. Your Privacy & Destiny Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
