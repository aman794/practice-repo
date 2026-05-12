# Use a lightweight base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
