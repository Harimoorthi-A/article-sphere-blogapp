import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Header from '../components/Header';
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

function CreatePost({isAuth}) {

  const [title, setTitle] = useState("");

  const [postText, SetPostText] = useState("");



  const postsCollectionref = collection(db, "posts")
  let navigate=useNavigate();

  const createPost = async () => {
    await addDoc(postsCollectionref, {title, postText, author: { name: auth.currentUser.displayName, id: auth.currentUser.uid } })
    navigate("/home")
  };

  useEffect(()=>{
    if(!isAuth){
      navigate('/');
    }
  },[])

  return (
    <div>
      <Header></Header>
      <div className='container mt-5'>
        <h5>Write a Blog</h5>
        <div>
          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
            onChange={(event) => { setTitle(event.target.value) }}
          >
            <Form.Control type="text" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label=""
            className="mb-3"
            
          >
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Description" onChange={(event) => { SetPostText(event.target.value) }}>
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: '100px' }}
            />
          </FloatingLabel>
          <br />

          <Button className='btn btn-warning' onClick={createPost}>
            POST
          </Button>
        </div>

      </div>
    </div>
  )
}

export default CreatePost