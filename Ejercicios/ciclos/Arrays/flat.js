//Crea una nuevo array con todos los elementos de sub-array concatenados recursivamente hasta la profundidad especificada.

let arr = [1, 2, 3, [4, 5, [6, 7]]];
let array_nuevo = arr.flat();
console.log(array_nuevo);

let arr_letras = ["A", "B", , "D", "E"];
let array_nuevo_ = arr_letras.flat();
console.log(array_nuevo_)

let nombres_array = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4, [5, 6, [7, 8, 9]]]]];
console.log(nombres_array.flat(2));


var arr3 = [
  1, 
  2, 
  [
    3, 
    4, 
    [5, 6]
  ],
  [
    1, 
    2,
    [ 'yeison']
  ],
  [
    1,
    [
      1, 2
    ],
    [
      'r',
      'r',
      [ 
        'a', 
        'b', 'c'
      ]
    ]
  ]
];

console.log(arr3.flat(3));