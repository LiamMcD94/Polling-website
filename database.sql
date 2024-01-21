CREATE DATABASE testPoll;
USE testPoll;

CREATE TABLE poll (
    pollId integer PRIMARY KEY AUTO_INCREMENT,
    pollName VARCHAR(225) NOT_NULL,
    question VARCHAR(225) NOT_NULL,
);

CREATE TABLE options (
    optionId integer PRIMARY KEY AUTO_INCREMENT,
    pollId integer NOT_NULL,
    votes integer NOT_NULL
);

INSERT INTO poll (pollName, question)