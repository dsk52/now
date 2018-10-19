import React from 'react'
import FlickerClient from '../clients/FlickerClient'

const API_KEY = '0a1530ccec439eaedcef56ded19479ba'

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
  }

  fetchPhoto() {
    const params = {
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: 1,
      text: 'sunny',
      method: 'flickr.photos.search',
      per_page: 1
    }
    FlickerClient.get(this, params)
  }

  render() {
    return (
      <div>
        {!this.state.photos.photo.length
          ? null
          : this.state.photos.photo.map(photo => {
              return (
                <div key={photo.id}>
                  <img
                    src={`https://farm${photo.farm}.staticflickr.com/${
                      photo.server
                    }/${photo.id}_${photo.secret}.jpg`}
                    alt={photo.title}
                  />
                </div>
              )
            })}
      </div>
    )
  }
}

export default Background
