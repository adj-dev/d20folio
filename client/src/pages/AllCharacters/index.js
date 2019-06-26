import React, { Component } from 'react'
import { Col, Row, Container, Jumbotron } from 'reactstrap'
import API from '../../utils/API'
import CharacterCard from '../../components/CharacterCard';

export default class AllCharacters extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    this.getAllCharacters();
  }

  getAllCharacters = async () => {
    this.setState({ characters: await API.getAll() })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron>
              <h1>Welcome to D20Folio</h1>
              <p>Here are all the characters</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {
              this.state.characters.map((character, id) => <CharacterCard character={character} key={id} />)
            }
          </Col>
        </Row>
      </Container>
    )
  }
}
