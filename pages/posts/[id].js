import classes from '../../styles/bulma.module.sass';

import PostDetail from "../../components/Blog/Detail";

const PostId = (props) => {
    const { post } = props;

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
      });
    }
    return (
    <div className={classes.section}>
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
