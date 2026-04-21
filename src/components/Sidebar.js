import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { id: 1, name: 'React', path: '/react' },
    { id: 2, name: 'React Native', path: '/react-native' },
    { id: 3, name: 'HTML', path: '/html' },
    { id: 4, name: 'CSS', path: '/css' },
    { id: 5, name: 'Redux', path: '/redux' },
    { id: 6, name: 'JavaScript', path: '/javascript' },
    { id: 7, name: 'Node', path: '/node' },
    { id: 8, name: 'MongoDB', path: '/mongodb' },
    { id: 9, name: 'Python', path: '/python' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Developer</h2>
        <button 
          className="toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link 
                to={item.path}
                className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">📚</span>
                <span className="nav-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
