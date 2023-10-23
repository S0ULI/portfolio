import Link from 'next/link';
import React from 'react';

const Btn = ({ link, title }) => {
  return (
    <Link href={link} className="btn">
      {title}
    </Link>
  );
};

export default Btn;
