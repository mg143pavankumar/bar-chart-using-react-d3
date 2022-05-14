import React from "react";
import { testData } from "./data/testData";
import Bar from "./component/Bar";

const App = () => {
  return (
    <div>
      <Bar
        data={testData}
        width={540}
        height={440}
        top={20}
        bottom={50}
        left={30}
        right={0}
      />
    </div>
  );
};

export default App;
