import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Trending from '../components/Trending'
import Tags from '../components/Tags'
import Post from '../components/Post'
import Header from '../components/Header'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../firebase-config'

function Home({ isAuth }) {

    const [postLists, setPostlist] = useState([]);
    const postsCollectionref = collection(db, "posts")

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionref);
            setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getPosts();
    }, []);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

    return (
        <div style={{ margin: '5%' }}>
            <Header></Header>

            <Trending></Trending>
            <Tags></Tags>
            <Row >
                <b>Daily Blogs</b>
                <hr />
                <div className=' text-dark bg-dark text-white rounded w-50' style={{ width: 'fit' }}>
                    {postLists.map((post) => {
                        return (
                            <div className="row container post" >
                                <div className="postHeader">
                                    <div className="title" >
                                        <h5 style={{overflow:'hidden'}}> {post.title}</h5>
                                    </div>
                                </div>

                                <div className="postTextContainer"> {post.postText} </div>
                                <div className="deletePost text-end">
                                    <Button className='btn btn-light'
                                        onClick={() => {
                                            deletePost(post.id);
                                        }}
                                    >
                                        <i class="fa-solid fa-trash icons" style={{ color: 'red' }}></i>
                                    </Button>
                                </div>

                                <b>Posted by: {post.author.name}</b>
                                <hr style={{color:"orange"}}/>
                            </div>
                        
                        );
                        
                    })}


                </div>
            </Row>
            
        </div>
    )
}

export default Home