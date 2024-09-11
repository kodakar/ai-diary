import React from 'react';

interface DiaryEntry {
  id: string;
  date: string;
  content: string;
}

const DiaryEntryList: React.FC = () => {
  // TODO: Implement fetching diary entries from an API or state management
  const dummyEntries: DiaryEntry[] = [
    { id: '1', date: '2024-03-15', content: 'Today was a great day!' },
    { id: '2', date: '2024-03-14', content: 'I learned something new about AI.' },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">日記エントリー</h2>
      {dummyEntries.map((entry) => (
        <div key={entry.id} className="bg-white shadow rounded-lg p-4 mb-4">
          <p className="text-sm text-gray-500">{entry.date}</p>
          <p className="mt-2">{entry.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DiaryEntryList;