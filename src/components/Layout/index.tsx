import React from 'react';
import Editor from '../Editor';
import Preview from '../Preview';
import { useMarkdown } from '../../hooks/useMarkdown';
import { FileText, Eye, Github, Coffee } from 'lucide-react';

const Layout: React.FC = () => {
  const { markdown, updateMarkdown } = useMarkdown();

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">Markdown Previewer</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/SnehPatel21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
              >
                <Coffee className="w-4 h-4" />
                <span>Buy me a coffee</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="flex border-b border-slate-200">
            <div className="w-1/2 p-3 border-r border-slate-200 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Editor</span>
            </div>
            <div className="w-1/2 p-3 flex items-center space-x-2">
              <Eye className="w-4 h-4 text-slate-500" />
              <span className="text-sm font-medium text-slate-700">Preview</span>
            </div>
          </div>
          <div className="flex h-[calc(100vh-12rem)]">
            <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
            <Preview markdown={markdown} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;