import './style.css';
import FbImageLibrary from 'react-fb-image-grid';
import { Avatar, IconButton } from '@material-ui/core';
import {
  ThumbUpAltOutlined,
  ChatBubbleOutlineSharp,
  NearMe,
} from '@material-ui/icons';

const FacebookPost = ({ details }) => {
  const { avatar, createdBy, createdAt, description, images } = details;
  return (
    <div className='facebook_post'>
      <div className='post_header'>
        <div className='post_header_upper'>
          <Avatar src={avatar} />
          <div className='post_header_info'>
            <h4 className='post_header_name'>{createdBy}</h4>
            <p className='post_header_time'>{createdAt}</p>
          </div>
        </div>
        <div className='post__title'>{description}</div>
      </div>
      <FbImageLibrary images={images} />
      <div className='post_footer'>
        <IconButton>
          <ThumbUpAltOutlined />
        </IconButton>
        <IconButton>
          <ChatBubbleOutlineSharp />
        </IconButton>
        <IconButton>
          <NearMe />
        </IconButton>
      </div>
    </div>
  );
};

export default FacebookPost;
