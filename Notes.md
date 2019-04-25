# Resumão

## Netbeans:
* Alt + Enter = Dicas (adicionar import, declarar variável p/ receber retorno, etc)
* Ctrl + Espaço = Mostrar javadoc e métodos existentes
* Alt + Insert = Geração de código fonte (construtor, getters/setters, etc)
* Ctrl + Alt + Setas = Duplicar linha atual
* Shift + Alt + Setas = Deslocar/mover linha atual

## Spring:

* pom.xml
   * Dependencias e plugins de build 
* application.yaml
   * Parâmetros da aplicação
   * Funciona por identação
* Http:
   * Controller
   * RequestMapping
   * new ResponseEntity(novoVeiculo, HttpStatus.CREATED);
   * CRUD = Post, Get, Put, Delete
   * PathVariable, RequestBody, RequestParam
   * CrossOrigin (CORS)
* JPA:
   * @Entity, @Column
   * @Id    @GeneratedValue(strategy = GenerationType.IDENTITY)
   * @Repository ... extends CrudRepository<Produto, Long>

## React:

* Node 8.11.3 -> https://nodejs.org/dist/v8.11.3/node-v8.11.3-x64.msi
* React

```  
   npm install -g react-scripts
   npm install -g create-react-app
```  

* Criar projeto

``` 
   create-react-app nome-do-app
   cd nome-do-app
   code .
```

* Dependências:
```
   npm install --save @material-ui/core      // Layout Material
   npm i --save @material-ui/icons          // Icones
   npm install --save axios                // HttpRequests
```
   * Adicionar no index.html:
```
   <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```
* Extensões VSCode:
   * Simple react snnipets
   * Prettier - Code Formatter

...to be continued.
