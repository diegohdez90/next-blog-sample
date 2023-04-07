import { Fragment } from "react";
import PostsList from "../../components/Blog/List";

const Posts = (props) => {
    const { posts } = props;
    return (<Fragment>
        <PostsList posts={posts} />
    </Fragment>);
}

export async function getServerSideProps(ctx){
    const res = await fetch('http://localhost:3000/api/entries');
    const data = await res.json();
  
    return {
      props:{
        posts: data.entries || []
      }
    }
  }
export default Posts;
