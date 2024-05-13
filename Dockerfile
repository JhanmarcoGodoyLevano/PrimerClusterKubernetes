# Usa una imagen base oficial de Node.js
FROM node

# Establece el directorio de trabajo en el contenedor en /app
WORKDIR /app

# Copia package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install 

# Copia el resto del código de la aplicación al directorio de trabajo
COPY . .

# Expone el puerto 8080 para que esté disponible desde fuera del contenedor
EXPOSE 8080

# Ejecuta la aplicación cuando se inicia el contenedor
CMD ["node", "server.js"]
