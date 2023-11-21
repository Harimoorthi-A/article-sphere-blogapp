import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {getDocs, collection, doc, deleteDoc} from 'firebase/firestore'
import { auth,db } from '../firebase-config'

function Post({isAuth}) {

    const [postLists, setPostlist]=useState([]);
    const postsCollectionref = collection(db, "posts")

    useEffect(()=>{
        const getPosts=async()=>{
            const data =await getDocs(postsCollectionref);
            setPostlist(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
        };
        getPosts();
    }, [deletePost]);

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };


    return (
        // <div>
        //     <Row className='bg-dark p-3'>
        //         <Col lg={4} md={4} sm={4} xs={4}>
        //             <div className='panel'>
        //                 {/* <img
        //                     alt=''
        //                     src="https://i.postimg.cc/qv5wD3J9/business.jpg"
        //                     width='100%'
        //                     height='200'
        //                 /> */}
        //             </div>
        //         </Col>
        //         <Col lg={8} md={8} sm={8} xs={8} className='mt-5'>
        //         {
        //             postLists.map((post)=>{
        //                 return(
        //                     <>
        //                     <h5>{post.title}</h5>
        //                     <p>{post.postText}</p>
        //                     <Row>
        //                         <Col lg={8} md={8} sm={8} xs={8} className=''>
        //                             <Link to={'/reading'}>
        //                                 <Button className='btn btn-dark'>Read More</Button>
        //                             </Link>
        //                         </Col>
        //                         <Col lg={2} md={2} sm={2} xs={2} className='text-end'>
        //                             <i class="fa-solid fa-pen-to-square icons"></i>
        //                         </Col>
        //                         <Col lg={2} md={2} sm={2} xs={2} className='text-end'>
        //                             <i class="fa-solid fa-trash icons" style={{ color: 'red' }}></i>
        //                         </Col>
        //                     </Row>
        //                     </>
        //                 )
        //             })
        //         }
        //         </Col>
        //     </Row>

        // </div>
        <div>
            {postLists.map((post) => {
        return (
          <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    {" "}
                    &#128465;
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.postText} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
        </div>
    )
}

export default Post