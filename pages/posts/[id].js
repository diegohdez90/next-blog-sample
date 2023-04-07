import classes from '../../styles/bulma.module.sass';
import PostDetail from "../../components/Blog/Detail";
import NotificationContext from '../../store/notification';
import { useContext, useEffect, useState } from 'react';
import MarkdownIt from 'markdown-it';
import Head from 'next/head';


const PostId = (props) => {
    const md = new MarkdownIt();
    const { post } = props;

    const context = useContext(NotificationContext);

    const [title, setTitle] = useState('');
    
    useEffect(() => {
  
      const postParsed = md.parse(post.content)
      const [ firstTag, postTitle ] = postParsed;
      
      if (firstTag.type === 'heading_open') {
        setTitle(postTitle.content);
      }
    },)

    const onSubmitComment = (fullName, email, comments) => {
      fetch(`/api/entries/${post._id}/comments`, {
        method: 'POST',
        body: JSON.stringify({
          fullName,
          email,
          comments
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          context.show({
            message: data.message,
            status: 'success'
          });
        })
        .catch(err => {
          context.show({
            message: err.toString() || 'Something went wrong in send your comments',
            status: 'error'
          })
        })
    }
    return (
    <div className={classes.section}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={classes.container}>
        <PostDetail post={post} onSubmit={onSubmitComment} />
      </div>
    </div>);
}

export async function getServerSideProps(ctx){

    const { params } = ctx;
    const { id } = params;
    const res = await fetch(`http://localhost:3000/api/entries/${id}`);
    const data = await res.json();
  
    return {
      props:{
        post: data.entry || []
      }
    }
  }

export default PostId;
