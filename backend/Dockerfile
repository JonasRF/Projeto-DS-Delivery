FROM openjdk:17
VOLUME /tmp
EXPOSE 8080
ADD ./target/teste-0.0.1-SNAPSHOT.jar dsDeliver.jar
ENTRYPOINT ["java","-jar","/dsDeliver.jar"]