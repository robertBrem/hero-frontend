FROM nginx:latest

MAINTAINER Robert Brem <robert.brem@adesso.ch>

COPY dist/ /usr/share/nginx/html
