# 🧪 Prova - Testes de API com Postman

Este repositório contém a resolução da **Prova de Testes de API com Postman** da disciplina **S206 - Qualidade de Software**, conforme orientações do professor Christopher Lima (Inatel).

---

## 📌 API utilizada

Os testes foram realizados utilizando a [FakeStore API](https://fakestoreapi.com/), uma API pública que simula um e-commerce com rotas para listagem, criação e consulta de produtos.

**Principais endpoints usados:**
- `GET /products` – Lista todos os produtos.
- `GET /products/{id}` – Retorna um produto específico por ID.
- `POST /products` – Cadastra um novo produto.

---

## ✅ Testes implementados

Foram implementados ao todo **3 cenários distintos**, totalizando **mais de 6 testes unitários**, conforme solicitado na prova.

---

### 🧵 1. Requisição de todos os produtos – `GET /products`

**Testes desenvolvidos:**
- ✅ Status de retorno `200 OK`
- ✅ Tempo de resposta inferior a 1000 ms
- ✅ Resposta é um array
- ✅ Cada produto contém os campos esperados: `id`, `title`, `price`, `description`, `category`, `image`

---

### ✏️ 2. Cadastro de novo produto – `POST /products`

**Testes desenvolvidos:**
- ✅ Status de retorno `200 OK`
- ✅ O produto criado possui os dados enviados
- ✅ Tempo de resposta < 1s
- ✅ Verifica se o campo `title` retornado é do tipo `string`

> 🖼️ Para o teste de imagem, foi utilizada a seguinte URL:
> https://loja.comerciomix.com.br/media/catalog/product/cache/c96aa0f6886bbc8798bea1aeeb42c61f/c/a/camiseta-azul-royal-para-sublima_o-tradicional_1.jpg

---

### 🔎 3. Consulta de produto por ID – `GET /products/{id}`

**Testes desenvolvidos:**
- ✅ Status 200 OK
- ✅ Tempo de resposta < 1s
- ✅ Verifica se a resposta contém os campos esperados (`id`, `title`, etc)
- ✅ Verifica se o `id` retornado é o mesmo requisitado
- ✅ Verifica se o tipo do campo `price` é numérico

---

## ❌ Teste negativo implementado

Para cumprir o requisito de **pelo menos um teste negativo**, foi feita uma requisição com um `id` inexistente:

**`GET /products/9999`**

**Comportamento esperado:**
- A API retorna um objeto vazio (`{}`) com status `200`.
