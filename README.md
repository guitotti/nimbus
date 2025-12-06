## ☁️ Projeto Nimbus: Dashboard de Previsão do Tempo

Este é o **Nimbus**, um dashboard de previsão do tempo desenvolvido como parte da disciplina de **Projeto Interdisciplinar de Computação II** do curso de Ciência da Computação da EEP.

Desenvolvido por:
- Breno Araujo de Oliveira
- Gabriel Bentes Buttros
- Guilherme Henrique Totti Benatti
- Pedro Gasque da Silva
- Pedro Henrique Renosto Cardoso

_____

A aplicação é dividida em duas partes:

1.  **Backend (Servidor):** Desenvolvido em **Python**, é responsável por fazer requisições para a API da OpenWeather e fornecer os dados de previsão do tempo.
2.  **Frontend (Interface): Gráfico:** Desenvolvido em **React**, exibe os dados de previsão do tempo.

-----

## 🛠️ Requisitos Mínimos

Para executar o projeto **Nimbus**, você precisará ter o seguinte instalado em sua máquina:

  * **Python:** Versão **3.10.12** ou superior.
  * **Node.js:** Versão **20.19.5** ou superior (sugerimos o **npm** como gerenciador de pacotes).
  * Uma **Chave de API (API Key)** da OpenWeather. 

-----

## 🚀 Passos para Execução

Siga os passos abaixo para configurar e executar a aplicação:

### 1\. Configuração do Backend (Servidor Python)

O backend será executado em um **ambiente virtual Python** para isolar as dependências do projeto.


#### 1.1. Criar e Ativar o Ambiente Virtual

No diretório raiz de **server**, crie e ative o ambiente virtual.

  * **Para Linux/macOS:**
    ```bash
    python3 -m venv venv
    source venv/bin/activate
    ```
  * **Para Windows (Command Prompt):**
    ```bash
    python -m venv venv
    .\venv\Scripts\activate
    ```
  * **Para Windows (PowerShell):**
    ```bash
    python -m venv venv
    .\venv\Scripts\Activate.ps1
    ```

#### 1.2. Instalar as Dependências

Com o ambiente virtual ativado, instale as dependências Python a partir do arquivo `requirements.txt`.

```bash
pip install -r requirements.txt
```

#### 1.3. Configurar a Chave de API

O servidor precisa da chave da API da OpenWeather para funcionar. Crie um arquivo chamado `.env` - copie o conteúdo do arquivo `.env.example` na pasta raiz do **backend** e adicione a sua chave:

```env
OPENWEATHER_API_KEY="SUA_CHAVE_AQUI"
```

(Para avaliação do projeto, o arquivo `.env` já foi fornecido, e uma chave da API já foi fornecida no arquivo `.env.`)

#### 1.4. Executar o Servidor

Execute o servidor Python.

```bash
python main.py
```

O servidor estará ativo, geralmente em `http://127.0.0.1:5000`.

Caso o servidor inicie em outra porta, será necessário alterar o arquivo `.env` em **web**, e adicionar a porta correspondente.

-----

### 2\. Configuração do Frontend (Aplicação React)

#### 2.1. Navegar até o Diretório do Frontend

```bash
cd web
```

#### 2.2. Instalar as Dependências

Instale as dependências Node.js/React.

```bash
npm install
```

#### 2.3. Configurar a Conexão com o Backend


```env
VITE_BASE_API_URL="http://localhost"
VITE_PORT=5000
```

#### 2.4. Executar o Frontend

Inicie a aplicação React.

```bash
npm run dev
```

A aplicação será aberta automaticamente no seu navegador, geralmente em `http://localhost:5173`.

-----

### 3\. Acessar a Aplicação

Com o backend e o frontend em execução, você pode acessar a aplicação no endereço fornecido pelo React em: `http://localhost:5173`.

-----

### 🛑 Parar a Execução

Para parar o servidor Python ou a aplicação React, pressione **`Ctrl + C`** na janela do terminal correspondente.

Para desativar o ambiente virtual Python, digite:

```bash
deactivate
```
