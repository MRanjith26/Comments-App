// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, isLikedImage, onDeleteId} = props
  const {
    id,
    name,
    comment,
    date,
    isLiked,
    initialContainerBackgroundClassNames,
  } = commentDetails

  const initial = name[0]
  const time = formatDistanceToNow(date)

  const onActiveLike = () => {
    isLikedImage(id)
  }

  const onActiveDelete = () => {
    onDeleteId(id)
  }
  const likeTextClassName = isLiked ? 'btn-active' : 'btn'
  const LikedImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <li className="comment-card">
      <div className="user-details-container">
        <p
          className={`container-class ${initialContainerBackgroundClassNames}`}
        >
          {initial}
        </p>
        <div className="user-details">
          <div className="details">
            <p className="user-name">{name}</p>
            <p className="user-time">{time} ago</p>
          </div>
          <p className="user-comment">{comment}</p>
        </div>
      </div>
      <div className="user-icons">
        <button
          className={likeTextClassName}
          type="button"
          onClick={onActiveLike}
        >
          <img src={LikedImageUrl} className="img" alt="like" />
          <span>Like</span>
        </button>
        <button
          className="butn"
          type="button"
          onClick={onActiveDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
