# stage 1 - build react and elm apps first
FROM node:20.5.1-alpine as build

RUN apk update &&\
    apk --no-cache add curl &&\
    curl -sL https://github.com/elm/compiler/releases/download/0.19.1/binary-for-linux-64-bit.gz -o /tmp/elm.gz &&\
    gunzip /tmp/elm.gz &&\
    mv /tmp/elm /usr/local/bin/elm &&\
    chmod +x /usr/local/bin/elm &&\
    apk del curl

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json /app/
RUN npm install
COPY . /app
RUN npm run build
WORKDIR /app/src/michelaben
RUN elm make src/Main.elm --output=index.js

# stage 2 - build the final image and copy the react build files
FROM nginx:1.25.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/src/michelaben /usr/share/nginx/html/michelaben
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
