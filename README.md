# Enhance Management Tool

[![CircleCI](https://circleci.com/gh/red-pola/emt/tree/master.svg?style=svg&circle-token=fc14d7770644296f4d55bde1e84297fab7eb99ee)](https://circleci.com/gh/red-pola/emt/tree/master)

## Development

### Using Docker

#### Get Docker

Get [Docker Community Edition](https://www.docker.com/community-edition) for your platform *(Linux, Mac, Windows)*.

#### Spin up the API, UI and Database

```
$ docker-compose up -d
```

#### Stop the server

```
$ docker-compose down
```

#### Rebuild image

```
$ docker-compose up -d --build
```

#### Run rake tasks

```
$ docker-compose run api rake db:create
$ docker-compose run api rake db:migrate
```

#### Run Rails console

```
$ docker-compose run api rails c
```

#### Access to running containers

```
$ docker-compose exec api bash
$ docker-compose exec db psql -h db -U postgres
```

#### View logs

```
$ docker-compose logs api
$ docker-compose logs ui
$ docker-compose logs db
```

### Using your own local environment

#### Set environment variables

Clone `.env.sample` and named it `.env`
