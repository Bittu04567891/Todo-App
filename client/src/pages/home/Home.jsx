import { useEffect, useState } from "react";

import Posts from "../../components/posts/Posts";

import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <div className="home">
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
