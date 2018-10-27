import React from 'react'
import styled from 'styled-components'
import QiitaClient from '../clients/QiitaClient'
import DateUtility from '../utility/DateUtility'

const QiitaPost = props => {
  const post = props.post
  return (
    <Post>
      <a className="title" href={post.url}>
        {post.title}
      </a>
    </Post>
  )
}

class Qiita extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [
        {
          title: '',
          url: ''
        }
      ]
    }
  }

  componentDidMount() {
    const params = {
      page: 1,
      per_page: 6
    }
    QiitaClient.get(this, params)
  }

  render() {
    return (
      <div>
        <h2>Qiita</h2>
        <PostList>
          {this.state.posts.map((post, index) => {
            return <QiitaPost post={post} key={index} />
          })}
        </PostList>
      </div>
    )
  }
}
export default Qiita

const PostList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1%;

  > * {
    width: 29.3%;
    margin: 1%;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #fff;
    padding: 5px;
  }
`

const Post = styled.div`
  .title {
    text-decoration: none;
    color: #252525;
  }
`
