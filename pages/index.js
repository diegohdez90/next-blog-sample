import PostList from "../components/Blog/List";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <div>
      <Hero />
      <PostList featured={true} />
    </div>
  )
}
