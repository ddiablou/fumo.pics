import './App.css';
import { useEffect, useState } from 'react';
import { randomFumo } from 'fumo-api'
function App() {
  const [fumo, setFumo] = useState()
  useEffect(() => {
    async function fetchFumo() {
    randomFumo().then( (url) => {
      setFumo(url)
     })
    }
    fetchFumo()
  }, [])
  return (
    <>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', position: 'relative' }}>
       <img alt='fumofu' src={fumo} />
      </div>
    </>
  );
}

export default App;
