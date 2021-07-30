import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { InputGroup, FormControl, Button, Form, Col } from 'react-bootstrap'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getBooks } from '../src/BookService'

const SearchHeader = styled.div`
  margin-top: 4px;
`

function SearchBar(props) {
  const [search, setSearch] = useState('')

  const history = useHistory()

  function newBook() {
    history.push('/books/news')
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    const books = getBooks()
    const results = books.filter(
      book => book.title.toLowerCase().indexOf(search) !== -1
    )
    props.setBooks(results)
  }

  function handleSearchChange(event) {
    setSearch(event.target.value.toLowerCase())
  }
  return (
    <SearchHeader>
      <Form onSubmit={handleOnSubmit}>
        <Form.Row>
          <Col className="col-xl-3">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Digite o título completo do livro que deseja"
                aria-label="Digite o título completo do livro que deseja"
                onChange={handleSearchChange}
              />
              <InputGroup.Append>
                <Button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col className="col-xl-2">
            <Form.Group controlId="order">
              <Form.Control as="select">
                <option>Lançamentos</option>
                <option>Novos</option>
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" className="float-right" onClick={newBook}>
              Novo Livro
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </SearchHeader>
  )
}

export default SearchBar
