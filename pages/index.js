import { Fragment } from "react";
import PostList from "../components/Blog/List";
import Hero from "../components/Hero";


export default function Home(props) {
  
  return (
    <Fragment>
      <Hero />
      <PostList posts={props.posts} featured={true} />
    </Fragment>
  )
}

export async function getServerSideProps(ctx){


  const res = await fetch(`${process.env.REST_API_DOMAIN}/api/entries?featured=true`);
  const data = await res.json();
  console.log(data);

  return {
    props:{
      posts: data.entries || []
    }
  }
}
