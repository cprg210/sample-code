# Backend Notes
## Docker (optional)
Warning: We won't have time to cover Docker in class. Have your search skills handy if you want to research this further.

You may notice two Docker files in the directory. These have been given provided in case you want to try installing Node using Docker.

Docker is an alternative to installing Node directly on your system. Here's how your instructor will run a development environment:

1. In the shell: Navigate to your directory containing `Dockerfile` and `docker-compose.yml`.

2. Start your docker container by entering the following. 

    ```shell
    $ docker up
    ```

This may take a few minutes the first time and lots of text should start flying across your screen. Make sure you do this in a coffee shop to impress the public.

The window will eventually hang (i.e. become useless) saying "`Attaching to tech-careers`". This means your container is running and is available to ssh into.

3. SSH into your container. Open a new terminal window, navigate to the same directory and enter the following:

```shell
$ docker exec -it tech-careers bash
```

Your terminal prompt will now look different because you're now inside your virtual server! Proceed with the course material.