# Angular - Estrutura Escalável com Testes Unitários

Exemplo de estrutura de aplicativo para escabilidade e boas praticas de desenvolvimento com Clean Code, Clean Architecture e Orientação a Objetos e testes de unidade, roteamento, autenticação, extensões de serviço HTTPS.
## Começando

Baixe o repositório:

```bash
git clone git@bitbucket.org:ciandt_it/poc_angular.git
```

### Angular aplicativo web

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento e abra localhost:4200 em seu navegador:

```bash
npm start ou ng serve
```

### Estrutura do projeto

````
| - app
| | - core
| | | - [+] configs
| | | - [+] guards
| | | - [+] interceptors
| | | - layouts
| | | | - [+] footer
| | | | - [+] navbar
| | | - models
| | | | - [+] categorias
| | | - services
| | | | - [+] categorias
| | | - core.module.ts
| | - modules
| | | - categorias
| | | | - [+] list
| | | | - categoria.module.ts
| | | | - categoria.service.ts
| | | | - categoria-routing.module.ts
| | - pages
| | | - [+] login
| | | - [+] erros
| | - shared
| | | - [+] components
| | | - [+] directives
| | | - [+] enums
| | | - [+] pipes
| | | - [+] validators
| | | - shared.module.ts
````
### Explicando a estrutura

### Core

É literalmente sua palavra em inglês: o núcleo [da aplicação]. Lá está tudo que é essencial para o funcionamento.

1. Guards: É onde você irá por os guardas de rota que criou, como por exemplo aquela para proteger rotas que o usuário deve estar autenticado.

2. Interceptors: É a pasta que conterá nossos interceptadores de requisições, um exemplo é um interceptor cujo sua responsabilidade é injetar o token obtido no header da requisição

3. Layouts: É a pasta que armazena os layouts pré-definidos criados da aplicação. Ex: NavBar e Footer.

4. Models: É a pasta que armazena os modelos necessários para as requisições.

5. Services: É a pasta que armazena todas as chamadas para o back via http serpada pelos módulos.

É importante que você carregue (importando) o core.module.ts no app.module.ts da aplicação. Fazemos isso para carregar todo o seu conteúdo na inicialização da aplicação, pois é o conteúdo núcleo dela.

### Modules

É simplesmente a pasta que contém definitivamente aquilo que dá valor ao sistema, ou seja, as entregas. Modules são as características do sistema.
Cada item dentro dessa pasta tem seus próprios componentes.

### Shared
Aqui fica tudo que é compartilhado e reutilizado em toda aplicação, não tem segredo.
As pastas filhas são apenas para agrupar por tipo de conteúdo — pipes com pipes, components com components e assim por diante.
É importante que importe a shared.module.ts também em seu app.module.ts e em todos os outros demais modules criados. Fazemos isso, pois em tese tudo que está na shared.module.ts está disponível para ser utilizado.

### Bibliotecas

- [Angular](https://angular.io)
- [Jasmine](https://jasmine.github.io)

## Executando teste de unidade

1. Abra um novo terminal e inicie o servidor:

```bash
npm run server ou ng serve
```

2. Inicie o servidor de test:

```bash
npm run test ou ng test
```

3. Vá para a pasta do projeto web `./coverage`.

4. Visualize o relatório de teste na web usando a extensão do vsCode LiveServer
