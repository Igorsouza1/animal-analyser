import React from 'react';

import { redirect } from 'next/navigation'

const HomePage = () => {
  return (
    <div>
      {redirect('/iaAnalyser')}
    </div>
  );
};

export default HomePage;