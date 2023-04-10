import { Fragment } from "react";
import PostsList from "../../components/Blog/List";

const Posts = (props) => {
    const { posts } = props;
    return (<Fragment>
        <PostsList posts={posts} />
    </Fragment>);
}

export async function getServerSideProps(ctx){
    const res = await fetch(`${process.env.REST_API_DOMAIN}/api/entries`);
    const data = await res.json();
  
    return {
      props:{
        posts: data.entries || []
      }
    }
  }
export default Posts;
