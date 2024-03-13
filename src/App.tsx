import Card from "./components/card";
import Box from "./components/box";
import Layout from "./components/layout";
import { data } from "./data/printers";
import { CardDataType } from "./types/global";

import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <h1>Creality</h1>
        <div className="cart">
          <p>CART:{count}</p>
        </div>
        <Box>
          {data.printers.map((printer: CardDataType) => {
            return (
              <>
                <Card data={printer}>
                  <button onClick={() => setCount(count + 1)}>
                    Add to cart
                  </button>
                </Card>
              </>
            );
          })}
        </Box>
      </Layout>
    </>
  );
};

export default App;
