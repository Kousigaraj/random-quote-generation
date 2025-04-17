import './App.css';
import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
  const [quoteList, setQuoteList] = useState([]);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/quotes')
      .then((data) => data.json())
      .then((res) => {
        setQuoteList(res.quotes);
        setQuote(res.quotes[0].quote);
        setAuthor(res.quotes[0].author);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    if (quoteList.length > 0) {
      const randomIndex = Math.floor(Math.random() * quoteList.length);
      setQuote(quoteList[randomIndex].quote);
      setAuthor(quoteList[randomIndex].author);
    }
  };

  return (
    <div className='container'>
      <div className='quote'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className='quote-text'>"{quote}"</p>
            <p className='author-text'>- {author}</p>
            <Button content={"New Quote"} handleClick={handleClick} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
