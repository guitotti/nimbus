# Nimbus - Aplicativo de Clima e Previsão do Tempo

> **🚧 Em Desenvolvimento 🚧**

Nimbus é um aplicativo moderno para consulta de clima e previsões meteorológicas. Desenvolvido com React, TypeScript e RTK Query, o aplicativo utiliza dados da OpenWeatherAPI para fornecer informações precisas sobre o tempo em tempo real e para os próximos dias.

## Funcionalidades

- Consulta do clima atual de qualquer cidade do mundo.
- Exibição de informações detalhadas como temperatura, umidade, velocidade do vento e condições meteorológicas.
- Previsão para os próximos 5 dias, com dados sobre temperatura mínima, máxima e condições climáticas.
- Interface intuitiva e responsiva, compatível com dispositivos móveis.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript, que adiciona tipagem estática para melhorar a manutenção e confiabilidade do código.
- **RTK Query**: Biblioteca para gerenciamento de dados e comunicação com APIs, otimizada para usar com Redux.
- **OpenWeatherAPI**: API que fornece dados meteorológicos em tempo real e previsões.

## Instalação

### Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/guitotti/nimbus.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nimbus
   ```

3. Instale as dependências do projeto:

   - Usando npm:

     ```bash
     npm install
     ```

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenWeatherAPI:

   ```bash
   VITE_OPEN_WEATHER_API_KEY=your-api-key
   ```

   **Nota**: Você pode obter sua chave de API [aqui](https://openweathermap.org/api).

5. Inicie o servidor de desenvolvimento:

   - Usando npm:

     ```bash
     npm start
     ```

6. O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Contribuindo

Contribuições são bem-vindas! Para sugerir melhorias ou corrigir bugs, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma branch para sua modificação (`git checkout -b feature/nova-funcionalidade`).
3. Faça as alterações necessárias e commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`).
4. Envie para o repositório remoto (`git push origin feature/nova-funcionalidade`).
5. Abra um pull request para a branch principal deste repositório.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.


## Agradecimentos

Agradeço o uso da [OpenWeatherAPI](https://openweathermap.org/) para fornecer os dados meteorológicos.

---

**Nimbus** foi criado com ♥ por [Seu Nome].