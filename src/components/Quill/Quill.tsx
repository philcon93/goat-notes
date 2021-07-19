import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Quill.scss';
import { useDebounce } from '../../hooks';

export type Props = {
  body: string | undefined,
  updateDB: (value: string | undefined, field: 'title' | 'body') => void
}

export const Quill: React.FC<Props> = ({ body, updateDB } : Props) => {
  const [value, setValue] = useState(body);
  const deboucedValue = useDebounce(value);

  useEffect(() => {
    setValue(body);
  }, [body]);

  useEffect(() => {
    if (deboucedValue !== body) {
      updateDB(value, 'body');
    }
  }, [deboucedValue]);

  return (
    <ReactQuill
      theme='snow'
      value={value}
      onChange={val => setValue(val)}
      />
  );
}