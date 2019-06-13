import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import './Feed.css'
import api from '../../services/api'
import { enableHeader } from '../../actions/headerActions'

import more from '../../assets/more.svg'
import like from '../../assets/like.svg'
import comment from '../../assets/comment.svg'
import send from '../../assets/send.svg'
import io from 'socket.io-client'

const FeedPage = () => {
  const dispatch = useDispatch()
  const [feed, setFeed] = useState([])

  useEffect(() => {
    dispatch(enableHeader())
    registerToSocket()
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data } = await api.get('posts')
    setFeed(data)
  }

  const handleLike = async () => {
    console.log('like')
  }

  const registerToSocket = () => {
    const socket = io('http://localhost:3333')

    socket.on('post', newPost => {
      this.setFeed([newPost, ...this.state.feed])
    })
  }

  return (
    <section id='post-list'>
      { feed.map(({ _id, author, place, image, likes, description, hashtags }) => (
        <article key={_id}>
          <header>
            <div className='user-info'>
              <span>{ author.name }</span>
              <span className='place' >{ place }</span>
            </div>
            <img src={more} alt='More' />
          </header>

          <img src={`http://localhost:3333/files/${image}`} alt='teste' />

          <footer>
            <div className='actions'>
              <button type='button' onClick={() => handleLike(_id)}>
                <img src={like} alt='like' />
              </button>
              <img src={comment} alt='comment' />
              <img src={send} alt='send' />
            </div>

            <strong>{ likes } Likes</strong>

            <p>
              { description }
              <span>{ hashtags }</span>
            </p>
          </footer>
        </article>
      )) }
    </section>
  )
}

export default FeedPage
