import './index.css'
import {v4 as uuidv4} from 'uuid'
import {Component} from 'react'
import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    CommentsList: [],
  }

  onDeleteId = id => {
    this.setState(prevState => ({
      CommentsList: prevState.CommentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  isLikedImage = id => {
    this.setState(prevState => ({
      CommentsList: prevState.CommentsList.map(eachComment => {
        if (eachComment.id === id) {
          console.log(true)
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const initialContainerBackgroundColorNames =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialContainerBackgroundClassNames: initialContainerBackgroundColorNames,
    }

    this.setState(prevState => ({
      CommentsList: [...prevState.CommentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onAddNameInput = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onAddCommentInput = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  render() {
    const {name, comment, CommentsList} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="title">Comments</h1>
          <div className="Details-container">
            <form
              className="form-container"
              onSubmit={this.onAddComment}
              name="form"
            >
              <p className="context">Say Something about 4.0 Technologies</p>
              <input
                type="text"
                className="input"
                value={name}
                placeholder="Your Name"
                onChange={this.onAddNameInput}
              />
              <textarea
                rows="6"
                cols="39"
                className="comment-text"
                value={comment}
                placeholder="Your Comment"
                onChange={this.onAddCommentInput}
              />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
                alt="comments"
                className="form-image"
              />
            </div>
          </div>
          <div className="total-comments">
            <p className="total">{CommentsList.length}</p>
            <p className="brief">Comments</p>
          </div>
        </div>
        <ul className="comment-container">
          {CommentsList.map(eachComment => (
            <CommentItem
              commentDetails={eachComment}
              key={eachComment.id}
              isLikedImage={this.isLikedImage}
              onDeleteId={this.onDeleteId}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
