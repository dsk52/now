import React from 'react'
import FlickerClient from '../clients/FlickerClient'
import styled from 'styled-components'

const API_KEY = process.env.REACT_APP_FLICKER_KEY

class Background extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: {
        photo: []
      }
    }
  }

  componentDidMount() {
    this.fetchPhoto()

    this.fetchId = setInterval(() => {
      this.fetchPhoto()
    }, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.fetchId)
  }

  fetchPhoto() {
    const params = {
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: 'sunny',
      extras: 'url_l,date_taken',
      method: 'flickr.photos.search',
      per_page: 1
    }
    FlickerClient.get(this, params)
  }

  render() {
    return (
      <div>
        {!this.state.photos.photo.length ? (
          <DefaultBackgroundImage />
        ) : (
          this.state.photos.photo.map(photo => {
            return (
              <div key={photo.id}>
                <CurrentBackgroundImage photo={photo} />
              </div>
            )
          })
        )}
      </div>
    )
  }
}

export default Background

const DefaultBackgroundImage = () => {
  const imagePath =
    'https://farm2.staticflickr.com/1957/44769600924_35db82d4c4.jpg'
  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        height: '100vh',
        background: `url(${imagePath}) no-repeat center center / cover`
      }}
    />
  )
}

const CurrentBackgroundImage = props => {
  return (
    <div
      style={{
        display: 'block',
        width: '100%',
        height: '100vh',
        background: `url(${props.photo.url_l}) no-repeat center center / cover`
      }}
    />
  )
}
