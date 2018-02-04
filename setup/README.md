# Setup for project Hats

Prerequisites
* Docker
* Go

## Start with rabbitmq

```
$ docker run -d --hostname [provide a hostname] --name [provide a container-name] -p 15672:15672 -p 5672:5672 rabbitmq:3-management
```

Check your setup by navigating to  http://localhost:15672/#/. This should open your rabbitmq management console.
 