select * from transacoes;

select
  id_transacoes as ID_transacoe,
  data as data,
  produto as prroduto,
  valor as valor
  
from transacoes;

select * from transacoes
where valor > 100;

select * from transacoes
order by valor desc;

select
  avg (valor) as media,
  max (valor) as Valor_Maximo,
  min (valor) as Valor_Minimo,
  count (*) as quantidade
  
From transacoes;

select
  produto,
  avg (valor) as Media
  from transacoes
  group by produto;

select
  produto,
  count(*) as Quantidade,
  sum (valor) as Valor_Total,
  avg (valor) as media
  from transacoes
  group by produto;
