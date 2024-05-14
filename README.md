# Documentación del Proyecto

## Descripción
Creacion de un namespace y subir un contenedor de docker hub

## Instalación
Para ejecutar este proyecto, sigue los siguientes pasos:

1. Creacion de Imagen:
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
    docker run -d -p PORT:PORT jhanmarcogodoylevano/container 
    ```
    <div>
![image](https://github.com/JhanmarcoGodoyLevano/PrimerClusterKubernetes/assets/111781171/c992f5ef-fdcb-43d7-be47-0468cebf0c9f)

    </div>
3. Para guardar los cambios o crear el pod, deployment y service:
    ```
   kubectl apply -f pod.yaml
    ```
    ```
   kubectl apply -f deployment.yaml
    ```
    ```
   kubectl apply -f service.yaml
    ```
## Publicar en Docker hub
tenemos que publicar el proyecto en docker hub para que el service pueda tener acceso

1. Renombrar la imagen ():
    ```
    npm start
    ```

2. Abre tu navegador web y navega a la siguiente URL:
    ```
    http://localhost:3000
    ```

## Contribución
Si quieres contribuir a este proyecto, sigue estos pasos:

1. Crea una nueva rama para tu contribución:
    ```
    git checkout -b mi-contribucion
    ```

2. Realiza tus cambios y añade tus contribuciones.

3. Haz un commit de tus cambios:
    ```
    git commit -m "Añade mi contribución"
    ```

4. Sube tus cambios a la rama remota:
    ```
    git push origin mi-contribucion
    ```

5. Abre una solicitud de extracción en GitHub.

## Soporte
Si necesitas ayuda con este proyecto, por favor contacta a [Nombre del Propietario](mailto:correo@dominio.com).

## Licencia
Este proyecto está bajo la Licencia [Nombre de la Licencia](URL_de_la_licencia).

