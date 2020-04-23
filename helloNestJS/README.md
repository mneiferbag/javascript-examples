JavaScript NestJS Example
=========================

Licensed under the MIT License. See file LICENSE in parent directory.

The provided `Dockerfile` can be used to build a Docker image that includes latest Node.js and NestJS. Build the image with `docker build -t hello-nestjs .` Create a container and start it with `docker run -it --name hello-nestjs -v $PWD:/home/app -p 8080:3000 hello-nestjs`. Run a Bash inside the running container with `docker exec -it $(docker ps -qf "name=hello-nestjs") /bin/bash`.

Run the application with `npm run start`.

To create a controller using the NestJS CLI, execute the command `nest g controller <name>`.

