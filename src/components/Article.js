import styles from "./Article.module.css";

function Article({ title, body, createdAt }) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{body}</p>
      <p className={styles.dateCreated}>{createdAt.toString()}</p>
    </div>
  );
}

export default Article;
