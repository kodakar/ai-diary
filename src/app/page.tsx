import React from 'react';
import DiaryEntryList from '../components/DiaryEntryList';
import NewEntryForm from '../components/NewEntryForm';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AI日記</h1>
      <NewEntryForm />
      <DiaryEntryList />
    </div>
  );
};

export default Home;