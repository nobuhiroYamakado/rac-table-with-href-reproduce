'use client';

import { Cell, Column, Row, Table, TableBody, TableHeader } from 'react-aria-components';

export default function Home() {
  return (
    <Table>
      <TableHeader>
        <Column isRowHeader={true}>[col1]</Column>
        <Column>[col2]</Column>
      </TableHeader>
      <TableBody>
        <Row href={'http://localhost:3000'}>
          <Cell>[cell1]</Cell>
          <Cell>[cell2]</Cell>
        </Row>
        <Row href={'http://localhost:3000'}>
          <Cell>[cell1]</Cell>
          <Cell>[cell2]</Cell>
        </Row>
        <Row href={'http://localhost:3000'}>
          <Cell>[cell1]</Cell>
          <Cell>[cell2]</Cell>
        </Row>
        <Row href={'http://localhost:3000'}>
          <Cell>[cell1]</Cell>
          <Cell>[cell2]</Cell>
        </Row>
      </TableBody>
    </Table>
  );
}
