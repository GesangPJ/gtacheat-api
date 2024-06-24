# Use the official Node.js 18 image as the base image
FROM node:22.0

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Start the Next.js application
CMD ["node", "index.js"]