create database loginUser;

use loginUser;


create table user (username varchar(255),
                            password varchar(255),
                                     role ENUM('first','second','third'));

