USE burgers_db;

INSERT INTO burgers(burger_name, devoured)
VALUES("Big Mac", true), ("Quarter Pounder", false), ("Veggie Burger", false);

-- INSERT INTO burgers(burger_name, devoured)
-- VALUES('Quarter Pounder', 0);

-- INSERT INTO burgers(burger_name, devoured)
-- VALUES('Veggie Burger', 1);

SELECT * FROM burgers;
