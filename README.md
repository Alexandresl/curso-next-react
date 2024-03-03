# Next.js e React - Curso Completo

- [Next.js e React - Curso Completo](#nextjs-e-react---curso-completo)
	- [Seção 1: Introdução](#seção-1-introdução)
		- [1. Introdução](#1-introdução)
		- [2. Visão geral do curso](#2-visão-geral-do-curso)
		- [3. Pré-Requisitos](#3-pré-requisitos)
		- [4. O que é Next.JS](#4-o-que-é-nextjs)
		- [5. Recado sobre TypeScript](#5-recado-sobre-typescript)
		- [6. Aviso importante aos usuários de Windows](#6-aviso-importante-aos-usuários-de-windows)
	- [Seção 2: Revisão React](#seção-2-revisão-react)
		- [7. Introdução do módulo](#7-introdução-do-módulo)
		- [8. Código fonte final](#8-código-fonte-final)
		- [9. Criando o Projeto](#9-criando-o-projeto)
		- [10. Primeiro componente](#10-primeiro-componente)
		- [11. Movendo o primeiro componente](#11-movendo-o-primeiro-componente)
		- [12. JSX 01](#12-jsx-01)
		- [13. JSX 02](#13-jsx-02)
		- [14. JSX 03](#14-jsx-03)
		- [15. JSX 04](#15-jsx-04)
		- [16. Desafio Lista](#16-desafio-lista)
		- [17. Desafio Lista - Resposta 01](#17-desafio-lista---resposta-01)
		- [18. Desafio Lista - Resposta 02](#18-desafio-lista---resposta-02)
		- [19. Desafio Lista - Resposta 03](#19-desafio-lista---resposta-03)
		- [20. Fragment 01](#20-fragment-01)
		- [21. Fragment 02](#21-fragment-02)
		- [22. Usando o Componente](#22-usando-o-componente)
		- [23. Propriedade do componente](#23-propriedade-do-componente)
		- [24. Integração com CSS 01](#24-integração-com-css-01)
		- [25. Integração com CSS 02](#25-integração-com-css-02)
		- [26. Props somente leitura](#26-props-somente-leitura)


## Seção 1: Introdução

### 1. Introdução

[Commit](https://github.com/Alexandresl/curso-next-react/tree/3a3a2d477ea6c912d47bceef2edff5fa6b2707f4)

### 2. Visão geral do curso

[Commit](https://github.com/Alexandresl/curso-next-react/tree/25ccafc0307540e08dbfc465a76759177d31915d)

### 3. Pré-Requisitos

[Commit](https://github.com/Alexandresl/curso-next-react/tree/8d59e67e6a88b95d6e6b20c1aaf80bff5ea0c09c)

### 4. O que é Next.JS

[Commit](https://github.com/Alexandresl/curso-next-react/tree/9a7a978aac53c5e84738ad98161fab251103a854)

### 5. Recado sobre TypeScript

[Commit](https://github.com/Alexandresl/curso-next-react/tree/cc48a1d86d5fd465d6eb4e1bc027274941337d16)

### 6. Aviso importante aos usuários de Windows

Fala galera! Tranquilo?

Antes de mais nada, recomendamos que vocês utilizem sempre a versão mais atualizada possível do Windows, ou seja, o Windows 10. Pois diversas tecnologias não dão mais suporte aos Windows 7, 8 ou 8.1, então caso vocês utilizem alguma dessas versões, vocês vão acabar tendo problemas em algum ponto do curso. A recomendação é utilizar o Windows 10.

Venho também dar uma outra dica super rápida porém super importante para todos que irão dar início às atividades do curso no ambiente Windows. O que acontece é que existem duas configurações padrão que vêm ativadas e acabam dificultando ou gerando erros na hora de programar em qualquer ambiente. Vou explicar rapidinho sobre elas e sobre como lidar com isso.

Na programação é super normal utilizar os caminhos absolutos de localizações na sua máquina em diversos momentos. Às vezes você mesmo utiliza, mas em geral as linguagens utilizam ali por debaixo do panos para que possam ser executadas. Esses caminhos são literalmente "c/users/seuNome/pasta" e tudo mais.

O primeiro problema é relacionado a Área de Trabalho, pois em alguns casos ela entra nesse caminho absoluto com seu nome em português, ou seja, com espaços e acentos. E isso acaba gerando erro em diversos ambientes. A forma de se lidar com isso é bem simples, basta criar seu projeto em outra pasta que não seja a Área de Trabalho.

O segundo problema é relacionado ao OneDrive. Nas versões mais recentes do Windows o OneDrive é ativado por padrão e ele acaba deixando todas as pastas e arquivos criados no seu computador como arquivos em nuvem, ao invés de arquivos locais. Isso também acaba gerando erros em alguns ambientes. Para resolver isso é simples, basta desativar o OneDrive para a pasta do seu projeto ou desativar geral mesmo. Você escolhe.

Bons estudos galera!

[Commit](https://github.com/Alexandresl/curso-next-react/tree/0a41377a5eb470e890431d066ad480a6152f6e97)

## Seção 2: Revisão React

### 7. Introdução do módulo

*Next.js é a versão framework do React*

**Objetivos do módulo**

- Criar projeto Next.js
- O básico do Next e React
- Criar componentes funcionais
- Propriedades de componentes
- Comunicação entre componentes
- Componente com estado
- Renderização condicional
- Renderização de lista de componentes

[Commit](https://github.com/Alexandresl/curso-next-react/tree/e42b545f5abc98d9419005317633ab672cf031b8)

### 8. Código fonte final

[Arquivo](Files/exercicios.zip)

[Commit](https://github.com/Alexandresl/curso-next-react/tree/fdbd405e7023482cb05aa1789eb48592c0e286ea)

### 9. Criando o Projeto

Comando para criar projeto Next.js:

```npx create-next-app <nome do projeto>```

**Resposta padrão inicial:**

√ Would you like to use TypeScript? ... **No** / Yes
√ Would you like to use ESLint? ... **No** / Yes
√ Would you like to use Tailwind CSS? ... **No** / Yes
√ Would you like to use `src/` directory? ... **No** / Yes
√ Would you like to use App Router? (recommended) ... **No** / Yes
√ Would you like to customize the default import alias (@/*)? ... **No** / Yes

[Commit](https://github.com/Alexandresl/curso-next-react/tree/006674afaf5dcff735beb9b91da711767428ea78)

### 10. Primeiro componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/a61f590b31c59d87ea0fa23e42aab2e0861827bb)

### 11. Movendo o primeiro componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/215436225d6d4586b483a180271347bafc27aca5)

### 12. JSX 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/9866237fb50bfa9d4522124a0acb398b3b6b627d)

### 13. JSX 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/63ed575a96f58339b699c324b763e355438313ab)

### 14. JSX 03	

[Commit](https://github.com/Alexandresl/curso-next-react/tree/825026ccf67314a062c18366b42418ca14bfe488)

### 15. JSX 04

[Commit](https://github.com/Alexandresl/curso-next-react/tree/d96498ad59bcf0eab2bc306178a86a9b9fbd4acd)

### 16. Desafio Lista

[Commit](https://github.com/Alexandresl/curso-next-react/tree/641a72aec824775a9d843bb86d8034b88a0683e4)

### 17. Desafio Lista - Resposta 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/8c7ac8b6cf8b04c3fdeb25dc3ef63c90fd2f09ec)

### 18. Desafio Lista - Resposta 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/4aa0e69cd5d5c393bc100e1556e481cd534c05f0)

### 19. Desafio Lista - Resposta 03

[Commit](https://github.com/Alexandresl/curso-next-react/tree/586b000a277ce0e7c0f0baf338fdae80337731e4)

### 20. Fragment 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/7d1822d8d27724ea40c2a154fcd14d71533f02c1)

### 21. Fragment 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/f74d56b723cff54dce1ba0f3e672d9a5a4624a13)

### 22. Usando o Componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/1da2aa2820e99a1549f2b95e0e465fc3a8aa246c)

### 23. Propriedade do componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/e70864b0d2b16ae8847c99b8c3556aaceb4041c2)

### 24. Integração com CSS 01

[commit](https://github.com/Alexandresl/curso-next-react/tree/5b744fff17349262b5bc70ffd4fe2be1f09f8413)

### 25. Integração com CSS 02

[commit](https://github.com/Alexandresl/curso-next-react/tree/9b91e3b5e20ed94ff674762629c21e545a5c635a)

### 26. Props somente leitura

[Commit]()