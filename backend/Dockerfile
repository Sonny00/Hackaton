# Utiliser une image de base Node.js
FROM node:19.0.0-alpine

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

COPY package*.json ./

RUN npm install --only=development

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
