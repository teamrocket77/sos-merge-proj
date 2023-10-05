FROM node:18-bullseye-slim as base 
RUN apt-get update \
	&& apt-get install -y git wget curl \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /SSO
COPY . .
RUN npm ci
