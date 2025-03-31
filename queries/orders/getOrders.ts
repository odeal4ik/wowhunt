import { useQuery } from '@tanstack/react-query';

export type OrdersListData = {
    current_page: 1;
    from: number;
    to: number; // 2
    path: string; // 'https://dev.wowhunt.com/api/order-items';
    per_page: string; // '2' Количество элементов на странице
    first_page_url: string | null; // URL для поулчения первой страницы пагинации 'https://dev.wowhunt.com/api/order-items?page=1'
    next_page_url: string | null; // 'https://dev.wowhunt.com/api/order-items?page=2';
    prev_page_url: string | null; // 'https://dev.wowhunt.com/api/order-items?page=3'
    data: {
        id: number; //ID заказа
        boost_id: number | null; //ID заказанного буста, может быть null, если буст удален
        user_id: number | null; //ID бустера
        price_booster: string; // Цена для бустера
        amount: number; //Сколько единиц заказали
        status_id: number; //Статус заказа
        attributes: {
            //Атрибуты заказанного товара
            Test: {
                //Ключ, название атрибута, может быть массивом значений
                id: number; // Можно пропустить, не понадобится
                value: string; // Значение атрибута
            };
            Region: {
                id: 0 | 1;
                value: 'EU' | 'US';
            };
            // Пример массива значений,
            Attribute: {
                id: number;
                value: string;
            }[];
        };
        parametrs: null; // Параметры игры для заказа, может быть null
        status: string; // Название статуса заказа
        boost: null; //Объект заказанного буста, может быть пустым
    }[];
};

export function useGetOrders() {
    return useQuery<OrdersListData>({
        queryKey: ['orders'],
        queryFn: async () => {
            const response = await fetch('/api/orders/list');

            if (response.status !== 200) {
                throw { message: 'Unauthorized' };
            }

            const data = await response.json();

            return data;
        },
    });
}
