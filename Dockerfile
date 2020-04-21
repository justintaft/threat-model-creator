FROM node:latest
MAINTAINER Andrew Phillips <theasp@gmail.com>

WORKDIR /app
ENV CLOJURE_VER=1.10.1.492

RUN apt-get update \
  && apt-get -q -y install openjdk-8-jdk curl \
  && npm install -g shadow-cljs \
  && curl -s https://download.clojure.org/install/linux-install-$CLOJURE_VER.sh | bash
