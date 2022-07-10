import React from "react";
import postList from "../posts.json";
import PostCard from "./postCard";

const PostList = () => {
  const excerptList = postList.map((post) => {
    return post.content.split(" ").slice(0, 20).join(" ");
  });
  return (
    <div className="postList">
      <h1>All Posts</h1>
      {postList.map((item, i) => (
        <PostCard
          key={item.id}
          id={item.id}
          title={item.title}
          author={item.author}
          date={item.date}
          content={excerptList[i]}
        />
      ))}
    </div>
  );
};

export default PostList;
