import { Box } from '@mui/material';
import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { IPost } from '../../interfaces/Ipost';

import './styles.scss';

const Post: React.FC<{ post: IPost }> = ({ post }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '200px',
      backgroundColor: '#390B70',
      borderRadius: '1rem',
    }}
  >
    <div className="post_header">
      <h1 className="post_title">{post.name}</h1>
    </div>
    <div className="post_content">
      <span className="post_description">{post.description}</span>
    </div>
    <div className="post_footer">
      <span className="post_author">By: {post.author.name}</span>
      <span>
        <br />
        Categorias:{' '}
      </span>
      {post.categories.map((category) => (
        <span className="post_category">{category.name.trim()}</span>
      ))}
    </div>
  </Box>
);

export default Post;
