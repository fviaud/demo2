FROM node:15-alpine as Builder

WORKDIR /app 
COPY package*  yarn.lock  ./
RUN yarn install 
COPY . /app 
RUN yarn build

# ---------------------------------------------
FROM nginx:alpine

COPY --from=Builder app/dist /usr/share/nginx/html
COPY nginx.conf.txt /etc/nginx/conf.d/default.conf

CMD nginx -g "daemon off;"

