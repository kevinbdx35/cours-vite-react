import { useState } from 'react'
import { Card, Text, Button, TextField, Banner } from '@shopify/polaris'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'

function InteractiveDemo({ interactive }) {
  const [terminalOutput, setTerminalOutput] = useState('')

  if (!interactive) {
    return (
      <Text variant="bodyMd" color="subdued">
        No interactive content available for this lesson.
      </Text>
    )
  }

  const renderFileExplorer = () => {
    const FileItem = ({ file, level = 0 }) => (
      <div
        className="fade-in"
        style={{
          marginLeft: `${level * 20}px`,
          padding: '4px 8px',
          cursor: file.type === 'file' ? 'pointer' : 'default',
          animationDelay: `${level * 0.1}s`
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <span>{file.type === 'folder' ? '📁' : '📄'}</span>
          <Text variant="bodySm" fontWeight={file.type === 'folder' ? 'semibold' : 'regular'}>
            {file.name}
          </Text>
        </div>
        {file.children && file.children.map((child, index) => (
          <FileItem key={index} file={child} level={level + 1} />
        ))}
      </div>
    )

    return (
      <Card>
        <div style={{ padding: '1rem', backgroundColor: '#f8f9fa', minHeight: '200px' }}>
          <Text variant="bodyMd" fontWeight="semibold" style={{ marginBottom: '1rem' }}>
            📂 Project Structure Explorer
          </Text>
          {interactive.files?.map((file, index) => (
            <FileItem key={index} file={file} />
          ))}
        </div>
      </Card>
    )
  }

  const RenderCodeEditor = () => {
    const [code, setCode] = useState(interactive.initialCode || '')
    const [showSolution, setShowSolution] = useState(false)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <div style={{ padding: '1rem' }}>
            <Text variant="bodyMd" fontWeight="semibold" style={{ marginBottom: '1rem' }}>
              💻 Code Editor
            </Text>
            <TextField
              label="Your Code"
              value={code}
              onChange={setCode}
              multiline={6}
              helpText="Try modifying the code and see what happens!"
            />
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button 
                  onClick={() => setShowSolution(!showSolution)}
                  size="slim"
                >
                  {showSolution ? 'Hide' : 'Show'} Solution
                </Button>
                <Button 
                  primary 
                  onClick={() => {
                    setTerminalOutput('Code executed successfully! ✅')
                    setTimeout(() => setTerminalOutput(''), 3000)
                  }}
                  size="slim"
                >
                  Run Code
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {showSolution && interactive.solution && (
          <div className="slide-in-bottom">
            <Card>
              <div style={{ padding: '1rem' }}>
                <Text variant="bodyMd" fontWeight="semibold" style={{ marginBottom: '1rem' }}>
                  ✅ Solution
                </Text>
                <SyntaxHighlighter
                  language="javascript"
                  style={tomorrow}
                  customStyle={{ borderRadius: '8px', fontSize: '14px' }}
                >
                  {interactive.solution}
                </SyntaxHighlighter>
              </div>
            </Card>
          </div>
        )}

        {terminalOutput && (
          <div className="slide-in-bottom">
            <Banner status="success">
              {terminalOutput}
            </Banner>
          </div>
        )}
      </div>
    )
  }

  const RenderTerminalSimulator = () => {
    const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
    const commands = interactive.commands || []

    return (
      <Card>
        <div style={{ 
          padding: '1rem', 
          backgroundColor: '#1e1e1e', 
          color: '#ffffff',
          fontFamily: 'monospace',
          borderRadius: '8px',
          minHeight: '200px'
        }}>
          <Text variant="bodyMd" fontWeight="semibold" style={{ color: '#ffffff', marginBottom: '1rem' }}>
            💻 Terminal Simulator
          </Text>
          
          {commands.slice(0, currentCommandIndex + 1).map((cmd, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ 
                marginBottom: '0.5rem',
                animationDelay: `${index * 0.5}s`
              }}
            >
              <div style={{ color: '#00ff00' }}>$ {cmd.command}</div>
              <div style={{ color: '#cccccc', marginLeft: '1rem' }}>{cmd.output}</div>
            </div>
          ))}

          {currentCommandIndex < commands.length - 1 && (
            <div className="fade-in" style={{ animationDelay: '1s' }}>
              <Button
                size="slim"
                onClick={() => setCurrentCommandIndex(prev => prev + 1)}
              >
                Run Next Command
              </Button>
            </div>
          )}
        </div>
      </Card>
    )
  }

  const RenderComponentBuilder = () => {
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Card>
          <div style={{ padding: '1rem' }}>
            <Text variant="bodyMd" fontWeight="semibold" style={{ marginBottom: '1rem' }}>
              🧩 Component Builder
            </Text>
            <Text variant="bodyMd" color="subdued" style={{ marginBottom: '1rem' }}>
              {interactive.task}
            </Text>
            
            {interactive.template && (
              <SyntaxHighlighter
                language="javascript"
                style={tomorrow}
                customStyle={{ borderRadius: '8px', fontSize: '14px' }}
              >
                {interactive.template}
              </SyntaxHighlighter>
            )}
            
            <div style={{ marginTop: '1rem' }}>
              <Button primary>
                Build Component
              </Button>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const renderDemo = () => {
    switch (interactive.type) {
      case 'file-explorer':
        return renderFileExplorer()
      case 'code-editor':
        return <RenderCodeEditor />
      case 'terminal-simulator':
        return <RenderTerminalSimulator />
      case 'component-builder':
        return <RenderComponentBuilder />
      default:
        return (
          <Card>
            <div style={{ padding: '1rem', textAlign: 'center' }}>
              <Text variant="bodyMd" color="subdued">
                Interactive demo type "{interactive.type}" not yet implemented.
              </Text>
            </div>
          </Card>
        )
    }
  }

  return (
    <div className="scale-in">
      {renderDemo()}
    </div>
  )
}

export default InteractiveDemo