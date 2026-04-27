# DIO Bank Refatorado com TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-success)
![License](https://img.shields.io/badge/license-MIT-blue)

Projeto prático baseado no desafio [`desafio01-ts`](https://github.com/digitalinnovationone/desafio01-ts) da DIO, reestruturado para portfólio com foco em Clean Code, orientação a objetos e tipagem forte em TypeScript.

## Objetivo do Projeto

Demonstrar boas práticas de desenvolvimento em TypeScript ao evoluir um desafio base de conta bancária, aplicando:

- encapsulamento de atributos
- regras de negócio centralizadas
- herança com sobrescrita de comportamento
- validação de operações com tratamento de erros

## Funcionalidades

- Depósito com validação de conta ativa e valor positivo.
- Saque com validação de saldo e regras de segurança.
- Empréstimo para conta empresarial (`CompanyAccount`).
- Conta com bônus (`BonusAccount`) que adiciona +10 em cada depósito.
- Tratamento de erros de domínio com classe específica (`BankError`).

## Tecnologias Utilizadas

- TypeScript
- Node.js
- ts-node-dev

## Como Executar Localmente

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd Bank
npm install
npm run dev
```

## Scripts

- `npm run dev`: executa o projeto em modo desenvolvimento.
- `npm run build`: compila os arquivos TypeScript para a pasta `dist`.
- `npm run start`: executa a versão compilada do projeto.

## Estrutura do Projeto

```text
src/
  app.ts
  errors/
    BankError.ts
  models/
    DioAccount.ts
    PeopleAccount.ts
    CompanyAccount.ts
    BonusAccount.ts
```

## Decisões Técnicas

- `name` e `accountNumber` são `readonly` para evitar alterações indevidas.
- `balance` é privado para garantir consistência das regras de negócio.
- Métodos da classe base concentram validações reutilizáveis.
- Subclasses implementam apenas comportamentos específicos de cada tipo de conta.

## Aprendizados Aplicados

- Modelagem de domínio com classes abstratas e especializações.
- Uso de `strict mode` no TypeScript.
- Organização por responsabilidade (models, errors e execução da aplicação).
- Escrita de código preparado para evolução futura.

## Próximos Passos

- Adicionar testes automatizados com Vitest ou Jest.
- Criar camada de persistência (ex.: banco relacional ou NoSQL).
- Expor operações via API REST.
- Adicionar pipeline de CI para build e testes.

## Espaço para Links Futuros

- Figma: [adicionar link]
- Banco de Dados: [adicionar link]
- Deploy: [adicionar link]
- Documentação complementar: [adicionar link]

## Autor

Feito por **[Seu Nome](https://github.com/seu-usuario)**.

