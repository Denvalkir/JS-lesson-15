/**
 * - Поле ввода Статья
 * - Список статей
 * - Комментарий к статье
 * - Лайк
 * - Дизлайк
 */

import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

type Post = {
  body: string;
  comments: string[];
  likes: number;
  id: number;
  dislikes: number;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const handleAddPost = (value: string) => {
    setPosts(() => [
      ...posts,
      {
        id: Date.now(),
        body: value,
        comments: [],
        likes: 0,
        dislikes: 0,
      },
    ]);
  };

  const handleAddLike = (id: number) => {
    setPosts(() => {
      return posts.map((post) => {
        if (post.id === id) {
          post.likes += 1;
        }

        return post;
      });
    });
  };

  const handleAddDislike = (id: number) => {
    setPosts(() => {
      return posts.map((post) => {
        if (post.id === id) {
          post.dislikes += 1;
        }
        return post;
      });
    });
  };

  return (
    <div>
      <PostForm onSubmit={handleAddPost} />
      <PostList
        posts={posts}
        onClickLike={handleAddLike}
        onClickDislike={handleAddDislike}
      />
    </div>
  );
}

export default App;
