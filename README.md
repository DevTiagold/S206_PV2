# 🧪 Segunda Parte da Prova - Teste de UI com Cypress

Este projeto contém os testes automatizados de interface (UI) utilizando o framework **Cypress**, conforme os critérios estabelecidos na segunda parte da prova de **Qualidade de Software - S206**.

## ✅ Site Escolhido

**https://www.saucedemo.com**

Este site é amplamente utilizado para simulações de automações de testes. Ele possui funcionalidades como:
- Login com múltiplas contas
- Listagem de produtos
- Carrinho de compras
- Fluxo de finalização de pedidos

---

## ✅ Requisitos Atendidos

- [x] **Utilização obrigatória do Cypress**
- [x] **3 casos de testes desenvolvidos**
- [x] **Pelo menos 1 teste negativo**
- [x] **Presença de funções reutilizáveis nos testes**
- [x] **Geração de relatório final com mochawesome (caminho: cypress/reports/mochawesome.html)**
- [x] **Não utilização de sites da lista de exceções**

---

## 📋 Casos de Testes Implementados

1. ✅ **Login Válido**
   - Realiza login com usuário `standard_user` e senha `secret_sauce`
   - Verifica se o login ocorre com sucesso

2. ❌ **Login Inválido (Teste Negativo)**
   - Tenta fazer login com usuário e senha incorretos
   - A expectativa é que o acesso falhe e seja exibida uma mensagem de erro

3. ✅ **Fluxo de Compra Completo**
   - Realiza login
   - Adiciona a mochila "Sauce Labs Backpack" ao carrinho
   - Prossegue com o checkout
   - Preenche os dados do comprador (gerados dinamicamente com base no horário)
   - Finaliza a compra com sucesso
   - Valida a mensagem de sucesso "Checkout: Complete!"

---

## 🛠 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
