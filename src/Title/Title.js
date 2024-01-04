import { useEffect } from 'react';

const UseTitle = title => {
  useEffect(() => {
    document.title = `Toy House  ${title}`;
  }, [title]);
};

export default UseTitle;
