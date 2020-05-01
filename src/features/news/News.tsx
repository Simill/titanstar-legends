import React from 'react';
import './news.scss';
import Button from '../shared/components/button/Button';

const News = () => (
  <div className="news">
    <div className="news__header">
      <span className="news__header-title">Important News Items</span>
      <div className="news__author-time">
        By{' '}
        <a href="#will" className="news__author-anchor">
          Will
        </a>{' '}
        at {getTime()}
      </div>
    </div>
    <div className="news__content-container">
      <div className="news__content">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
      <Button className="news__read-more-button" text="Read More" />
    </div>
  </div>
);

const getTime = () =>
  new Date().toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

export default News;
