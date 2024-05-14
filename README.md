# Documentación del Proyecto

## Descripción
Creacion de un namespace y subir un contenedor de docker hub

## Creacion de Imagen
Crearemos la Imagen de microservicio y lo desplegaremos

1. Creamos la imagen:
    ```
    docker build -t <userDockerhub>/<name_image> .
    ```
   Ejemplo:
    ```
    docker build -t jhanmarcogodoylevano/container .
    ```

2. Despliegue del contenedor:
    ```
    docker run -d -p PORT:PORT <userDockerhub>/<name_image>
    ```
   Ejemplo:
    ```
    docker run -d -p 8080:8080 jhanmarcogodoylevano/container 
    ```
3. Apagar los contenedores que se estan ejecutando:
    ```
    docker stop $(docker ps -q)
    ```
    Apagar el contenedor especifico:
    ```
    docker stop <ID-contenedor>
    ```
   Listar los contenedores:
    ```
    docker ps
    ```
## el usuario Proviene de Aqui
![image](https://github.com/JhanmarcoGodoyLevano/PrimerClusterKubernetes/assets/111781171/c992f5ef-fdcb-43d7-be47-0468cebf0c9f)

## Creacion de Namespace
1. Creamos el namespace:
    ```
   kubectl create namespace <nombre_namespace>
    ```
    Ejemplo
    ```
   kubectl create namespace vallegrande
    ```
2. Verificar si se creo el namespace
    ```
   kubectl get namespaces
    ```
    ![image](https://github.com/JhanmarcoGodoyLevano/PrimerClusterKubernetes/assets/111781171/e9e464e7-73f0-4bb1-8ea8-3b9203643b2f)
   
## Configuracion de los archivos YAML
1. Para guardar los cambios o crear el pod, deployment y service:
    ```
   kubectl apply -f pod.yaml
    ```
    ```
   kubectl apply -f deployment.yaml
    ```
    ```
   kubectl apply -f service.yaml
    ```

## Publicar en Docker hub la imagen
tenemos que publicar el proyecto en docker hub para que el service pueda tener acceso

1. Logearse en docker
   ```
   docker login
    ```
2. Etiquetar la imagen (por si no la creaste con tu nombre de usuario)
   ```
   docker tag nombre_imagen <userDockerhub>/<nombre_imagen>
   ```
   Ejemplo
   ```
   docker tag container jhanmarcogodoylevano/container
    ```
3. Subir la imagen
   ```
   docker push <userDockerhub>/<nombre_imagen>
    ```
   Ejemplo
   ```
   docker push jhanmarcogodoylevano/container
    ```
## Despliegue
Si quieres contribuir a este proyecto, sigue estos pasos:

1. Verificar si pudo descargar la imagen
    ```
    kubectl get pods -n <namespace>
    ```
   Ejemplo
    ```
    kubectl get pods -n vallegrande
    ```
    ![image](https://github.com/JhanmarcoGodoyLevano/PrimerClusterKubernetes/assets/111781171/e96a3766-c17c-42ce-8a21-b50b1d95f6d7)
2. Abrir la URL :
   ```
    http://localhost:<puerto>
    ```
   Ejemplo
   ```
    http://localhost:8080
    ```
![image](https://github.com/JhanmarcoGodoyLevano/PrimerClusterKubernetes/assets/111781171/a76718e9-44db-4bd1-887c-76666b809207)

# ¡Contenedor Desplegado en Kubernetes! 🚀
## Soporte
Si necesitas ayuda con este proyecto, por favor contacta a [Jhamarco](mailto:jhanmarco.godoy@vallegrande.edu.pe).


