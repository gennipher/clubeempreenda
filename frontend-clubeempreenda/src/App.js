import React from "react";
import Router from "./routes/Routes";

const App = () => {
          const [data, setData] = React.useState(null);

          React.useEffect(() => {
                    fetch("/")
                    .then((res) => res.json())
                    .then((data) => setData(data.message));
          }, []);

          return (
                    <div className="App">
                              <Router />
                    </div>

          );
          
} 

export default App;
