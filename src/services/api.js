import axios from 'axios'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMDAzYzA4ZDVhMWZiNDI0NGU5NjE1ZCIsImlhdCI6MTU2MDM3NDA1MSwiZXhwIjoxNTYwNDYwNDUxfQ.T3iTwP0naBbd28an4qLojcpp83uBVNclo5taHi5ZQOc'

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: { 'Authorization': `Bearer ${token}` }
})

export default api
