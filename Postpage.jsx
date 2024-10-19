import React, { useState } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Articleform from './Articleform';
import Questionform from './Questionform';
import './Postpage.css';

const PostPage = () => {
  const [postType, setPostType] = useState(null);

  const handleChange = (e) => {
    setPostType(e.target.value);
  };

  return (
    <Container className="post-container">
      <Header as='h1' className="main-header">New Post</Header>
      <div className="post-type-selector">
        <div className="inline-container">
          <h2 className="post-type-heading">Select Post Type</h2>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                value="question"
                checked={postType === 'question'}
                onChange={handleChange}
              />
              Question
            </label>
            <label className="radio-label">
              <input
                type="radio"
                value="article"
                checked={postType === 'article'}
                onChange={handleChange}
              />
              Article
            </label>
          </div>
        </div>
      </div>
      {postType === 'question' && <Questionform />}
      {postType === 'article' && <Articleform />}
    </Container>
  );
};

export default PostPage;