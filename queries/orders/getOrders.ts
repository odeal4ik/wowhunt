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
        /** ID заказа */
        id: number;
        /** ID заказанного буста, может быть null, если буст удален */
        boost_id: number | null;
        /** ID бустера */
        user_id: number | null;
        /** Цена для бустера */
        price_booster: string;
        /** Сколько единиц заказали */
        amount: number;
        /** Статус заказа */
        status_id: number;
        attributes: {
            /** Атрибуты заказанного товара */
            Test: {
                /** Ключ, название атрибута, может быть массивом значений */
                /** Можно пропустить, не понадобится*/
                id: number;
                /** Значение атрибута */
                value: string;
            };
            /** Регион */
            Region: {
                id: 0 | 1;
                value: 'EU' | 'US';
            };
            /** Пример массива значений */
            Attribute: {
                id: number;
                value: string;
            }[];
        };
        /** Параметры игры для заказа, может быть null */
        parametrs: null;
        /** Название статуса заказа */
        status: string;
        /** Объект заказанного буста, может быть пустым */
        boost: { id: number; name: string } | null;
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
