import React from 'react';
import { useRouter } from 'next/router';

function About() {
  const router = useRouter();
  console.log(router.query.lang);
  return <div>About Works</div>;
}

export default About;
