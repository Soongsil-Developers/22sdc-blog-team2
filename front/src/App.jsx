import { Route, Routes } from 'react-router-dom';
import Article from './components/Article';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route>
        <Route path="/" element={<Article />} />
      </Route>
      <Route path="/" element={<Footer />} />
    </Routes>
  );
}

export default App;
