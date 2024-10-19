import React from 'react';
import { Menu } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import './Navigate.css';

const Navigate = () => {
  const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path); 
  };

  return (
    <Menu className="nav-menu">
      <Menu.Item
        name="home"
        onClick={() => handleItemClick('/')}
      >
        Home
      </Menu.Item>

      <Menu.Item
        name="findquestion"
        onClick={() => handleItemClick('/findquestion')}
      >
        Find Question
      </Menu.Item>

      <Menu.Item
        name="newpost"
        onClick={() => handleItemClick('/newpost')}
      >
        New Post
      </Menu.Item>
    </Menu>
  );
};

export default Navigate;
