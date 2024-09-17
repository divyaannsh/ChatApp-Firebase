import React from 'react';
import './detail.css';

const Detail = () => {
  return (
    <div className="detail">
      {/* User Info */}
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Jane Doe</h2>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      
      {/* Chat Settings */}
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowDown.png" alt="Arrow Icon" />
          </div>
        </div>

        {/* Privacy */}
        <div className="option">
          <div className="title">
            <span>Privacy</span>
            <img src="./arrowUp.png" alt="Arrow Icon" />
          </div>
        </div>

        {/* Shared Photos */}
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img src="./arrowDown.png" alt="Arrow Down Icon" />
          </div>
          <div className="photos">
            <div className="photoitem">
              <div className="photodetail">
                <img
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt="Shared Photo"
                />
                <span>photo_2024.png</span>
              </div>
              <img src="./download.png" alt="Download Icon" />
            </div>
          </div>
        </div>

        {/* Shared Files */}
        <div className="option">
          <div className="title">
            <span>Shared files</span>
            <img src="./arrowUp.png" alt="Arrow Up Icon" />
          </div>
        </div>

        {/* Block User Button */}
        <div className='Button'>
        <button>Block user</button>
        
        </div>
        <button className='logout'>logout</button>
      </div>
    </div>
  );
};

export default Detail;
