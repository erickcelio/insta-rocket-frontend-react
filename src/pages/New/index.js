import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import './New.css'

import api from '../../services/api'
import { enableHeader } from '../../actions/headerActions'

const NewPage = ({ history }) => {
  const [image, setImage] = useState(null)
  const [place, setPlace] = useState('')
  const [description, setDescription] = useState('')
  const [hashtags, setHashtags] = useState('')

  const setState = { setImage, setDescription, setPlace, setHashtags }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(enableHeader())
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()

    // eslint-disable-next-line no-undef
    const data = new FormData()

    data.append('image', image)
    data.append('description', description)
    data.append('hashtags', hashtags)
    data.append('place', place)

    await api.post('posts', data)

    history.push('/')
  }

  const handleInputChange = e => {
    setState[`set${e.target.name}`](e.target.value)
  }

  const handleImageChange = e => {
    setState.setImage(e.target.files[0])
  }

  return (
    <form id='new-post'>
      <input
        type='file'
        onChange={handleImageChange}
      />

      <input
        type='text'
        name='Place'
        placeholder='Local do post'
        onChange={handleInputChange}
        value={place}

      />

      <input
        type='text'
        name='Description'
        placeholder='Descrição do post'
        onChange={handleInputChange}
        value={description}

      />

      <input
        type='text'
        name='Hashtags'
        placeholder='Hashtags do post'
        onChange={handleInputChange}
        value={hashtags}

      />

      <button type='submit' onClick={handleSubmit}>Enviar</button>
    </form>
  )
}

NewPage.propTypes = {
  history: PropTypes.object
}

export default NewPage
