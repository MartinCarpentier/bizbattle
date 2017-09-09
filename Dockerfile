# Create image based on the official Node 6 image from dockerhub
FROM nginx:alpine

COPY dist/ /usr/share/nginx/html

# Expose the port the app runs in
EXPOSE 80
