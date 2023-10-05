FROM python:3.9.12 as base 
RUN apt-get update \
	&& apt-get install -y git wget curl \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /SSO
RUN mkdir -p /root/.ssh/
COPY . .
RUN python -m pip install -r reqs.txt

