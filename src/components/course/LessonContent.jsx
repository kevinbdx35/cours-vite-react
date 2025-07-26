import { Card, Text } from '@shopify/polaris'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import InteractiveDemo from './InteractiveDemo'

function LessonContent({ lesson }) {
  if (!lesson || !lesson.content) {
    return (
      <Card>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Text variant="bodyMd">Aucun contenu disponible pour cette leçon.</Text>
        </div>
      </Card>
    )
  }

  const { content } = lesson
  

  return (
    <div className="fade-in">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {content.theory && (
          <div className="slide-in-bottom">
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  📚 Théorie
                </Text>
                <div className="lesson-theory">
                  <ReactMarkdown
                    components={{
                      code({ inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <div className="scale-in" style={{ animationDelay: '0.2s' }}>
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <code {...props}>
                            {children}
                          </code>
                        )
                      },
                      table({ children }) {
                        return (
                          <div style={{ overflow: 'auto', margin: '1rem 0' }}>
                            <table style={{ 
                              width: '100%', 
                              borderCollapse: 'collapse',
                              border: '1px solid #e1e5e9'
                            }}>
                              {children}
                            </table>
                          </div>
                        )
                      },
                      th({ children }) {
                        return (
                          <th style={{ 
                            padding: '0.75rem', 
                            backgroundColor: '#f6f8fa',
                            border: '1px solid #e1e5e9',
                            textAlign: 'left',
                            fontWeight: 'bold'
                          }}>
                            {children}
                          </th>
                        )
                      },
                      td({ children }) {
                        return (
                          <td style={{ 
                            padding: '0.75rem', 
                            border: '1px solid #e1e5e9'
                          }}>
                            {children}
                          </td>
                        )
                      },
                      blockquote({ children }) {
                        return (
                          <div
                            className="slide-in-left"
                            style={{
                              borderLeft: '4px solid #00a96e',
                              paddingLeft: '1rem',
                              margin: '1rem 0',
                              backgroundColor: '#f8fffe',
                              padding: '1rem',
                              animationDelay: '0.3s'
                            }}
                          >
                            {children}
                          </div>
                        )
                      }
                    }}
                  >
                    {content.theory}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </div>
        )}

        {content.codeExample && (
          <div className="slide-in-bottom">
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  💻 Exemple de Code
                </Text>
                <div className="scale-in" style={{ animationDelay: '0.1s' }}>
                  <SyntaxHighlighter
                    language="javascript"
                    style={tomorrow}
                    customStyle={{
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}
                  >
                    {content.codeExample}
                  </SyntaxHighlighter>
                </div>
              </div>
            </Card>
          </div>
        )}

        {content.interactive && (
          <div className="slide-in-bottom">
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  🎮 Démo Interactive
                </Text>
                <InteractiveDemo interactive={content.interactive} />
              </div>
            </Card>
          </div>
        )}

        {lesson.type === 'practical' && !content.interactive && (
          <div className="slide-in-bottom">
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  🛠️ Exercice Pratique
                </Text>
                <Text variant="bodyMd" color="subdued">
                  Essayez d'implémenter les concepts de cette leçon dans votre propre éditeur de code.
                  Expérimentez avec les exemples et créez vos propres variations !
                </Text>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}

export default LessonContent