import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  return (
    <div className="w-1/2 h-full overflow-auto">
      <div className="p-4 prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {markdown || '# Preview will appear here'}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Preview;