INSERT INTO Role (ID, name)
VALUES (1,'usuario_femenino');

INSERT INTO Role (ID, name)
VALUES (2,'usuario_conductor');

INSERT INTO Usuario (ID, Name, Password, RoleID)
VALUES (1,'user1’,’XXXX’,1);

INSERT INTO Usuario (ID, Name, Password, RoleID)
VALUES (2,'user2’,’XXXXxx’,2);

INSERT INTO Reputacion (ID, userCreatorID, userReceptorID, Description, Stars)
VALUES (1,1,2,’description’, ‘4’);