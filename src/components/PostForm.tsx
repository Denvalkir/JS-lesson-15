import { useState } from "react";

type PostFormProps = {
  onSubmit: (value: string) => void;
};

const PostForm = (props: PostFormProps) => {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
        setValue("");
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Название статьи"
      />
    </form>
  );
};

export default PostForm;
