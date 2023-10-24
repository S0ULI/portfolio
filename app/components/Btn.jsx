import Link from 'next/link';
import React from 'react';

const Btn = ({ href, title }) => {
  return (
    <Link href={href} className="btn">
      {title}
    </Link>
  );
};

export default Btn;
