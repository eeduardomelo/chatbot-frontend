## Instação do Java

```shell
Linux:
https://www.java.com/pt-BR/download/help/linux_x64_install.html
Windows
https://www.java.com/pt-BR/download/ie_manual.jsp?locale=pt_BR
Mac
https://support.apple.com/pt-br/HT204036
```

## Instalação do NodeJS 

```shell
sudo apt-get install curl
# Usando Ubuntu
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
# Usando Debian, como root
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

node -v
npm -v
```

## Instalando Android Studio

```shell
Linux
Crie uma pasta em um local desejado para instalação da SDK. Ex: ~/Android/Sdk

Anote esse caminho para ser utilizado posteriormente

Anote também o endereço de instalação do JDK 11. Exemplo:

Copy
/usr/lib/jvm/java-11-openjdk-amd64
Caso não tenha certeza do caminho, busque na pasta /usr/lib/jvm/ pela pasta referente ao JDK 11, que provavelmente iniciará com java-11.

Com esses caminhos, precisamos configurar algumas variáveis ambiente em nosso sistema. Procure pelo primeiro dos seguintes arquivos existentes no seu sistema: ~/.zshrc ou ~/.bashrc, e adicione essas seis linhas no arquivo (de preferência no início):

Se nenhum desses arquivos existir, crie o ~/.bashrc caso utilize o Shell padrão ou ~/.zshrc caso utilize o ZSH.

Copy
export JAVA_HOME=CAMINHO_ANOTADO_COM_SUA_VERSÃO
export ANDROID_HOME=~/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
Não esqueça de substituir o valor na linha JAVA_HOME pelo caminho que você anotou anteriormente. Além disso, caso esteja utilizando uma pasta diferente para a SDK do Android, altere acima.

```

### Instalação React Native
```shell
Link:
https://react-native.rocketseat.dev/
```

### Instalando Android Studio

```shell
Linux:
https://react-native.rocketseat.dev/android/linux/
Windows:
https://docs.microsoft.com/pt-br/windows/dev-environment/javascript/react-native-for-android

```

### Arquivo .env

```shell
copiar arquivo .env.example para .env
Incluir variáveis:
SERVICE_API=http://172.18.0.1:8080/protocol
API_TOKEN="Basic c2VydmljZTpzZXJ2aWNl"

```

### Executando o projeto


```shell
npm install
npx react-native run-android
npm run android
react-native start

```

