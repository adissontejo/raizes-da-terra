# Stage 1 – Build
FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /workspace

# Copy dependency descriptors first for better layer caching
COPY pom.xml ./
COPY mvnw ./
COPY .mvn .mvn

RUN ./mvnw dependency:go-offline -B

COPY src ./src
RUN ./mvnw package -B -DskipTests

# Stage 2 – Runtime
FROM eclipse-temurin:21-jre-alpine AS runtime

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=build --chown=appuser:appgroup /workspace/target/*.jar app.jar

RUN mkdir -p uploads && chown appuser:appgroup uploads

USER appuser

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
