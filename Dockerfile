FROM node:20.11.1

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install -g @angular/cli

RUN npm install primeng

COPY . .

EXPOSE 4200

CMD ["ng","serve","--host","0.0.0.0","--port","4200"]