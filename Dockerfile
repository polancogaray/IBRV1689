# Etapa de compilación
FROM node:22-alpine as build-stage
WORKDIR /app


# Copia los archivos de configuración necesarios para instalar dependencias
COPY package*.json ./

# Instalar Quasar CLI globalmente y dependencias del proyecto
RUN npm install -g @quasar/cli && \
    npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación en modo PWA
RUN quasar build -m pwa

# Etapa de producción
FROM nginx:alpine as production-stage

# Configuración de la zona horaria
ENV TZ=America/Havana
RUN apk add --no-cache tzdata \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone

# Copia los archivos construidos desde la etapa de compilación
COPY --from=build-stage /app/dist/pwa /usr/share/nginx/html

# Copia el archivo de configuración de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
