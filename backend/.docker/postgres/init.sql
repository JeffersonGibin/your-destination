DROP DATABASE your_destination;
CREATE DATABASE your_destination;

-- Remove  todos os registros da tabela "routes"
TRUNCATE public.routes;

-- Popular base de dados com os registros iniciais solicitados pelo desafio

INSERT INTO public.routes(
	id, title, start_position_latitude, start_position_longitude, end_position_latitude, end_position_longitude)
	VALUES ('7162cca6-e2a2-11eb-ba80-0242ac130004', 'Peru', -11.178402, -73.387674, -11.178402, -73.387674);

INSERT INTO public.routes(
	id, title, start_position_latitude, start_position_longitude, end_position_latitude, end_position_longitude)
	VALUES ('803fd930-e2a2-11eb-ba80-0242ac130004', 'Brasil', -16.972741, -48.752713, -16.972741, -48.752713);

INSERT INTO public.routes(
	id, title, start_position_latitude, start_position_longitude, end_position_latitude, end_position_longitude)
	VALUES ('86b3a1a2-e2a2-11eb-ba80-0242ac130004', 'Estados Unidos', 41.508577, -101.3464, 41.508577, -101.3464);

INSERT INTO public.routes(
	id, title, start_position_latitude, start_position_longitude, end_position_latitude, end_position_longitude)
	VALUES ('8a44abae-e2a2-11eb-ba80-0242ac130004', 'França', 47.517201, 3.165784, 47.517201, 3.165784);

INSERT INTO public.routes(
	id, title, start_position_latitude, start_position_longitude, end_position_latitude, end_position_longitude)
	VALUES ('90d7fd72-e2a2-11eb-ba80-0242ac130004', 'Espanha', 40.044438, -2.814769, 40.044438, -2.814769);   