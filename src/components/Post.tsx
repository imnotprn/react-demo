import { useState } from "react";
import { PostDTO } from "../types/dto";
import classes from "./Post.module.css";

interface IPostProps {
  post: PostDTO;
}

const Post = ({ post }: IPostProps) => {
  const [changeButton, setChangeButton] = useState<boolean>(false);

  const toggleShow = () => {
    setChangeButton(!changeButton);
  };

  return (
    <div className={classes.post}>
      <p>id: {post.id}</p>
      <p>postedBy: {post.userId}</p>
      <p>title: {post.title}</p>
      <p>body: {post.body}</p>
      {changeButton && <p>more post info...</p>}
      <button onClick={toggleShow}>
        {changeButton ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};
export default Post;
