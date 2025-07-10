import React from 'react';

export const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.08)_1px,transparent_1px)] bg-[size:50px_50px] dark:bg-[linear-gradient(rgba(249,115,22,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.1)_1px,transparent_1px)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/80 dark:from-slate-900/80 dark:via-transparent dark:to-slate-900/80" />
    </div>
  );
};