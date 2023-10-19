import "./App.css";

// API: https://dummyjson.com/quotes
// returns: {
//   quotes: Array<{id: number, quote: string, author:string}>,
//   total: number,
//   skip: number,
//   limit: number
// }

function Quote(props) {
  return (
    <div className="quote">
      <p>{props.quote}</p>
      <b>{props.author}</b>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Quote quote="It works on my machine." author="~ the IT guy" />
    </div>
  );
}

export default App;
