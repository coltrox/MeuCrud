Esse aplicativo foi desenvolvido em React Native para gerenciar um cadastro de pessoas, permitindo criação, leitura, edição e exclusão (CRUD), além de pesquisa de pessoas em tempo real.

Como o problema foi resolvido:

Estudei maneiras de fazer os desafios e fui concluindo um a um.

O projeto foi focado em tornar a experiência do usuário melhor e segura:

Busca em tempo real: A lista de pessoas é filtrada instantaneamente enquanto você digita, sem precisar de botões extras.

Feedback visual: O app agora avisa quando está carregando os dados ou se houve algum erro de conexão com o servidor.

Usei o JSON Server para simular um banco real.

Como configurar o ambiente:

Instale o aplicativo Expo Go no celular.

Instale o pacote json-server via terminal:
npm install -g json-server

Como instalar as dependências
Dentro da pasta do projeto, execute o comando:
npm install

Como executar o aplicativo
Para rodar o projeto, você precisa de dois terminais abertos

No primeiro terminal a API simulada:
npx json-server --watch database.json --port 8080

No segundo terminal o Expo:
npx expo start

Escaneie o código QR gerado com o aplicativo Expo Go no seu celular ou utilize um emulador Android/iOS.
