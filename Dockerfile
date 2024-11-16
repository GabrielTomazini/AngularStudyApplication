FROM node:18.19

WORKDIR /app

COPY package*.json ./

RUN npm install 

RUN npm install -g @angular/cli

RUN npm install primeng

COPY . .

EXPOSE 4200

CMD ["ng","serve"]