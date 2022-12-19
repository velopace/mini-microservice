import { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <div>
      <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-12">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
