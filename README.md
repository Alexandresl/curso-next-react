# curso-next-react 

- [curso-next-react](#curso-next-react)
	- [Seção 1: Introdução](#seção-1-introdução)
		- [1. Introdução](#1-introdução)
		- [2. Visão geral do curso](#2-visão-geral-do-curso)
		- [3. Pré-requisitos](#3-pré-requisitos)
		- [4. O que é Next.JS?](#4-o-que-é-nextjs)
		- [5. Recado sobre TypeScript](#5-recado-sobre-typescript)
		- [6. Aviso importante aos usuários de Windows](#6-aviso-importante-aos-usuários-de-windows)
	- [Seção 2: Revisão React](#seção-2-revisão-react)
		- [7. Introdução ao módulo](#7-introdução-ao-módulo)
			- [Objetivos do módulo](#objetivos-do-módulo)
		- [8. Código fonte final](#8-código-fonte-final)
		- [9. Criando o projeto](#9-criando-o-projeto)
		- [10. Primeiro componente](#10-primeiro-componente)
		- [11. Movendo o primeiro componente](#11-movendo-o-primeiro-componente)
		- [12. JSX 01](#12-jsx-01)
		- [13. JSX 02](#13-jsx-02)
		- [14. JSX 03](#14-jsx-03)
		- [15. JSX 04](#15-jsx-04)
		- [16. Desafio Lista](#16-desafio-lista)
		- [17. Desafio Lista - Resposta 1](#17-desafio-lista---resposta-1)
		- [18. Desafio Lista - Resposta 2](#18-desafio-lista---resposta-2)
		- [19. Desafio Lista - Resposta 3](#19-desafio-lista---resposta-3)
		- [20. Fragment 01](#20-fragment-01)
		- [21. Fragment 02](#21-fragment-02)
		- [22. Usando o Componente](#22-usando-o-componente)

## Seção 1: Introdução

### 1. Introdução

[Commit](https://github.com/Alexandresl/curso-next-react/commit/a9ea3fd807359a8d6a95b5b16d3cdd934a8f24f4)

### 2. Visão geral do curso

[Commit](https://github.com/Alexandresl/curso-next-react/commit/c6c509fb9ca1d2c876df21d984ba6001a3ca6f9a)

### 3. Pré-requisitos

[Commit](https://github.com/Alexandresl/curso-next-react/commit/3759187bf2da3513d7480b9979c00a659718ed08)

### 4. O que é Next.JS?

[Commit](https://github.com/Alexandresl/curso-next-react/commit/aed5ccada9d7c88bd78984176b435151c6103128)

### 5. Recado sobre TypeScript

[Commit](https://github.com/Alexandresl/curso-next-react/commit/eaad09cf22e89c97c057d06a52fd08fe0a13eafe)

### 6. Aviso importante aos usuários de Windows

Fala galera! Tranquilo?

Antes de mais nada, recomendamos que vocês utilizem sempre a versão mais atualizada possível do Windows, ou seja, o Windows 10. Pois diversas tecnologias não dão mais suporte aos Windows 7, 8 ou 8.1, então caso vocês utilizem alguma dessas versões, vocês vão acabar tendo problemas em algum ponto do curso. A recomendação é utilizar o Windows 10.

Venho também dar uma outra dica super rápida porém super importante para todos que irão dar início às atividades do curso no ambiente Windows. O que acontece é que existem duas configurações padrão que vêm ativadas e acabam dificultando ou gerando erros na hora de programar em qualquer ambiente. Vou explicar rapidinho sobre elas e sobre como lidar com isso.

Na programação é super normal utilizar os caminhos absolutos de localizações na sua máquina em diversos momentos. Às vezes você mesmo utiliza, mas em geral as linguagens utilizam ali por debaixo do panos para que possam ser executadas. Esses caminhos são literalmente "c/users/seuNome/pasta" e tudo mais.

O primeiro problema é relacionado a Área de Trabalho, pois em alguns casos ela entra nesse caminho absoluto com seu nome em português, ou seja, com espaços e acentos. E isso acaba gerando erro em diversos ambientes. A forma de se lidar com isso é bem simples, basta criar seu projeto em outra pasta que não seja a Área de Trabalho.

O segundo problema é relacionado ao OneDrive. Nas versões mais recentes do Windows o OneDrive é ativado por padrão e ele acaba deixando todas as pastas e arquivos criados no seu computador como arquivos em nuvem, ao invés de arquivos locais. Isso também acaba gerando erros em alguns ambientes. Para resolver isso é simples, basta desativar o OneDrive para a pasta do seu projeto ou desativar geral mesmo. Você escolhe.

Bons estudos galera!

[Commit](https://github.com/Alexandresl/curso-next-react/commit/1c5e4298127d19a25de3d372eaec5705574fc7ff)

## Seção 2: Revisão React

### 7. Introdução ao módulo

#### Objetivos do módulo

- Criar um projeto Next.js
- O básico de Next.js e React
- Criar componentes funcionais
- Propriedades de componentes
- Comunicação entre componentes
- Componente com estado
- Renderização condicional
- Renderização de lista de componentes

[Commit](https://github.com/Alexandresl/curso-next-react/commit/a765296cd5ab2eadd6bc8c9992fe3600f0ebac4c)

### 8. Código fonte final

[Arquivo](arquivos/exercicios.zip)

[Commit](https://github.com/Alexandresl/curso-next-react/commit/47d12406a98a561459935fc421d1263dee8c28f0)

### 9. Criando o projeto

* Iniciar processo
```
npx create-next-app exercicios
```

Criar com as seguintes respostas:

√ Would you like to use TypeScript? ... No / **Yes**
√ Would you like to use ESLint? ... No / **Yes**
√ Would you like to use Tailwind CSS? ... No / **Yes**
√ Would you like to use `src/` directory? ... **No** / Yes
√ Would you like to use App Router? (recommended) ... **No** / Yes
√ Would you like to customize the default import alias (@/*)? ... **No** / Yes

[Commit](https://github.com/Alexandresl/curso-next-react/commit/942bbc4a60493547374b92044870db7ff3bd7052)

### 10. Primeiro componente

[Commit](https://github.com/Alexandresl/curso-next-react/commit/e35cfd72e01368b1b4fec0833738d10316fa090d)

### 11. Movendo o primeiro componente

[Commit]()https://github.com/Alexandresl/curso-next-react/commit/6f45373d2136a445ea057c3163d9198217dad84e

### 12. JSX 01

[Commit](https://github.com/Alexandresl/curso-next-react/commit/**3fc88e78497593abb6564319e6103a28ab26f0e7)

### 13. JSX 02

[Commit](https://github.com/Alexandresl/curso-next-react/commit/fb16c0cfa512488cadef2521de0c3fa9b1e78d87)

### 14. JSX 03

[Commit](https://github.com/Alexandresl/curso-next-react/commit/f90d8d03205aea0133ce3c9201051fc83ccbed4c)

### 15. JSX 04

[Commit](https://github.com/Alexandresl/curso-next-react/commit/85fceb22b051564fe5a168a28520989c21583212)

### 16. Desafio Lista

[Commit](https://github.com/Alexandresl/curso-next-react/commit/9910590cf0a3cd8fbf77b8988a912a58c366de5f)

### 17. Desafio Lista - Resposta 1

[Commit](https://github.com/Alexandresl/curso-next-react/commit/b0e2c131f849f21089aa33ce032282bda92b37f8)

### 18. Desafio Lista - Resposta 2

[Commit](https://github.com/Alexandresl/curso-next-react/commit/74e51c63f6e097e3a3cdc53f2ab6517b51477407)

### 19. Desafio Lista - Resposta 3

[Commit](https://github.com/Alexandresl/curso-next-react/commit/c7ac8f3232ef52a62b5db68f8f5502d50290a1d7)

### 20. Fragment 01

[Commit](https://github.com/Alexandresl/curso-next-react/commit/73426ed766e7a9f44328577640a768d0b6aa853e)

### 21. Fragment 02

[Commit](https://github.com/Alexandresl/curso-next-react/commit/d75d79c57b34efa3c86ec8920c579957eeac1ded)

### 22. Usando o Componente

[Commit]()