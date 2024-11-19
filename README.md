# Tutorial para executar o docker

Executar `docker build -t angular_image .` no mesmo diretório do arquivo Dockerfile para gerar a imagem.

Após gerar a imagem, executar o container através do comando `docker run --name angular_container -p 4200:4200 angular_image`

A ligação da porta é feita através da flag -p que liga a porta 4200 do computador com a porta 4200 do container, para ver o projeto rodando, vá para localhost:4200

## Observação

O projeto já estava feito há alguns meses, com o único propósito de estudar Angular, por isso não possui uma forma ou objetivo, são apenas alguns componentes soltos na página, entretando o projeto foi escolhido por possuir algumas dependências, que era uma boa escolha para o trabalho de Docker.
