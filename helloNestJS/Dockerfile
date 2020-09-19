FROM node:latest

RUN apt-get update && \
    apt-get install -y nano vim
RUN npm i -g @nestjs/cli

WORKDIR /home/app

USER node

ENV PORT 3000

EXPOSE 3000

CMD ["/bin/bash"]

