# JavaScript NestJS Shop Example

Licensed under the MIT License. See file LICENSE in parent directory.

# Installation

The provided `Dockerfile` can be used to build a Docker image that includes latest Node.js and NestJS. Build the image with `docker build -t shop-nestjs .` Create a container and start it with `docker run -it --name shop-nestjs -v $PWD/shop-nestjs:/home/app -p 8080:3000 shop-nestjs`. Run a Bash inside the running container with `docker exec -it $(docker ps -qf "name=shop-nestjs") /bin/bash`.

Create application skeleton with `nest new shop-nestjs`.

To create a controller using the NestJS CLI, execute the command `nest g controller <route path prefix>`.

# Running

Run the application inside the container with `npm run start`.

# Testing

Run Cypress headless with `docker-compose up`. This will start node and Cypress in separate containers. Use the following command to start node and Cypress UI in separate containers.

    docker-compose -f docker-compose.yml -f cypress-open.yml up

Please note that this writes all files with permissions of user `node`, that exists in the cypress/included image and is inherited from the node image.
