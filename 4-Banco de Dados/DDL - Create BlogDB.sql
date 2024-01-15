Create database BlogDG;
Create table Autor (
	AutorID int not null auto_increment,
	NomeAutor varchar (255) not null,
	email varchar (255) not null,
	primary key (AutorID)
);
Create table Post (
	PostID int not null auto_increment,
	titulo varchar(255) not null,
	Conteudo Text not null,
	DataPublicacao Datetime not null,
	AutorID int not null,
	Primary key (PostID),
	Foreign Key (AutorID) references Autor (AutorID)
).
Create table Comentario (
	ComentarioID int not null auto_increment,
	TextoComentario varchar(255) not null,
	DataComentario datetime not null,
	AutorID int not null,
	PostID int not null,
	Primary key (ComentarioID),
	Foreign key (AutorID) references Autor (AutorID),
	Foreign key (PostID) references Post (PostID)
);

Alter table post
Add constraint fk_Post_AutorID foreign key (AutorID) references Autor (AutorID);

Alter table Comentario
Add constraint fk_comentario_AutorID foreign key (AutorID)
references Autor (AutorID);

Alter table Comentario
Add constraint fk_comentario_PostID foreign Key (PostID)
references Post (PostID);