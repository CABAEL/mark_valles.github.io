import React from 'react';
import '../css/lockscreen.css';
import loading_img from '../img/loading-windows.gif';

class Lockscreen extends React.Component {

    
  constructor(props) {
    super(props);
    this.state = {
      showLoading: true,
      showText: false,
      textIndex: 0,
      textValues: [
        "Hello, welcome to my portfolio.",
        "Are you an employer or just a visitor?",
        "I hope you will like my stuff here.",
        "Let's begin, shall we?",
      ],
    };
  }

  changeText = () => {
    const { textIndex, textValues } = this.state;
    const nextIndex = textIndex + 1;

    this.setState({ textIndex: nextIndex }, () => {
      if (nextIndex === textValues.length - 1) {
        // If it's the last text, clear the interval
        clearInterval(this.textInterval);
        this.redirectToHome()
      }
    });
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showLoading: false, showText: true });
      this.textInterval = setInterval(this.changeText, 3000);
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.textInterval);
  }

  redirectToHome = () => {
    setTimeout(() => {
        window.location.replace('/home');
    }, 3000);
  }

  render() {
    const { showLoading, showText, textValues, textIndex } = this.state;

    return (
      <div className='wrapper'>
        <div className="background"></div>
        <div className="opacity">
          <div className="container">
            {showLoading && (
              <img src={loading_img} className="loading_gif" width={100} height={100} alt="Loading" />
            )}
            {showText && (
              <h1 className='lockscreenText'>{textValues[textIndex]}</h1>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Lockscreen;
