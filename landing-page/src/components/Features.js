import React from 'react';

const Features = () => {
  return (
    <section id="features" className="features-color">
      <div className="container">
        <div className="row">
          <div className="col m3"></div>
          <div className="col m6 center-align">
            <h2>Projects</h2>
            <h5>Work in progress!</h5>
          </div>
          <div className="col m3"></div>
        </div>
        <div className="row">
          <div className="col m3">
            <i className="material-icons">subtitles</i>
            <h5>Previsualization AI</h5>
            <p>Generating scenes and visualizing concepts</p>
          </div>
          <div className="col m3">
            <i className="material-icons">attractions</i>
            <h5>Story Boarding</h5>
            <p>Generating storyboards for your scripts </p>
          </div>
          <div className="col m3">
            <i className="material-icons">audiotrack</i>
            <h5>VFX and SFX support</h5>
            <p>Visual effects, CGI and Sound generation <b>Foley</b></p>
          </div>
          <div className="col m3">
            <i className="material-icons">event</i>
            <h5>Optimization</h5>
            <p>Automatic creation of schedules for your film production</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
