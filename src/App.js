import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post";
import react_logo from './react-logo.jpg';

function App() {
  return (
    <div className="app">
        <div className="app__header">
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </div>
        <h1>Header</h1>
        <Post username="Khushboo" caption="One click import demo content which includes post, pages, comments etc. " imageUrl={react_logo}/>
        <Post username="Neel" caption=" import demo content for different" imageUrl="https://www.gstatic.com/webp/gallery3/2.png"/>
        <Post username="Jay" caption="Click on Get Started" imageUrl="https://www.gstatic.com/webp/gallery3/4_webp_ll.png"/>
        <Post username="Dhruvin" caption="Click on Start Import." imageUrl="https://www.gstatic.com/webp/gallery3/3_webp_ll.png"/>
        {/* Posts */}
    </div>
  );
}

export default App;
