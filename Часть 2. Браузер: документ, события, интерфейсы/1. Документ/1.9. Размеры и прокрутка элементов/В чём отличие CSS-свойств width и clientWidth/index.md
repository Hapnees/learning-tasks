1. elem.clientWidth возвращает число, а getComputedStyle(elem).width – строку с px на конце
2. getComputedStyle не всегда даст ширину
3. clientWidth соответствует внутренней области элемента, включая внутренние отступы, а CSS-ширина соответствует внутренней области без внутренних отступов padding
