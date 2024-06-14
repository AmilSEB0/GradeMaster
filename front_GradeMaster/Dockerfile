# Première étape de construction: utilisant l'image Node.js 16 avec Alpine Linux comme base
FROM node:16-alpine as build

# Définir le répertoire de travail dans l'image
WORKDIR /app

# Copier les fichiers package.json et package-lock.json dans le répertoire de travail
COPY package*.json /app/

# Installer Ionic globalement
RUN npm install -g ionic

# Installer les dépendances Node.js
RUN npm install

# Copier tous les fichiers de l'application dans le répertoire de travail
COPY ./ /app/

# Exécuter la construction de l'application
RUN npm run build

# Deuxième étape: utiliser l'image Nginx avec Alpine Linux comme base
FROM nginx:alpine

# Supprimer tout contenu existant dans le répertoire Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copier les fichiers générés de l'étape de construction précédente dans le répertoire Nginx
COPY --from=build /app/www/ /usr/share/nginx/html/

# Copier la configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf