import './style.css';
import FbImageLibrary from 'react-fb-image-grid';

const FacebookPost = (props) => {
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
        <i class='fas fa-thumbs-up'></i>
        <i class='fas fa-comment'></i>
        <i class='fas fa-share'></i>
      </div>
    </div>
  );
};

export default FacebookPost;
