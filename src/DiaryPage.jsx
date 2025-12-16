import React, { useEffect } from 'react';
import './DiaryPage.css';

const DiaryPage = ({ onClose }) => { // It must accept 'onClose' as a prop
  
  // This effect adds the 'Escape' key to close the modal
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    // The modal overlay (the dark background)
    <div className="diary-modal-overlay" onClick={onClose}>
      
      {/* The diary page itself. Clicking this won't close it. */}
      <div className="diary-page-container" onClick={(e) => e.stopPropagation()}>
        
        {/* The exit button */}
        <button className="diary-exit-btn" onClick={onClose} title="Close">
          &times;
        </button>

        {/* Your content goes inside this scrolling container */}
        <div className="diary-content">

          <div className="box">
            वो कहती है कि मैं कहाँ इतनी ख़ूबसूरत हूँ <span className="emoji">🌸</span><br/>
            पर उन्हें कैसे समझाऊँ <span className="emoji">🤍</span><br/>
            जब वो अपने बाल सँवारती है <span className="emoji">✨</span><br/>
            तो दिल उसी पर सँवर जाता है <span className="emoji">💓</span><br/>
            और जब जुल्फ़ों को कानों के पीछे ले जाती है <span className="emoji">🌙</span><br/>
            तो लगता है जैसे बादलों से चाँद निकल आया हो <span className="emoji">☁️🌙</span>
          </div>

          <div className="box">
            जब वो साड़ी का पल्लू सुलझाती है <span className="emoji">🥻✨</span><br/>
            तो दिल उसमें उलझ जाता है <span className="emoji">💖</span><br/>
            और जब वो मुस्कुराती है <span className="emoji">😊</span><br/>
            तो दिल पिघल जाता है <span className="emoji">🫠❤</span><br/>
            फिर भी वो कहती है —<br/>
            मैं कहाँ खूबसूरत हूँ <span className="emoji">🌷</span>
          </div>

          <div className="box">
            तुम्हें नाराज़ करना भी पसंद है <span className="emoji">😌</span><br/>
            और नाराज़ करके मनाना भी <span className="emoji">❤</span><br/>
            हर वो हरकत करना पसंद है<br/>
            जिससे तू मुस्कुराए <span className="emoji">😊✨</span><br/>
            बस ज़्यादा नाराज़ मत होना <span className="emoji">🙏</span><br/>
            क्योंकि तुमसे बात करना सबसे ज़्यादा पसंद है <span className="emoji">💕🫂</span>
          </div>

          <div className="box">
            वो पूछती है — मैं ही क्यों पसंद हूँ? <span className="emoji">🤍🤔</span><br/>
            अब क्या जवाब दूँ <span className="emoji">😌</span><br/>
            मुझे तैरना नहीं आता <span className="emoji">🌊</span><br/>
            पर तुम्हारी आँखों में डूबना पसंद है <span className="emoji">👀💙</span><br/>
            सबको जानने की कोशिश नहीं करता,<br/>
            पर तुम्हें पूरा जानना पसंद है <span className="emoji">💭❤</span>
          </div>

          <div className="box">
            मुझे तारों भरी रातें पसंद हैं <span className="emoji">🌌</span><br/>
            मुझे दूर से सुनाई देने वाली तुम्हारी बातें पसंद हैं <span className="emoji">💭</span><br/>
            तुम्हारी जुल्फ़ें भी कमाल हैं <span className="emoji">🌙🖤</span><br/>
            पर सबसे ज़्यादा मुझे<br/>
            तुम्हारी आँखें पसंद हैं <span className="emoji">👀❤</span>
            <div className="signature">
              ~ Tera dost, Jainam<span className="emoji">💌</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DiaryPage;