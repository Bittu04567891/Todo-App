import { Post } from "../post/Post";
import { Context } from "../../context/Context";
import "./posts.css";
import { useContext } from "react";
import Header from "../header/Header";

const Posts = ({ posts }) => {
  const { user } = useContext(Context);
  if (!user || !user.username) {
    return (
      <div className="posts">
        <Header />
      </div>
    );
  }
  const userPosts = posts.filter((post) => post.username === user.username);
  let i = 0;
  return (
    <span className="postname">
      <h1>Welcome</h1>
      {user.username}

      <div className="posts">
        {userPosts?.map((p) => (
          <Post post={p} index={i++} />
        ))}
      </div>
    </span>
  );
};

export default Posts;
