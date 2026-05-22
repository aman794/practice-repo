# Step 1: Use an official Node.js runtime as the base image
FROM node:20-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy your script file into the container
COPY app.js .

# Step 4: Inform Docker that the container listens on port 3000 at runtime
EXPOSE 3000

# Step 5: Define the command to run your app
CMD ["node", "app.js"]