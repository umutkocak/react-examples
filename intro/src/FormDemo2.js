import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    alertify.success(`${this.state.email} added to db!`);
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="description">Text Area</Label>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input
                  type="select"
                  name="city"
                  id="city"
                  onChange={this.handleChange}
                >
                  <option>Ankara</option>
                  <option>İstanbul</option>
                  <option>İzmir</option>
                  <option>Çanakkale</option>
                  <option>Antalya</option>
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Button type="submit">Save</Button>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
