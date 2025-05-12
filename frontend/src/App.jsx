import { useState ,useEffect } from 'react'

import "prismjs/themes//prism-tomorrow.min.css"
import Editor from 'react-simple-code-editor'
import prism from 'prismjs'
import axios from'axios'
import Markdown  from 'react-markdown'
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const[code,setCode] = useState(`function sum(){
    return 1 + 1
  }`)
  useState

  const[review , setReview] = useState('')
  useEffect(() => {
    prism.highlightAll();
  }, []);


 async  function reviewcode(){
     const response = await axios.post('http://localhost:3000/ai/get-response',{code})
     console.log(response.data);
      setReview(response.data)
     

  }
  return (
    <>
    
   <main>
 <div className="left">
  <div className="code">
    <Editor
      value={code}
      onValueChange={code => setCode(code)}
      highlight={code => prism.highlight(code, prism.languages.js, 'js')}
      padding={10}
      style={{
      fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
      }}
    />
    
  </div>
  <div className="button" onClick={reviewcode}> Review</div>
  
  </div>
 <div className="right">
  <Markdown
  
            rehypePlugins={[ rehypeHighlight ]}
  
  >{review}</Markdown>
 </div>

   </main>
    </>
  )
}



export default App
