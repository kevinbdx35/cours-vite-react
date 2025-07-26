import { Page, Card, Text } from '@shopify/polaris'

function HomePageSimple({ onNavigate }) {
  return (
    <Page title="Test Page">
      <Card>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Text variant="headingLg">Page de test simple</Text>
          <br /><br />
          <button 
            onClick={() => onNavigate('course')}
            style={{ 
              padding: '0.5rem 1rem', 
              backgroundColor: '#00a96e', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Aller aux cours
          </button>
        </div>
      </Card>
    </Page>
  )
}

export default HomePageSimple