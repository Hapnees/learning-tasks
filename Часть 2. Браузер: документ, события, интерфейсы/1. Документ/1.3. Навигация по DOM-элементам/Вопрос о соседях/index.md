Если elem – произвольный узел DOM-элемента…

1. Правда, что elem.lastChild.nextSibling всегда равен null?
2. Правда, что elem.children[0].previousSibling всегда равен null ?

1) Да, правда. Потому что elem.lastChild - последний элемент
2) Нет, не правда. Потому что elem.children[0] - непоследний узел
