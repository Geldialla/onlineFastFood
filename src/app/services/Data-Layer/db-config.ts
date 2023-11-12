import { LocalDbConfig } from './geldi-be-mock.modue';

export const dbConfig: LocalDbConfig[] = [
    {
        table: "Product",
        columns: ['id', 'image', 'title', 'name', 'category', 'description', 'price']
    },
    {
        table: "Order",
        columns: ['id', 'userId', 'productId', 'productName', 'productPrice']
    },
    {
        table: "Category",
        columns: ['id', 'productId']
    },
];