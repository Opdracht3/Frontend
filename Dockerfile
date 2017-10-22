FROM nginx

COPY dist /usr/share/nginx/html

<<<<<<< HEAD
#FROM node:default
=======
#FROM node
>>>>>>> a749ebe7d9a9822110cd7cd12876bf3c23609a3e

#WORKDIR /usr/src/app

# Install app dependencies
#COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

#RUN npm install

# Bundle app source
#COPY . .

#EXPOSE 8888

#CMD [ "npm", "start" ]
