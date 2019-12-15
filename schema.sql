CREATE DATABASE FriendFinder;
USE FriendFinder;
-- Create the friends table.
CREATE TABLE friends (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  image_URL VARCHAR (400) NOT NULL,
  answer_1 INT (1) NOT NULL,
  answer_2 INT (1) NOT NULL,
  answer_3 INT (1) NOT NULL,
  answer_4 INT (1) NOT NULL,
  answer_5 INT (1) NOT NULL,
  answer_6 INT (1) NOT NULL,
  answer_7 INT (1) NOT NULL,
  answer_8 INT (1) NOT NULL,
  answer_9 INT (1) NOT NULL,
  answer_10 INT (1) NOT NULL,
  PRIMARY KEY(id)
);

-- Insert a set of records.
INSERT INTO friends (name, image_URL, answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, answer_10) 
VALUES ("Ahmed", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",5,1,4,4,5,1,2,5,4,1);

INSERT INTO friends (name, image_URL, answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, answer_10) 
VALUES ("Joanna", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",5,1,3,1,2,1,2,2,1,1);

INSERT INTO friends (name, image_URL, answer_1, answer_2, answer_3, answer_4, answer_5, answer_6, answer_7, answer_8, answer_9, answer_10) 
VALUES ("Peter", "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",2,4,3,5,2,3,2,1,1,5);
