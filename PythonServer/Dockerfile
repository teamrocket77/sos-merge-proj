FROM python:3.9.12 as base 
RUN apt-get update \
	&& apt-get install -y git wget curl \
	&& rm -rf /var/lib/apt/lists/*
WORKDIR /SSO
RUN mkdir -p /root/.ssh/
RUN git clone https://github.com/davidkenesaw/SSO-API.git
RUN python -m pip install -r SSO-API/reqs.txt

