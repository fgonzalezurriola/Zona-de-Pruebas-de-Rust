import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-rust';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';

const defaultCode = `// Escribe tu código Rust aquí
fn main() {
    println!("Hello, Rust!");
}`;

const Playground: React.FC<{ selectedProblem: any }> = ({ selectedProblem }) => {
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedProblem) {
      setCode(selectedProblem.code);
    }
  }, [selectedProblem]);

  const runCode = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://play.rust-lang.org/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          channel: 'stable',
          mode: 'debug',
          edition: '2021',
          crateType: 'bin',
          tests: false,
          code: code,
        }),
      });
      const data = await response.json();
      setOutput(data.stdout || data.stderr || 'No output');
    } catch (error) {
      setOutput('Error: Failed to execute code');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl">
      <AceEditor
        mode="rust"
        theme="monokai"
        onChange={setCode}
        value={code}
        name="rust-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{ width: '100%', height: '300px' }}
        className="rounded-md shadow-sm"
      />
      <button
        className="mt-4 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 flex items-center justify-center"
        onClick={runCode}
        disabled={isLoading}
      >
        <Play className="mr-2" size={18} />
        {isLoading ? 'Running...' : 'Run Code'}
      </button>
      <pre className="mt-4 p-4 bg-gray-800 text-white rounded-md overflow-x-auto">
        <code>{output || 'Output will appear here'}</code>
      </pre>
    </div>
  );
};

export default Playground;