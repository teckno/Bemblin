FROM node:14-slim

# Set the working directory to the frontend directory
WORKDIR /app/frontend

# Install required npm packages
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the React app files
COPY . .

# Run the React development server
CMD ["npm", "build"]
CMD ["npm", "start"]

# Expose the port that the React development server runs on
EXPOSE 3000