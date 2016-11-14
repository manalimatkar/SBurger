create database burgers_db;
use burgers_db;

create table burgers(
id integer not null auto_increment,
burger_name varchar(255),
devoured boolean default false,
date timestamp,
primary key (id)
);