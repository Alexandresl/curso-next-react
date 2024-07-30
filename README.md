# Next.js e React - Curso completo - Aprenda com projetos

- [Next.js e React - Curso completo - Aprenda com projetos](#nextjs-e-react---curso-completo---aprenda-com-projetos)
  - [Seção 1: Introdução](#seção-1-introdução)
    - [1. Introdução](#1-introdução)
    - [2. Visão geral do curso](#2-visão-geral-do-curso)
    - [3. Pré-requisitos](#3-pré-requisitos)
    - [4. O que é Next.JS](#4-o-que-é-nextjs)
    - [5. Recado sobre TypeScript](#5-recado-sobre-typescript)
    - [6. Aviso importante aos usuários de Windows](#6-aviso-importante-aos-usuários-de-windows)
  - [Seção 2: Revisão React](#seção-2-revisão-react)
    - [7. Introdução ao módulo](#7-introdução-ao-módulo)
    - [8. Código fonte final](#8-código-fonte-final)
    - [9. Criando o projeto](#9-criando-o-projeto)
    - [10. Primeiro componente](#10-primeiro-componente)
    - [11. Movendo o primeiro componente](#11-movendo-o-primeiro-componente)
    - [12. JSX 01](#12-jsx-01)
    - [13. JSX 02](#13-jsx-02)
    - [14. JSX 03](#14-jsx-03)
    - [15. JSX 04](#15-jsx-04)
    - [16. Desafio lista](#16-desafio-lista)
    - [17. Desafio lista - Resposta 1](#17-desafio-lista---resposta-1)
    - [18. Desafio lista - Resposta 2](#18-desafio-lista---resposta-2)
    - [19. Desafio lista - Resposta 3](#19-desafio-lista---resposta-3)
    - [20. Fragment 01](#20-fragment-01)
    - [21. Fragment 02](#21-fragment-02)
    - [22. Usando Componente](#22-usando-componente)
    - [23. Propriedade Componente](#23-propriedade-componente)
    - [24. Integração com CSS 01](#24-integração-com-css-01)
    - [25. Integracao com CSS 02](#25-integracao-com-css-02)
    - [26. Props somente leitura](#26-props-somente-leitura)
    - [27. Aplicando estilo CSS](#27-aplicando-estilo-css)
    - [28. Projeto Tabuleiro 01](#28-projeto-tabuleiro-01)
    - [29. Projeto Tabuleiro 02](#29-projeto-tabuleiro-02)
    - [30. Projeto Tabuleiro 03](#30-projeto-tabuleiro-03)
    - [31. Projeto Tabuleiro 04](#31-projeto-tabuleiro-04)
    - [32. Projeto Tabuleiro 05](#32-projeto-tabuleiro-05)
    - [33. Repetição 01](#33-repetição-01)
    - [34. Repetição 02](#34-repetição-02)
    - [35. Condicional 01](#35-condicional-01)
    - [36. Props Children](#36-props-children)
    - [37. Condicional 02](#37-condicional-02)
    - [38. Comunicação direta](#38-comunicação-direta)
    - [39. Chamada da Função via Evento](#39-chamada-da-função-via-evento)
    - [40. Comunicação indireta](#40-comunicação-indireta)
    - [41. Componente com estado](#41-componente-com-estado)
    - [42. Desafio contador](#42-desafio-contador)
    - [43. Desafio contador - Resposta](#43-desafio-contador---resposta)
    - [44. Componentes controlados](#44-componentes-controlados)
    - [45. Desafio Mega-Sena](#45-desafio-mega-sena)

## Seção 1: Introdução

### 1. Introdução

[Commit](https://github.com/Alexandresl/curso-next-react/tree/b6bdecf6704c93a722816a217a9b79f8ce66dd4b)

### 2. Visão geral do curso

[Commit](https://github.com/Alexandresl/curso-next-react/tree/58ce6851e8f46146d6f01fbb19d31dafa3d12b86)

### 3. Pré-requisitos

[Commit](https://github.com/Alexandresl/curso-next-react/tree/b345faf3ae3481252480567f199588188235cce0)

### 4. O que é Next.JS

[Commit](https://github.com/Alexandresl/curso-next-react/tree/c0a2ff9cf16220d00488ce968104557efa3a607a)

### 5. Recado sobre TypeScript

[Commit](https://github.com/Alexandresl/curso-next-react/tree/39c4664f7835092c4eec9dd339530257d630f088)

### 6. Aviso importante aos usuários de Windows

Fala galera! Tranquilo?

Antes de mais nada, recomendamos que vocês utilizem sempre a versão mais atualizada possível do Windows, ou seja, o Windows 10. Pois diversas tecnologias não dão mais suporte aos Windows 7, 8 ou 8.1, então caso vocês utilizem alguma dessas versões, vocês vão acabar tendo problemas em algum ponto do curso. A recomendação é utilizar o Windows 10.

Venho também dar uma outra dica super rápida porém super importante para todos que irão dar início às atividades do curso no ambiente Windows. O que acontece é que existem duas configurações padrão que vêm ativadas e acabam dificultando ou gerando erros na hora de programar em qualquer ambiente. Vou explicar rapidinho sobre elas e sobre como lidar com isso.

Na programação é super normal utilizar os caminhos absolutos de localizações na sua máquina em diversos momentos. Às vezes você mesmo utiliza, mas em geral as linguagens utilizam ali por debaixo do panos para que possam ser executadas. Esses caminhos são literalmente "c/users/seuNome/pasta" e tudo mais.

O primeiro problema é relacionado a Área de Trabalho, pois em alguns casos ela entra nesse caminho absoluto com seu nome em português, ou seja, com espaços e acentos. E isso acaba gerando erro em diversos ambientes. A forma de se lidar com isso é bem simples, basta criar seu projeto em outra pasta que não seja a Área de Trabalho.

O segundo problema é relacionado ao OneDrive. Nas versões mais recentes do Windows o OneDrive é ativado por padrão e ele acaba deixando todas as pastas e arquivos criados no seu computador como arquivos em nuvem, ao invés de arquivos locais. Isso também acaba gerando erros em alguns ambientes. Para resolver isso é simples, basta desativar o OneDrive para a pasta do seu projeto ou desativar geral mesmo. Você escolhe.

Bons estudos galera!

[Commit](https://github.com/Alexandresl/curso-next-react/tree/bf28f418bef3afe943bff8f945da2b4e400ae62e)

## Seção 2: Revisão React

### 7. Introdução ao módulo

* Objetivos do módulo
  * Criar projeto Next
  * O básico de Next e React
  * Criar componentes funcionais
  * Propriedades de componentes
  * Comunicação entre componentes
  * Componente de estado
  * Renderização condicional
  * Renderização de lista de componentes

[Commit](https://github.com/Alexandresl/curso-next-react/tree/62985f009dd3b9eb79f29e9c653889bdb7c6a5c5)

### 8. Código fonte final

[Arquivo](./Arquivos/exercicios.zip)

[Commit](https://github.com/Alexandresl/curso-next-react/tree/86ac503bb6c0c9a1c1c0983d99af772663fbf8ec)

### 9. Criando o projeto

- Comando para criação do projeto: `npx create-next-app [nome da aplicação]`
- Comando para iniciar em modo de desenvolvedor: `npm run dev`

[Commit](https://github.com/Alexandresl/curso-next-react/tree/8eee1c79bf7be6e77cb587b4d5237d9def0d8be4)

### 10. Primeiro componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/7caf87e744c26b3a190cd7836b8e1be9913fbfaa)

### 11. Movendo o primeiro componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/6b91617b4a904c469682b65da61ff46df55dd5da)

### 12. JSX 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/a19c3917d881f389b0b3b0648af2b79a7f99c85f)

### 13. JSX 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/a62d49a7bde4eba3775272c0a48b0f4ff99e23d0)

### 14. JSX 03

[Commit](https://github.com/Alexandresl/curso-next-react/tree/09934553c8d8af60b618569eff9b9b12173d57ea)

### 15. JSX 04

[Commit](https://github.com/Alexandresl/curso-next-react/tree/9b5f5762821a714028b875fc6ab61de709203dc3)

### 16. Desafio lista

[Commit](https://github.com/Alexandresl/curso-next-react/tree/6adbde81501325e0b9e14a815342725712df953f)

### 17. Desafio lista - Resposta 1

[Commit](https://github.com/Alexandresl/curso-next-react/tree/93f9528841c50b29fcd62224c37bbc92e4430279)

### 18. Desafio lista - Resposta 2

[Commit](https://github.com/Alexandresl/curso-next-react/tree/142e17ac9c89ef5a9e6199fbdd6052a1e11a2c66)

### 19. Desafio lista - Resposta 3

[Commit](https://github.com/Alexandresl/curso-next-react/tree/d971f98a12f1579fe01baca55f71a3bc49de2c0d)

### 20. Fragment 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/531c2369bf93d0adcac4c55f446e55ec951bc99a)

### 21. Fragment 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/42922fccd661af42c7e2577531ee17b2e91c0c56)

### 22. Usando Componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/9bc2048c0d8b4deadd15b10f376c08b89be74197)

### 23. Propriedade Componente

[Commit](https://github.com/Alexandresl/curso-next-react/tree/2917bb77661923f659d6eab5a7f0dcdde3292262)

### 24. Integração com CSS 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/19bb1c6317ab1be20afdf73e926b68feec32d1bf)

### 25. Integracao com CSS 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/d1080d106b1e05cb6769a4743342ad38e79e2c7d)

### 26. Props somente leitura

[Commit](https://github.com/Alexandresl/curso-next-react/tree/dfc9f6ef1de2524052f944e468a9beef11c09552)

### 27. Aplicando estilo CSS

[Commit](https://github.com/Alexandresl/curso-next-react/tree/22b74f27376889fd5a4b482c967698a22ec65354)

### 28. Projeto Tabuleiro 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/120ac76f2e02340e3df8d29cc1f0c7ca8f3e5f42)

### 29. Projeto Tabuleiro 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/8a5bbf46ac298574fb09400cfe04172a4073ea4c)

### 30. Projeto Tabuleiro 03

[Commit](https://github.com/Alexandresl/curso-next-react/tree/f02887c0d5a841519a623767550c7ba2978328b4)

### 31. Projeto Tabuleiro 04

[Commit](https://github.com/Alexandresl/curso-next-react/tree/a9e6a0cb18dbd2c545c8172bfcd652b7b313399b)

### 32. Projeto Tabuleiro 05

[Commit](https://github.com/Alexandresl/curso-next-react/tree/ae72e83178976518529d5766b642bfa02c6c1a22)

### 33. Repetição 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/5bef7df866c554ca94f4626e6f01afdc2e43cdb5)

### 34. Repetição 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/5cb8bccdf6d96c57d92071a34d6ce3abb6756e9f)

### 35. Condicional 01

[Commit](https://github.com/Alexandresl/curso-next-react/tree/ea1f23509ebbd367ef1ff3e178df226ce2efc7b9)

### 36. Props Children

[Commit](https://github.com/Alexandresl/curso-next-react/tree/51e1a5f6bc672cd2428123e6cbb76f6e397584d3)

### 37. Condicional 02

[Commit](https://github.com/Alexandresl/curso-next-react/tree/d7d63b4b49480e947fc56865b96fdeede27d7967)

### 38. Comunicação direta

[Commit](https://github.com/Alexandresl/curso-next-react/tree/474e30412cf9bd6c5f018c32394010dd41722d7d)

### 39. Chamada da Função via Evento

[Commit](https://github.com/Alexandresl/curso-next-react/tree/52693f6f856274329bb83d505b088b11dcce161e)

### 40. Comunicação indireta

[commit](https://github.com/Alexandresl/curso-next-react/tree/9e7541a68dfc0c5073ca09a9d87af1c1ce3f5410)

### 41. Componente com estado

[Commit](https://github.com/Alexandresl/curso-next-react/tree/81cba2b368f4a33c8ab2ca768b16272e458834b3)

### 42. Desafio contador

[Commit](https://github.com/Alexandresl/curso-next-react/tree/26d2412375cb650339e5e3bec3beb2c18b073f27)

### 43. Desafio contador - Resposta

[Commit](https://github.com/Alexandresl/curso-next-react/tree/551ba3079937f3db0a9cb7684c90d55cbcaa5c9d)

### 44. Componentes controlados

[Commit](https://github.com/Alexandresl/curso-next-react/tree/a83e2bf8aa24fbb080855d4e1463a1403118ea72)

### 45. Desafio Mega-Sena

[Commit]()