import Post from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  console.log("posts", posts);
  return (
    <div className="posts">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
};

export default Posts;
