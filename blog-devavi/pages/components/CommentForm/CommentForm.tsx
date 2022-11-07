import React from "react";
import styles from "./CommentForm.module.scss";

type Props = {};

const CommentForm = (props: Props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [comment, setComment] = React.useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(comment);
    setName("");
    setEmail("");
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <h3>Leave a Comment</h3>
      <div className={styles.commentInputs}>
        <input
          className={styles.commentInput}
          placeholder="Your name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.commentInput}
          placeholder="Your email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <textarea
        className={styles.commentText}
        placeholder="Your Comments"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type={"submit"} className={styles.commentBtn}>
        Post Commnent
      </button>
    </form>
  );
};
export default CommentForm;
