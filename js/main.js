let jobs = [
    {
        id: 1,
        company_name: "raximjon_pepsi",
        tax: 13,
        budget: 2_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 15000
            },
            {
                title: "salary",
                total: 500_000
            },
            {
                title: "rent",
                total: 200_000
            },
        ]
    },
    {
        id: 2,
        company_name: "amir_fanta_stick",
        tax: 12,
        budget: 1_800_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 20_000
            },
            {
                title: "salary",
                total: 700_000
            },
            {
                title: "rent",
                total: 100_000
            },
        ]
    },
    {
        id: 3,
        company_name: "frump_buildings",
        tax: 14,
        budget: 3_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 50_000
            },
            {
                title: "salary",
                total: 1_200_000
            },
            {
                title: "rent",
                total: 500_000
            },
        ]
    },
    {
        id: 4,
        company_name: "farrux_tube",
        tax: 12,
        budget: 10_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 4_000_000
            },
            {
                title: "rent",
                total: 300_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 5,
        company_name: "desla",
        tax: 14,
        budget: 14_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 700_000
            },
            {
                title: "salary",
                total: 3_000_000
            },
            {
                title: "rent",
                total: 5_000_000
            },
        ]
    },
    {
        id: 6,
        company_name: "nosway_u_rustama",
        tax: 10,
        budget: 100_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 10_000
            },
            {
                title: "salary",
                total: 0
            },
            {
                title: "rent",
                total: 0
            },
        ]
    },
    {
        id: 6,
        company_name: "vinovodochnaya_u_timura",
        tax: 21,
        budget: 1_000_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 20_000
            },
            {
                title: "rent",
                total: 30_000
            },
        ]
    },
    {
        id: 7,
        company_name: "sokhib_books",
        tax: 10,
        budget: 400_000,
        expensesPerYear: [
            {
                title: "furniture",
                total: 40_000
            },
            {
                title: "salary",
                total: 12_000
            },
            {
                title: "rent",
                total: 15_000
            },
        ]
    }
]

let a = [];
let b = [];
let all =0;
console.log(jobs);
let arr = []
let objiyrashod
for (let item of jobs) {
  let total = Math.round(
    item.expensesPerYear.reduce((a, b) => a + b.total, 0) / 12
  );
 
  let budget = Math.round(item.budget / 12);
  let tax_summ = (item.tax * budget) / 100;
  
  item.percent = (total * 100) / budget;

  objiyrashod = total + tax_summ;
  arr.push(objiyrashod)
  let asd = budget - objiyrashod;
  if (asd > 0) {
    a.push(item.company_name);
  } else b.push(item.company_name);
}

    console.log(a, b);
console.log(all);



// for (let i = 1; i <= 10; i++) {
//     let password = +prompt('Ваш пароль ${i}');
//     if(password === 7777) {
//         alert('Верный пароль вы ввели с ${i} попытки');
//         break
//     } else {
//         alert('уходи');
//     }
// }