CREATE TABLE Usuario (
	ID int,
	Name varchar(255),
	Password varchar(255),
	RoleID int,
);

CREATE TABLE Role (
	ID int,
	Name varchar(255),
);

CREATE TABLE Reputacion (
	ID int,
	userCreatorID int(255),
	userReceptorID varchar(255),
	Description varchar(255),
	Stars int,
);