CREATE TABLE pessoas(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE,
    genero VARCHAR(1)
);
INSERT INTO pessoas (nome, nascimento, genero) VALUES ('camila', '2001-10-27','F');
INSERT INTO pessoas (nome, nascimento, genero) VALUES ('humberto', '2000-06-06','M');
INSERT INTO pessoas (nome, nascimento, genero) VALUES ('kustavo', '2000-06-08','M');
INSERT INTO pessoas (nome, nascimento, genero) VALUES ('breno','2001-10-26','M')

UPTADE pessoas nome="gustavo" where nome="kustavo";

DELETE from pessoas where nome='breno';
   
SELECT * FROM pessoas ORDER BY nome 
-- ASC

SELECT * FROM pessoas ORDER BY nome DESC

SELECT COUNT(id), genero FROM pessoa GROUP BY genero;