import React from 'react';
import AdminLTE, { Sidebar, Content, Row, Col, Box, Button } from 'adminlte-2-react';

const ThemePage = ()=> {

  let sidebar = [
    <Item key="hello" text="Hello" to="/hello-world" />
  ];

    return (
      <AdminLTE title={["Hello", "World"]} titleShort={["He", "we"]} theme="blue" sidebar={sidebar}>
      <Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>
    </AdminLTE>
    )

};

export default ThemePage;