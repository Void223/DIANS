
FROM openjdk:11-jdk

WORKDIR /src


COPY src/*.jar dians.jar
COPY src/main/resources/application.properties ./


EXPOSE 8080

CMD ["java", "-jar", "my-spring-app.jar"]
