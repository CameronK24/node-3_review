insert into backpack_item
(item_name, item_purpose)
values
($1, $2);

select * from backpack_item;