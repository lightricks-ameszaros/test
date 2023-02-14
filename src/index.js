import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import data from "./apple.json";

import { Table } from "rsuite";

const { Column, HeaderCell, Cell } = Table;
// const data = mockUsers(1000);

const App = () => {
  return (
    <Table virtualized height={400} data={{ children: data }}>
      <Column width={70} align="center" fixed>
        <HeaderCell>Id</HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130}>
        <HeaderCell>Name</HeaderCell>
        <Cell dataKey="name" />
      </Column>
    </Table>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
