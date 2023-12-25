database tables

users {
id varchar pk unique
f_name varchar(25) null
u_name varchar(25) null
email varchar null
birth_date date null
phone varchar unique
address text null
language int def(0)
dark_mode int def(0)
pass_code int null
amount float def(0)
account_id varchar unique
active int def(0)
image varchar
male int def(0)
age varchar
created_at date
updated_at date
}

genre {
id varchar pk unique
name varchar
image varchar
created_at date
updated_at date
}

notification {
id varchar pk unique
title varchar
desc varchar
type int
created_at date
updated_at date
}

devices {
id varchar pk unique
phone_id varchar unique null
phone_model varchar null
last_date date
}

images {
id varchar pk unique
x varchar
xx varchar
xl varchar
xm varchar
}
