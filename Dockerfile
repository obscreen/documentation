FROM node:18 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# Clear cache before building
RUN yarn cache clean

RUN yarn docs:build

FROM nginx:alpine

# Remove any existing content in the nginx html directory
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

# Add MIME types for PNG and JPG files
RUN echo "types { \
    image/png png; \
    image/jpeg jpg jpeg; \
}" > /etc/nginx/conf.d/mime.types

# Add a timestamp to force cache invalidation
RUN echo "Build timestamp: $(date)" > /usr/share/nginx/html/build_timestamp.txt

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
