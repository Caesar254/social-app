// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import Post from './Post'
// import './styles.css'

// function Posts() {
//     const [post, setPosts] = useState([])
//     // const [records, setRecords] = useState([])

//     useEffect(() => {
//         axios.get('https://dummyjson.com/products')
//         .then(res => (res.data.posts))
//         .catch(err =>console.log(err))
//     },[])
//   return (
//     <div className='posts'>
//         <div className='search-container'>
//         <input type="text" placeholder='search' 
//             className='search-input'></input>
//         </div>
//         <div className='posts-container'>
//         {post.map((post, index) => (
//                 <Post post={post} key={index}/>
                
//             ))}

//         </div>


      
//     </div>
//   )
// }

// export default Posts

import axios from 'axios'
import React, { useEffect, useState } from 'react'

import './styles.css'
import './posts.css'

const PostCard = ({ title, body }) => {
    return (
      <div className="card">
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    );
  };
  const Paywall = () => {
    return (
      <div className="paywall">
        <p>You have exceeded  your free limit. Subscribe to view more posts.</p>
      </div>
    );
  };

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [records, setRecords] = useState([]);
   
  
  const [showPaywall, setShowPaywall] = useState(false);


    // useEffect(() => {
    //     // Fetch data from the provided URL using axios
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => setPosts(response.data))
    //       .then(response => setRecords(response.data))
         
          
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []); 
      useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            setPosts(res.data)
            setRecords(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    const displayPosts = posts.slice(0, 20);

  const handleViewMore = () => {
    // Toggle the paywall after viewing 20 posts
    setShowPaywall(true);
  };
      const getInputData = (event) => {
        setPosts(records.filter(r => r.title.toLowerCase().includes(event.target.value.toLowerCase())))
    
    
      };
      
    
    
      return (
        <div className='posts'>
        <div className='search-container'>
            <input type="text" placeholder='search' 
            onInput={getInputData} className='search-input'></input>
        </div>
        <div className='blog-icon'>
             
            <i className='fa fa-calculator'></i>
        </div>
        <div className="container">
      <h1>Posts</h1>
      <div className="card-container">
        {displayPosts.map(post => (
          <PostCard key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
      {showPaywall && <Paywall />}
      {!showPaywall && (
        <button onClick={handleViewMore} className="view-more-button">
          More Posts...
        </button>
      )}
    </div>
        </div>
      );
    };



export default Posts