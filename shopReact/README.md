JavaScript React Shop Example
=============================

Licensed under the MIT License. See file LICENSE in parent directory.

The provided `Dockerfile` can be used to build a Docker image that includes latest Node.js. Build the image with `docker build -t shop-react .` Create a container and start it with `docker run -it --name shop-react -v $PWD:/home/app -p 8080:3000 shop-react`. Run a Bash inside the running container with `docker exec -it $(docker ps -qf "name=shop-react") /bin/bash`.

Create application skeleton with `npx create-react-app shop-react`.

Run the application with `npm start`.
