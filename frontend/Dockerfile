FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3001
ENV REACT_APP_API_URL=http://localhost:3001

EXPOSE 3001

CMD ["npm", "start"] 