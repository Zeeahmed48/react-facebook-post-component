import './style.css';
import FbImageLibrary from 'react-fb-image-grid';
import { useState } from 'react';

const FacebookPost = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [dropCommentBox, setDropCommentBox] = useState(false);
  const [commentInput, setCommentInput] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [editModeComment, setEditModeComment] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [shareModal, setShareModal] = useState(false);
  const {
    details: { avatar, createdBy, createdAt, description, images },
  } = props;
  const addComment = (e) => {
    e.preventDefault();
    const tempList = [...commentList, commentInput];
    setCommentList(tempList);
    setCommentInput('');
  };
  const deleteComment = (index) => {
    const tempList = [...commentList];
    tempList.splice(index, 1);
    setCommentList(tempList);
  };
  const editComment = (comment, index) => {
    setEditModeComment(index);
    setUpdatedComment(comment);
  };
  const updateComment = (index) => {
    const tempList = [...commentList];
    tempList.splice(index, 1, updatedComment);
    setCommentList(tempList);
    setEditModeComment(null);
    setUpdatedComment('');
  };

  return (
    <div>
      <div
        className='facebook_post'
        style={{ filter: shareModal && 'blur(3px)' }}
      >
        <div className='post_header'>
          <div className='post_header_upper'>
            <img src={avatar} className='avatar' />
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
          <i className='fas fa-share' onClick={() => setShareModal(true)}></i>
        </div>
        {dropCommentBox && (
          <div>
            <div className='comment_section'>
              <img src={avatar} className='avatar sm_avatar' />
              <form className='comment_wrapper' onSubmit={addComment}>
                <input
                  type='text'
                  placeholder='Place your comment'
                  onChange={(e) => setCommentInput(e.target.value)}
                  value={commentInput}
                />
                <i className='fas fa-paper-plane'></i>
              </form>
            </div>
            <ul className='comment_list'>
              {commentList.map((comment, index) => {
                return (
                  <li key={index}>
                    <img src={avatar} className='avatar sm_avatar' />
                    <div className='comment_info'>
                      {editModeComment === index ? (
                        <input
                          type='text'
                          className="update_input"
                          onChange={(e) => setUpdatedComment(e.target.value)}
                          value={updatedComment}
                        />
                      ) : (
                        <span>{comment}</span>
                      )}
                      <div className='comment_options'>
                        {editModeComment === index ? (
                          <button onClick={() => updateComment(index)}>
                            Update
                          </button>
                        ) : (
                          <button onClick={() => editComment(comment, index)}>
                            Edit
                          </button>
                        )}
                        <button onClick={() => deleteComment(index)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      {shareModal && (
        <div className='share_modal' title='Hello from speech bubble!'>
          <h3>Share this post on:</h3>
          <i
            class='fab fa-twitter'
            style={{ color: '#4c6ef5', fontSize: 34, marginRight: 10 }}
          ></i>
          <i
            class='fab fa-instagram'
            style={{ color: '#e62e8d', fontSize: 34 }}
          ></i>
          <span
            onClick={() => setShareModal(false)}
            className='fas fa-times-circle'
          ></span>
        </div>
      )}
    </div>
  );
};

export default FacebookPost;
