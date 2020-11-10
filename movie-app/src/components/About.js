import React from 'react';


const About = () => {
   return(
    <main>
        <section className="app-info">
            <h1>About The project</h1>
            <p>Movie Land is the movie database listing the movies in different topics such as "Popular", "Now Playing", "Upcoming", and "Top Rated".</p>
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <img src={require('../images/moviedblogo.svg')} alt="TMDb logo" className="about-img"/>


        </section>
    </main>
   );
}

export default About;