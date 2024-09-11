'use client'

import React, { useState } from 'react';

const NewEntryForm: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement saving the new entry
    console.log('New entry:', content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">新しいエントリーを追加</h2>
      <textarea
        className="w-full p-2 border rounded-md"
        rows={4}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="今日の出来事を書いてください..."
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        保存
      </button>
    </form>
  );
};

export default NewEntryForm;