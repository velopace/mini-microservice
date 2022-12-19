import { useState } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://posts.com/posts', { title });

    setTitle('');
  };

  return (
    <form className="row g-3" onSubmit={onSubmit}>
      <div className="col-12">
        <label>Title</label>
        <input
          value={title}
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-12">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};
