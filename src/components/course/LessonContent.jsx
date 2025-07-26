import { Card, Text } from '@shopify/polaris'
import { motion } from 'framer-motion'
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
  
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {content.theory && (
          <motion.div variants={fadeInVariants}>
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  📚 Théorie
                </Text>
                <div className="lesson-theory">
                  <ReactMarkdown
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <SyntaxHighlighter
                              style={tomorrow}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          </motion.div>
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
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            style={{
                              borderLeft: '4px solid #00a96e',
                              paddingLeft: '1rem',
                              margin: '1rem 0',
                              backgroundColor: '#f8fffe',
                              padding: '1rem'
                            }}
                          >
                            {children}
                          </motion.div>
                        )
                      }
                    }}
                  >
                    {content.theory}
                  </ReactMarkdown>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {content.codeExample && (
          <motion.div variants={fadeInVariants}>
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  💻 Exemple de Code
                </Text>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
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
                </motion.div>
              </div>
            </Card>
          </motion.div>
        )}

        {content.interactive && (
          <motion.div variants={fadeInVariants}>
            <Card>
              <div style={{ padding: '1.5rem' }}>
                <Text variant="headingMd" as="h3" style={{ marginBottom: '1rem' }}>
                  🎮 Démo Interactive
                </Text>
                <InteractiveDemo interactive={content.interactive} />
              </div>
            </Card>
          </motion.div>
        )}

        {lesson.type === 'practical' && !content.interactive && (
          <motion.div variants={fadeInVariants}>
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
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default LessonContent