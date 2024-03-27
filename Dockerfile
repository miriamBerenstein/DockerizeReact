# Fetching the latest node image 
FROM node:alpine AS development

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /react-app

# copy all the files to the     docker
COPY . .

RUN npm install

# Starting the application
CMD ["npm","start"]
