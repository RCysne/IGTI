import ListItem from '../src/ListItem'
import { Container } from 'react-bootstrap'
import { getBooks } from '../src/BookService'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../src/SearchBar'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    setBooks(getBooks())
  }, [])

  return (
    <Container>
      <h1>Aluno: Ronaldo Cysne de Medeiros Vasconcelos</h1>
      <h2>Utilizando a biblioteca React-Bootstrap</h2>
      <hr />
      <SearchBar setBooks={setBooks} />
      <ListContainer>
        {books.map(book => {
          return (
            <ListItem
              key={book.url}
              title={book.title}
              image={book.image}
              price={book.price}
              url={book.url}
            />
          )
        })}
      </ListContainer>
    </Container>
  )
}

/* return (
    <Container>
      <ListContainer>
        {books.map(book => {
          return (
            <ListItem
              key={book.url}
              title={book.title}
              image={book.image}
              price={book.price}
              url={book.url}
            />
          )
        })}
      </ListContainer>
    </Container>
  ) */

export default App
