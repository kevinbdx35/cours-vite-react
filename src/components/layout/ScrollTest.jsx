import { Card, Text, Button } from '@shopify/polaris'

function ScrollTest() {
  const testItems = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Élément de test ${i + 1}`,
    content: `Ceci est le contenu de l'élément ${i + 1}. Ce contenu est suffisamment long pour tester le scroll vertical de la page. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  }))

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <Text variant="headingLg" as="h1" style={{ marginBottom: '2rem' }}>
        Test de Scroll
      </Text>
      
      <Text variant="bodyMd" style={{ marginBottom: '2rem' }}>
        Cette page contient beaucoup de contenu pour tester que le scroll vertical fonctionne correctement dans tous les layouts.
      </Text>

      {testItems.map((item) => (
        <div
          key={item.id}
          className="scroll-test-item"
          style={{ marginBottom: '1rem' }}
        >
          <Card>
            <div style={{ padding: '1.5rem' }}>
              <Text variant="headingMd" style={{ marginBottom: '0.5rem' }}>
                {item.title}
              </Text>
              <Text variant="bodyMd" style={{ marginBottom: '1rem' }}>
                {item.content}
              </Text>
              <Button>Action {item.id}</Button>
            </div>
          </Card>
        </div>
      ))}

      <Card>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Text variant="headingMd" style={{ marginBottom: '1rem' }}>
            🎉 Fin du contenu de test
          </Text>
          <Text variant="bodyMd">
            Si vous voyez ce message, le scroll fonctionne parfaitement !
          </Text>
        </div>
      </Card>
      
      {/* Espaceur pour tester le scroll jusqu'en bas */}
      <div style={{ height: '50vh' }} />
    </div>
  )
}

export default ScrollTest