// import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Quill.scss';

export type Props = {
  body: string | undefined
}

export const Quill: React.FC<Props> = ({ body } : Props) => {
  // const [value, setValue] = useState(body);

  return (
    <ReactQuill
      theme="snow"
      value={body}
      // onChange={setValue}
      />
  );
}