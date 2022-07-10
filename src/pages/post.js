import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import postList from "../posts.json";
import ReactMarkdown from "react-markdown";

const Post = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const validId = parseInt(id);
  const [fetchedPost, setFetchedPost] = useState({});
  let postExists = false;

  useEffect(() => {
    if (!validId) {
      navigate("/post/404", { replace: true });
    }
    return postList.forEach((post, i) => {
      if (validId === post.id) {
        postExists = true;
        setFetchedPost({
          title: post.title ? post.title : "",
          date: post.date ? post.date : "",
          author: post.author ? post.author : "",
          content: post.content ? post.content : "",
        });
      }
    });
  }, []);

  useEffect(() => {
    if (validId) {
      if (!postExists) {
        navigate("/post/404", { replace: true });
      }
    }
  }, [postExists]);
  console.log(postExists);

  return (
    <Layout>
      <h1>{fetchedPost.title}</h1>
      <small>
        Published by <em>{fetchedPost.author}</em> on{" "}
        <em>{fetchedPost.date}</em>
      </small>
      <hr />
      <ReactMarkdown children={fetchedPost.content} skipHtml={false} />
      <Outlet />
    </Layout>
  );
};

export default Post;
