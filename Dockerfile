FROM node:14.13 as build

WORKDIR /app

COPY package.json yarn.lock /app/
RUN yarn

COPY . /app/
RUN yarn build



FROM nginx:stable

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
