FROM docker-remotes.artifactory.prod.aws.cloud.ihf/mariadb:latest

ENV MARIADB_ROOT_PASSWORD=root
	
ADD schema.sql /docker-entrypoint-initdb.d
