import './App.css'
import 'github-markdown-css/github-markdown.css';
import { useRef } from 'react'
import { Template } from './template/templateMarkdown';
import Markdown from 'react-markdown';
import { useState } from 'react';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import CodeBlock from './components/CodeBlock';

function App() {
  const textAreaRef = useRef(null);
  const [parseMark, setParseMark] = useState(Template)

  const Parse = () => {
    if (textAreaRef.current) {
      const parse =
        textAreaRef.current.value === ""
          ?
          Template
          :
          textAreaRef.current.value;
      setParseMark(parse);
    }
  }

  return (
    <>
      <main>
        <h1 className="title">Cincel</h1>
        <h2 className='title'>Shape your ideas. A fast, intuitive, and distraction-free real-time Markdown previewer. Write, preview, and export with pinpoint accuracy.</h2>
        <section className='container'>
          <div className="container-input">
            <div>
              <textarea
                onChange={Parse}
                ref={textAreaRef}
                placeholder={Template}
                id="editor"
              ></textarea>
            </div>
          </div>
          <div className='container-markdown'>
            <div className='markdown markdown-body'>
              <Markdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  code: CodeBlock,
                }}
              >{parseMark}</Markdown>
            </div>
          </div>
        </section>
        <footer>
          <p>
            © 2025 Dylan. MIT license
          </p>
          <p>
            Designed and developed with ♥
          </p>
        </footer>
      </main>
    </>
  )
}

export default App
