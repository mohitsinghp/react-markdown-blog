import React from "react";
import Layout from "../components/layout";
import PostList from "../components/postList";

const Home = () => {
  return (
    <>
      <Layout>
        <PostList />
      </Layout>
    </>
  );
};

export default Home;
