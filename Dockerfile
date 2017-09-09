# Create image based on the official Node 6 image from dockerhub
FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/
COPY dist/ /app

# Expose the port the app runs in
EXPOSE 80
