create table products (
id SERIAL PRIMARY KEY,
name text,
price integer,
image text
);

insert into (name, price, image)
values ('Hat', 20.00, 'https://cdn.supadupa.me/shop/8252/images/2540229/Ha_Camello_angle_Front_2048x2048_TO_SEND_large.jpg?1486992913'),
('Shirt', 15.00, 'https://assets.academy.com/mgen/50/10740350.jpg'),
('Sandwich', 5.00, 'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX1541490.jpg');