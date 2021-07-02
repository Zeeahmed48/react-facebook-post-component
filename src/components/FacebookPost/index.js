import './style.css';
import FbImageLibrary from 'react-fb-image-grid';
import { useState } from 'react';

const FacebookPost = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [dropCommentBox, setDropCommentBox] = useState(false);
  const {
    details: { avatar, createdBy, createdAt, description, images },
  } = props;

  return (
    <div className='facebook_post'>
      <div className='post_header'>
        <div className='post_header_upper'>
          <img src={avatar} />
          <div className='post_header_info'>
            <h4 className='post_header_name'>{createdBy}</h4>
            <p className='post_header_time'>{createdAt}</p>
          </div>
        </div>
        <div className='post__title'>{description}</div>
      </div>
      <FbImageLibrary images={images} />
      <div className='post_footer'>
        <i
          className='fas fa-thumbs-up'
          style={{ color: isLiked && '#4444ff' }}
          onClick={() => setIsLiked(!isLiked)}
        ></i>
        <i
          className='fas fa-comment'
          onClick={() => setDropCommentBox(!dropCommentBox)}
        ></i>
        <i className='fas fa-share'></i>
      </div>
      {dropCommentBox && (
        <div>
          <input type='text' />
        </div>
      )}
    </div>
  );
};

export default FacebookPost;
