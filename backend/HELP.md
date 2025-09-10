# Getting Started

### Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/3.5.5/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/3.5.5/maven-plugin/build-image.html)
* [Spring Web](https://docs.spring.io/spring-boot/3.5.5/reference/web/servlet.html)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/3.5.5/reference/using/devtools.html)
* [Validation](https://docs.spring.io/spring-boot/3.5.5/reference/io/validation.html)
* [OpenAI](https://docs.spring.io/spring-ai/reference/api/chat/openai-chat.html)
* [Spring Data Couchbase](https://docs.spring.io/spring-boot/3.5.5/reference/data/nosql.html#data.nosql.couchbase)
* [Spring Boot Actuator](https://docs.spring.io/spring-boot/3.5.5/reference/actuator/index.html)
* [Spring Configuration Processor](https://docs.spring.io/spring-boot/3.5.5/specification/configuration-metadata/annotation-processor.html)
* [Spring Batch](https://docs.spring.io/spring-boot/3.5.5/how-to/batch.html)
* [Prometheus](https://docs.spring.io/spring-boot/3.5.5/reference/actuator/metrics.html#actuator.metrics.export.prometheus)
* [Sentry](https://docs.sentry.io/platforms/java/)

### Guides
The following guides illustrate how to use some features concretely:

* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Validation](https://spring.io/guides/gs/validating-form-input/)
* [Building a RESTful Web Service with Spring Boot Actuator](https://spring.io/guides/gs/actuator-service/)
* [Creating a Batch Service](https://spring.io/guides/gs/batch-processing/)
* [Getting Started with Sentry](https://docs.sentry.io/platforms/java/guides/spring-boot/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.

