type PostProps = {
  posts: {
    id: number;
    body: string;
    likes: number;
    dislikes: number;
  }[];

  onClickLike: (id: number) => void;
  onClickDislike: (id: number) => void;
};

const PostList = (props: PostProps) => {
  const { posts, onClickLike, onClickDislike } = props;

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.body}</p>
          <button onClick={() => onClickLike(post.id)}>
            Лайк {post.likes}
          </button>
          <button onClick={() => onClickDislike(post.id)}>
            Дизлайк {post.dislikes}
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
