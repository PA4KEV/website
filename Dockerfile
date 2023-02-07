# stage1 - build react app first 
FROM node:19.3.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN npm install
COPY . /app
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:1.19.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
