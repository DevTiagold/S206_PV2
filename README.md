# ✅ Prova - Qualidade de Software (S206)

Este repositório contém as duas partes da Prova de Qualidade de Software, utilizando **Postman** (1ª Parte) e **Cypress** (2ª Parte), conforme solicitado pela disciplina.

---

## 📁 Estrutura do Repositório

O repositório está dividido em duas *branches*:

- [`Primeira_Parte`](https://github.com/DevTiagold/S206_PV2/blob/Primeira_Parte/README.md): testes de **API** com o **Postman**.
- [`Segunda_Parte`](https://github.com/DevTiagold/S206_PV2/blob/Segunda_Parte/README.md): testes de **UI** com o **Cypress**.

Use o botão de troca de branch no GitHub para navegar entre as duas partes.

---

## 🔹 Primeira Parte - Testes de API com Postman

Os testes foram realizados sobre a [FakeStore API](https://fakestoreapi.com), contemplando as seguintes rotas:

### ✔️ Testes realizados:

| Requisição                        | Tipo  | Cenário         | Descrição                                                                 |
|----------------------------------|-------|------------------|--------------------------------------------------------------------------|
| `/products`                      | `GET` | Positivo         | Lista todos os produtos e valida estrutura JSON                          |
| `/products`                      | `POST`| Positivo         | Adiciona um produto com sucesso                                          |
| `/products/{id}`                | `GET` | Positivo/Negativo| Requisita produto por ID válido e inválido                               |

### 🧪 Testes implementados no Postman:

- Verificação do **status 200**
- Verificação de tempo de resposta `< 1000ms` e `< 100ms`
- Validação da estrutura JSON da resposta
- Confirmação de campos obrigatórios por produto (`id`, `title`, `price`, etc.)
- Caso negativo: requisição com ID inexistente (ex: `/products/999`) retorna falha

> ⚠️ Nota: a API da FakeStore só armazena dados *temporariamente* e até certo limite de produtos (em geral até 20). Por isso, produtos adicionados via `POST` podem não estar acessíveis em seguida com `GET /products/{id}`.

---

## 🔸 Segunda Parte - Testes de UI com Cypress

A aplicação testada foi: [https://www.saucedemo.com](https://www.saucedemo.com)  
Usuário fornecido: `standard_user`  
Senha fornecida: `secret_sauce`

### ✔️ Casos de Teste

1. ✅ **Login Válido**
   - Login com usuário e senha corretos
2. ✅ **Login Inválido**
   - Login com credenciais incorretas
3. ✅ **Fluxo de Compra Completo**
   - Adiciona item ao carrinho, preenche dados, finaliza pedido com sucesso

---

## 📊 Relatório Mochawesome

Para gerar o relatório HTML dos testes:

### Instalação (caso ainda não tenha instalado):
```bash
npm init -y
npm install cypress mochawesome mochawesome-merge mochawesome-report-generator --save-dev
