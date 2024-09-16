import React, { useState } from 'react'
import "./chat.css" 
import EmojiPicker from 'emoji-picker-react'

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleEmoji = (emoji) => {
    setMessage((prev) => prev + emoji.emoji)
    setOpen(false)
  }

  console.log(message) // Log the state 'message' instead of undefined 'text'

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Divyansh Srivastava</span>
            <p>Lorem. Consequanim.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"> 
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <p>
            Lorem ipsum dolor sit amet.
          </p>
          <span>
            1 min ago
          </span>
        </div>
        
      </div>
      <div>
      <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        
        
        <div className="message own">
          
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        
        <div className="message own">
          
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>

        <div className="message own">
          
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
      </div>
      <div className="message own">
          
          <div className="texts">
            <p>
              Lorem, ipsum dolor.
            </p>
            <span>
              1 min ago
            </span>
          </div>
        </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input 
          type="text" 
          placeholder='Type a message......' 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="emoji">
          <img 
            src="./emoji.png" 
            alt=""
            onClick={() => setOpen((prev) => !prev)} 
          /> 
         <div className="picker">
         {open && <EmojiPicker onEmojiClick={handleEmoji} />}
         </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
