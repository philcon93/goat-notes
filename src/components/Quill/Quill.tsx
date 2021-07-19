import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Quill.scss';
import { useDebounce } from '../../hooks';

export type Props = {
  body: string | undefined,
  update: (value: string | undefined) => void
}

export const Quill: React.FC<Props> = ({ body, update } : Props) => {
  const [value, setValue] = useState(body);
  const deboucedValue = useDebounce(value)

  useEffect(() => {
    setValue(body);
  }, [body]);

  useEffect(() => {
    if (deboucedValue) {
      update(value);
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