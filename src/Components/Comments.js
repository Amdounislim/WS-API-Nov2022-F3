import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Comment from './Comment'

const Comments = () => {

    const [comments, setComments] = useState([])

    const params = useParams()

    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
            setComments(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchComments()
    }, [params])



    return (
        <div>
            {comments.map((el, i) => <Comment com={el} key={i} />)}
        </div>
    )
}

export default Comments