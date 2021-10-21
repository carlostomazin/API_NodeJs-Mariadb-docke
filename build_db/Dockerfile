FROM mariadb:latest

ENV MARIADB_ROOT_PASSWORD=root
	
ADD schema.sql /docker-entrypoint-initdb.d
