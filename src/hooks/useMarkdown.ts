import { useState, useCallback } from 'react';

const DEFAULT_MARKDOWN = `# Welcome to Markdown Previewer!

Write your markdown here and see it rendered in real-time.

## Features
- **Bold** and *italic* text
- Lists and checkboxes
- [Links](https://example.com)
- Code blocks
- And much more!

### Code Example
\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

### Task List
- [x] Create markdown editor
- [x] Add preview pane
- [ ] Add more features

> This is a blockquote. It can span multiple lines and can contain *other* **Markdown** elements.
`;

export const useMarkdown = () => {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);

  const updateMarkdown = useCallback((newMarkdown: string) => {
    setMarkdown(newMarkdown);
  }, []);

  return {
    markdown,
    updateMarkdown,
  };
};