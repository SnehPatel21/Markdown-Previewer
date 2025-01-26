import React from 'react';

interface EditorProps {
  markdown: string;
  updateMarkdown: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ markdown, updateMarkdown }) => {
  return (
    <div className="w-1/2 h-full border-r border-slate-200">
      <textarea 
        value={markdown}
        onChange={(e) => updateMarkdown(e.target.value)}
        className="w-full h-full p-4 bg-white resize-none focus:outline-none font-mono text-sm"
        placeholder="# Welcome to Markdown Previewer!

Write your markdown here and see it rendered in real-time.

## Features
- **Bold** and *italic* text
- Lists and checkboxes
- [Links](https://example.com)
- Code blocks
- And much more!"
      />
    </div>
  );
};

export default Editor;