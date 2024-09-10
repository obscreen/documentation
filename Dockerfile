FROM node:18 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn docs:build

FROM nginx:alpine

COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

# Add MIME types for PNG and JPG files
RUN echo "types { \
    image/png png; \
    image/jpeg jpg jpeg; \
}" > /etc/nginx/conf.d/mime.types

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
