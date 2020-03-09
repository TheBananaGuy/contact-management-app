import React from 'react';
import RenderMarkdown from 'components/RenderMarkdown';
import aboutMd from './About.md';
import { Jumbotron } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <Jumbotron>
        <h1>About this project</h1>
      </Jumbotron>
      <RenderMarkdown markdown={aboutMd} />
    </>
  );
};

export default About;
