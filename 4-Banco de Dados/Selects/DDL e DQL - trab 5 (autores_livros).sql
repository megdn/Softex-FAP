create database autores_livros;

create table autores (
  Autor_id int not null auto_increment,
  nome varchar (255) not null,
  nacionalidade varchar (255) not null,
  primary key (Autor_id)
);

create table livros (
  livro_id int not null auto_increment,
  titulo varchar (255) not null,
  ano_publicacao year not null,
  Autor_id int not null,
  primary key (livro_id),
  foreign key (Autor_id) references autores
);

insert into autores (nome,nacionalidade) values
('J.R.R Tolkien', 'Inglaterra'),
('Paulo Coelho', 'Brasil'),
('J.K Rownling', 'Inglaterra')
('Stephen King', 'EUA'),
('Orhan Pamuk', 'Turquia'),

insert into livros (titulo,ano_publicacao,Autor_id) values
('O senhor dos aneis',1954,1),
('O Alquimista',1988,2),
('Harry Potter e a Pedra Filosofal',1997,3),
('It',1986,4),
('Nómada dos Mares',2006,5);

select
  Autores.nome,
  livros.titulo
from
  Autores
inner join
  livros
on
  Autores.Autor_id = livros.Autor_id;
  
select
  livros,titulo,
  livros.ano_publicacao,
  autores.nome,
  autores.nacionalidade
from
  autores
inner join
  livros
on
  autores.Autor_id = livros.Autor_id;
  
select
  autores.nome,
  livros.titulo,
  livros.ano_publicacao
from
  autores
left join
  livros
on
  autores.Autor_id = livros.Autor_id;
  
select

from
  autores
inner join
  livros
on
  autores.Autor_id = livros.Autor_id
where
autores.nacionalidade = 'Brasil';

select
  count(*) as total_livros
from
  autores
inner join
  livros
on
  autores.Autor_id = livros.Autor_id
where
autores.nacionalidade = 'EUA';




