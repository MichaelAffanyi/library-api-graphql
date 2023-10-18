const typeDefs = `#graphql
    
    type Book {
        title: String!
        author: String!
        published: Int!
        genres: [String]!
        id: ID!
    }
    
    type Token {
        accessToken: String!
    }
    
    type Author {
        name: String!
        born: Int,
        id: ID!
        bookCount: Int
    }
    
    type User {
        username: String!
        id: String!
    }

    type Query {
        bookCount: Int!
        authorCount: Int!
        allBooks(author: String, genre: String): [Book!]
        allAuthors: [Author!]
        showMe: User!
    }
    
    type Mutation {
        addBook(
            title: String!
            author: String!
            published: Int!
            genres: [String]!
        ): Book!
        editAuthor(
            name: String!
            setBornTo: Int!
        ): Author
        register(
            username: String!
            password: String!
        ):User
        login(
            username: String!
            password: String!
        ): Token    
    }
`

module.exports = typeDefs