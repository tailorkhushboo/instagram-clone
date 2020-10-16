import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Post from "./Post";
import react_logo from './react-logo.jpg';
import { db } from './firebase'
function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            //every time a new post is added , this code fires...
            setPosts(snapshot.docs.map(doc => doc.data()));
        } )
    }, []);

  return (
    <div className="app">
        <div className="app__header">
          <img
            className="app__headerImage"
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          />
        </div>
        <h1>Header</h1>
        {
            posts.map(post => (
                <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
            ))
        }
        {/*<Post username="Khushboo" caption="One click import demo content which includes post, pages, comments etc. " imageUrl={react_logo}/>*/}
        {/*<Post username="Neel" caption=" import demo content for different" imageUrl="https://www.gstatic.com/webp/gallery3/2.png"/>*/}
        {/*<Post username="Jay" caption="Click on Get Started" imageUrl="https://www.gstatic.com/webp/gallery3/4_webp_ll.png"/>*/}
        {/*<Post username="Dhruvin" caption="Click on Start Import." imageUrl="https://www.gstatic.com/webp/gallery3/3_webp_ll.png"/>*/}
        {/* Posts */}
    </div>
  );
}

export default App;
