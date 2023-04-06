import Markdown from 'react-markdown';
import RemarkGfm from 'remark-gfm';
import React, { Fragment } from 'react';

const Detail = () => {
  return (
    <Fragment>
        <h1>Post Content</h1>
        <h1>Title</h1>
        <div>labels</div>
        <div>Date published</div>
        <Markdown remarkPlugins={[RemarkGfm]}>
            This is the content of markdown
        </Markdown>
    </Fragment>
  )
}

export default Detail;