FROM node:20-alpine
LABEL authors="Abheelash"

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#EXPOSE 8080
EXPOSE 5173

#ENV NODE_ENV=production

CMD ["npm", "run", "dev"]