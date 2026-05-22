FROM node:20-alpine

WORKDIR /app

# Copy dependency configs first (optimizes Docker caching)
COPY package.json ./

# Install the socket.io and express packages
RUN npm install

# Copy the rest of your app files (server.js and the public folder)
COPY . .

EXPOSE 3000

CMD ["node", "server.js"]