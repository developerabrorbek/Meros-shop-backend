
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(99) NOT NULL,
  password VARCHAR(12) NOT NULL,
  role VARCHAR(19) NOT NULL,
  phone VARCHAR(21) NOT NULL,
  email VARCHAR(255) NOT NULL,
  access_token VARCHAR DEFAULT NULL,
  refresh_token VARCHAR DEFAULT NULL,
  deleted_at TIMESTAMP DEFAULT NULL
);


CREATE TABLE category(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE sub_category(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  parent_id INTEGER NOT NULL REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE double_sub_category(
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  parent_id INTEGER NOT NULL REFERENCES sub_category(id) ON DELETE CASCADE
);



CREATE TABLE product (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  price VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  year INTEGER ,
  count INTEGER NOT NULL,
  category_id INTEGER  REFERENCES double_sub_category(id) ON DELETE CASCADE,
  images TEXT []
);

CREATE TABLE images (
  id SERIAL PRIMARY KEY,
  link VARCHAR NOT NULL,
  product_id INTEGER  REFERENCES product(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES product(id),
  user_id INTEGER REFERENCES userS(id) ON DELETE CASCADE,
  address VARCHAR NOT NULL,
  phone VARCHAR NOT NULL,
  ordered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE OR REPLACE VIEW all_categories_with_products AS
    SELECT category.*, array_agg(to_json(sub_category.*)) AS subcategory FROM category INNER JOIN (SELECT sub_category.*,array_agg(to_json(dsc.*)) AS subcategory FROM sub_category INNER JOIN (SELECT * FROM category_with_product) AS dsc ON sub_category.id = dsc.parent_id GROUP BY sub_category.id) AS sub_category ON category.id = sub_category.parent_id GROUP BY category.id;


CREATE OR REPLACE VIEW sub_category_with_products AS
				SELECT sc.*, array_agg(to_json(dsc.*)) AS subcategory FROM sub_category AS sc FULL JOIN (SELECT * FROM category_with_product) AS dsc ON sc.id = dsc.parent_id GROUP BY sc.id;


CREATE OR REPLACE VIEW category_with_product AS
    SELECT category.*, array_agg(to_json(product.*)) AS products FROM double_sub_category AS category INNER JOIN product ON category.id = product.category_id  GROUP BY category.id;


CREATE OR REPLACE VIEW products_with_images AS
SELECT product.*, array_agg(to_json(images.*)) AS product_images FROM product JOIN images ON product.id = images.product_id GROUP BY product.id;    

CREATE OR REPLACE VIEW all_users AS
    SELECT users.*, array_agg(to_json(orders.*)) AS order FROM users FULL JOIN orders ON users.id = orders.user_id GROUP BY users.id;

