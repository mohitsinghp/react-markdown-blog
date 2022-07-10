import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const PostCard = ({ title, author, date, content, id }) => {
  return (
    <div className="postCard">
      <Link to={`/post/${id}`}>
        <span className="postCard_header">{title}</span>
      </Link>
      <div className="postCard_subHeader">
        <span>{author}</span>
        <span>{date}</span>
      </div>
      <hr />
      <ReactMarkdown children={content} skipHtml={false} />
    </div>
  );
};

export default PostCard;
