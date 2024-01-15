Create table Produtos (
	ProdutoID int not null auto_increment,
	NomeProduto varchar (255) not null,
	Preco decimal (10,2) not null,
	QuantidadeEmEstoque int not null,
	Primary key (ProdutoID)
);
Insert into produtos (
	ProdutoID,
	NomeProduto,
	Preco,
	QuantidadeEmEstoque
) values (1,"Smartphone",799.99,20),(2,"Tablet",349.99,10),(3,"Fone de Ouvido",49.99,50);

Update Produtos
Set
	QuantidadeEmEstoque = 25,
	Preco = 849.99 
Where
	ProdutoID = 1;

Update Produtos
Set
	QuantidadeEmEstoque = QuantidadeEmEstoque =5
Where
ProdutoID = 2;

Update Produtos
Set
	QuantidadeEmEstoque = QuantidadeEmestoque = 10
Where
	ProdutoID = 3;

Select*From produtos

aaa
