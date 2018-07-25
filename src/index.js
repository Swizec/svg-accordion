import React from "react";
import { render } from "react-dom";
import { range as d3range } from "d3";
import faker from "faker";
import { Circle, Rectangle, Triangle } from "./icons";
import AccordionFlow from "./AccordionFlow";
import { Content, DynamicContent } from "./Content";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const icons = [<Circle />, <Rectangle />, <Triangle />],
  flowData = d3range(10).map(i => [
    icons[i % 3],
    contentUpdated => (
      <DynamicContent title={`Row ${i}`} contentUpdated={contentUpdated}>
        {d3range(10)
          .slice(0, i)
          .map(() => faker.lorem.paragraph())}
      </DynamicContent>
    )
  ]);

const App = () => (
  <div style={styles}>
    <h2>Click on the icons to see something cool 😎</h2>
    <h3>This whole UI 👇 is one big SVG element.</h3>
    <p>
      Text layouting works, dynamic content updates are supported, no need to
      know dimensions in advance. API is completely declarative.
    </p>
    <svg width="600" height="2240">
      <AccordionFlow data={flowData} />
    </svg>
  </div>
);

render(<App />, document.getElementById("root"));
