import React from 'react';
import BlogPost from './BlogPost';

const WhoWeAre = () => {
  return (
    <section id="WhoWeAre ">
      <div className="container">
      <div className="row">
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
          <div className="col m4">
            <BlogPost />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
