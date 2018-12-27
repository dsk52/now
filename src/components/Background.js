import React from 'react'
import FlickerClient from '../clients/FlickerClient'

class Background extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      photos: {
        photo: []
      }
    }
  }

  fetchPhoto(text = 'sunny') {
    const params = {
      text: text
    }
    FlickerClient.get(this, params)
  }

  render() {
    return (
      <div>
        {this.state.photos.photo.length
          ? this.state.photos.photo.map(photo => {
              return (
                <div key={photo.id}>
                  <CurrentBackgroundImage photo={photo} />
                </div>
              )
            })
          : null}
      </div>
    )
  }
}

const CurrentBackgroundImage = props => {
  let imagePath = ''
  if (props.photo.url_l) {
    imagePath = props.photo.url_l
  } else {
    const photo = props.photo
    imagePath = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
      photo.id
    }_${photo.secret}.jpg`
  }
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

export default Background
