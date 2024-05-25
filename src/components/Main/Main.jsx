import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import SignIn from '../SignIn/SignIn'

const Main = () => {

    const {logout, user, onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        logout();
    }

  return (
    <div className='main'>
        <div className="nav">
            <p>DestinyAI <span> an assistant with Max IQ</span></p>
            <div className="nav-right">
                <SignIn />
                <img onClick={toggleMenu} src={user.picture? user.picture:assets.user_icon} alt="" />
                <div className={`sub-menu-wrap${isOpen ? '-open-menu' : ''}`}>
                    <div className="sub-menu">
                        <div className="user-info">
                            <img src={user.picture? user.picture:assets.user_icon} alt="" />
                            <h4>Aman Taneja</h4>
                        </div>
                        <hr />
                        <a href="#" className='sub-menu-link'>
                            <img src={assets.profile} alt="" />
                            <p>Edit Profile</p>
                            <span> &gt; </span>
                        </a>
                        <a href="#" className='sub-menu-link'>
                            <img src={assets.setting_icon} alt="" />
                            <p>Settings & Privacy</p>
                            <span> &gt; </span>
                        </a>
                        <a href="#" className='sub-menu-link'>
                            <img src={assets.question_icon} alt="" />
                            <p>Help & Support</p>
                            <span> &gt; </span>
                        </a>
                        <a href="#" className='sub-menu-link'>
                            <img src={assets.logout} alt="" />
                            <p onClick={handleLogout}>Logout</p>
                            <span> &gt; </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="main-container">

           {!showResult
           ?<> 
                <div className="greet">
                <p><span>Hello {user.name ? user.given_name+',': 'User,'}</span></p>
                <p>How can I assist you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip.</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activities for our work retreat.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readability of the following code.</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
             </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                    </div>
                </div>
                <p className="bottom-info">
                    Destiny may display inaccurate info, including about people, so double-check its responses. Your Privacy & Destiny Apps.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main