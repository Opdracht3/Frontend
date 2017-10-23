#FROM nginx

#COPY dist /usr/share/nginx/html

FROM node:boron

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
ADD . /app

# Install app dependencies
#COPY package.json .
# For npm@5 or later, copy package-lock.json as well
#COPY package.json package-lock.json ./

#RUN npm install

# Bundle app source
#COPY . .

#EXPOSE 8888

#CMD [ "npm", "start" ]
