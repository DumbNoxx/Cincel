import './App.css'
import { useRef, useEffect } from 'react'
import { Template } from './template/templateMarkdown';
import Markdown from 'react-markdown';
import { useState } from 'react';
import remarkGfm from 'remark-gfm'
import CodeBlock from './components/CodeBlock';
import { marked } from 'marked';

function App() {
  const textAreaRef = useRef(null);
  const previewRef = useRef(null);
  const [parseMark, setParseMark] = useState(Template)
  const [text, setText] = useState(Template)

  marked.setOptions({
    breaks: true,
  });
  const Parse = () => {
    if (textAreaRef.current && previewRef.current) {
      const parse =
        textAreaRef.current.value === ""
          ?
          Template
          :
          textAreaRef.current.value;
      const text = marked.parse(textAreaRef.current.value === ""
        ?
        Template
        :
        textAreaRef.current.value)
      previewRef.current.innerHTML = text
      setParseMark(parse);
    }
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    Parse()
  }, [parseMark])

  return (
    <>
      <div className='container'>
        <div>
          <textarea
            // onChange={Parse}
            onChange={handleChange}
            ref={textAreaRef}
            value={text}
            id="editor"
          ></textarea>
        </div>
        <div ref={previewRef}
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
          id="preview"></div>
        <Markdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}

          components={{
            code: CodeBlock,
          }}
        >{parseMark}</Markdown>
      </div >
    </>
  )
}

export default App
