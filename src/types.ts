export type Product = {
  id: string
  category_id: string
  name: string
}

export type User = {
  id: string
  hash_password: string
  username: string
  email: string
}

export type List = {
  id: string
  user_id: string
  name: string
}

export type ListItem = {
  product_id: string
  list_id: string
  item_qtd: number
  brand: string
}

export type Category = {
  id: string
  name: string
}
