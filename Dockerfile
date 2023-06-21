# stage1 as builder
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm i -f
COPY . .
RUN npm run build

# FROM nginx:stable-alpine as production-build
# COPY ./config/nginx-dev.conf /etc/nginx/nginx.conf

# ## Remove default nginx index page
# RUN rm -rf /usr/share/nginx/html/*

# # Copy from the stahg 1
# COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 5173
# ENTRYPOINT ["daemon off;"]
CMD [ "npm", "run", "preview" ]
