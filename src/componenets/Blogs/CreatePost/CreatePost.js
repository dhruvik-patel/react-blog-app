import React, { useState } from 'react'
import axios from 'axios'
import classes from './CreatePost.module.css'

const CreatePost = () => {

    const [post, setPost] = useState({ title: '', content: '', author: '' })

    const submitHandler = () => {
        const url = 'https://jsonplaceholder.typicode.com/posts'
        axios.post(url, post)
            .then(res => {
                console.log(res)
                alert('Data sent successfully!!')
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className={classes.CreatePost}>
            <div>
                <label>Title</label>
                <input type="text" value={post.title} onChange={(e) => { setPost({ ...post, title: e.target.value }) }} />
            </div>
            <div>
                <label>Content</label>
                <input type="text" value={post.content} onChange={(e) => { setPost({ ...post, content: e.target.value }) }} />
            </div>
            <div>
                <label>Author</label>
                <input type="text" value={post.author} onChange={(e) => { setPost({ ...post, author: e.target.value }) }} />
            </div>
            <button onClick={submitHandler}>Send</button>
        </div>
    )
}

export default CreatePost