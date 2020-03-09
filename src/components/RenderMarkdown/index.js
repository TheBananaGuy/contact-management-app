import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const RenderMarkdown = ({ markdown }) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const getMarkdown = async () => {
      await fetch(markdown)
        .then(r => r.text())
        .then(text => {
          setData(text);
        });
    };

    getMarkdown(markdown);
  }, [markdown, setData]);

  return <ReactMarkdown source={data} />;
};

RenderMarkdown.propTypes = {
  markdown: PropTypes.any,
};

export default RenderMarkdown;
