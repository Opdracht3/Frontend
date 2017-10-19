// FROM nginx

// COPY dist /usr/share/nginx/html

FROM node:boron

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 4002

CMD [ "npm", "start" ]
