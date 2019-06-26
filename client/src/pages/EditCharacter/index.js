import React, { Component } from 'react'
import { Input, Button, Form, Jumbotron, FormGroup, Label, Col, Row, Container } from 'reactstrap'
import API from '../../utils/API';

export default class EditCharacter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      imageUrl: '',
      STR: '10',
      DEX: '10',
      CON: '10',
      INT: '10',
      WIS: '10',
      CHA: '10'
    }
  }

  handleInput = field => event => {
    const { value } = event.target;
    this.setState({ [field]: value })
  }

  submitCharacterCreation = () => {
    const newChar = { ...this.state };
    API.createCharacter(newChar)
      .then(() => this.clearForm())
  }


  render() {
    return (
      this.props.new ?
        <Container>
          <Jumbotron>
            <h1>Create a new character</h1>
          </Jumbotron>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Character Name</Label>
                <Input
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput('name')}
                />
              </FormGroup>
              <FormGroup>
                <Label>Image URL</Label>
                <Input
                  name="image"
                  value={this.state.imageUrl}
                  onChange={this.handleInput('imageUrl')}
                />
              </FormGroup>
              <img src={this.state.imageUrl} alt="" />
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Strength</Label>
                <Input
                  name="strength"
                  value={this.state.STR}
                  onChange={this.handleInput('STR')}
                  min="3"
                  max="18"
                />
              </FormGroup>
              <FormGroup>
                <Label>Dexterity</Label>
                <Input
                  name="dexterity"
                  value={this.state.DEX}
                  onChange={this.handleInput('DEX')}
                  min="3"
                  max="18"
                />
              </FormGroup>
              <FormGroup>
                <Label>Constitution</Label>
                <Input
                  name="constitution"
                  value={this.state.CON}
                  onChange={this.handleInput('CON')}
                  min="3"
                  max="18"
                />
              </FormGroup>
              <FormGroup>
                <Label>Intelligence</Label>
                <Input
                  name="intelligence"
                  value={this.state.INT}
                  onChange={this.handleInput('INT')}
                  min="3"
                  max="18"
                />
              </FormGroup>
              <FormGroup>
                <Label>Wisdom</Label>
                <Input
                  name="wisdom"
                  value={this.state.WIS}
                  onChange={this.handleInput('WIS')}
                  min="3"
                  max="18"
                />
              </FormGroup>
              <FormGroup>
                <Label>Charisma</Label>
                <Input
                  name="charisma"
                  value={this.state.CHA}
                  onChange={this.handleInput('CHA')}
                  min="3"
                  max="18"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button onClick={this.submitCharacterCreation}>
                Create Character
              </Button>
            </Col>
          </Row>
        </Container>
        : null
    )
  }
}

