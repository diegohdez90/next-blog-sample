import Markdown from 'react-markdown';
import RemarkGfm from 'remark-gfm';
import React from 'react';
import classes from './../../../styles/bulma.module.sass';

const Detail = (props) => {
  const { post } = props;
  const {
    _id,
    imageURL,
    content,
    date,
    tags,
    publisher: [creator]
  } = post;

  console.log(content)

  return (
    <div className={classes.content}>
      <Markdown
        remarkPlugins={[RemarkGfm]}
        components={{
          h1: (props) => <h1 className={classes.title}  {...props} />,
          table: (props) => <table className={`${classes.table} ${classes['is-striped']}}`} {...props} />,
        }}
      >
          {content}
      </Markdown>
    </div>
  )
}

export default Detail;