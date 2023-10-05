FROM node:18-bullseye-slim as base 
RUN apt-get update \
	&& apt-get install -y git wget curl \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /SSO
RUN mkdir -p /root/.ssh/
RUN git clone https://github.com/davidkenesaw/SSO-website.git
WORKDIR /SSO/SSO-website
RUN ls
RUN npm ci
