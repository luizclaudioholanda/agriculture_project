## Description

Teste Brain Agriculture

## Installation

Need to install docker and docker-compose on local machine.

```
https://docs.docker.com/engine/install/
https://docs.docker.com/compose/install/
```

## Running the app

Build the image.
Once downloaded or clone de repository, must run the following commands on root of project.

```bash
$ docker compose up
```

These commands should start the application on port 3000.
Also, will be avaiable pgAdmin on port 16543, and postgres database on default port 5432.

## Swagger

Sagger is also installed and configured on this application. To access all enpoints just enter the url, http://localhost:3000/api

## Test

```bash
# unit tests
$ yarn run test

# test coverage
$ yarn run test:cov
```
## Stay in touch

- Author - [Luiz Claudio](https://www.linkedin.com/in/luiz-claudio-de-holanda/)