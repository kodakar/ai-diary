import React from 'react';
import DiaryEntryList from '../components/DiaryEntryList';
import NewEntryForm from '../components/NewEntryForm';
import Auth from '@/components/Auth';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Diary</h1>
      <Auth />
      <NewEntryForm />
      <DiaryEntryList />
    </main>
  )
}