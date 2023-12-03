# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json ./

# Instalar las dependencias de la aplicación
RUN npm install -g @nestjs/cli

RUN npm install --production

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Compilar la aplicación de NestJS
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación cuando el contenedor se inicie
CMD ["node", "dist/main"]