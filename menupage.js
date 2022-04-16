// Done by Naik Kok Loong only

document.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
});


// All Day Meal
var AD = document.querySelectorAll(".Meal");
for (let i=0; i < AD.length; i++) {
    AD[i].addEventListener('change', () => {

        let product = [
            {
                Name:'Asam Laksa',
                Price: '10.50',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Prawn Mee',
                Price: '11.00',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Wantan Mee',
                Price: '10.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Pan Mee',
                Price: '9.80',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Hot)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Cold)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Soya Milk',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Lime Drink',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Cream',
                Price: '5.60',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Kacang',
                Price: '3.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Nugget',
                Price: '3.20',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Curry Puff',
                Price: '2.80',
                ItemValue: 0,
                Total: 0
            }
        ]

        const itemlist = document.getElementsByClassName("Meal");
        setItems(product[i], itemlist[i].value);
        calculation(product[i]);

        var total = 0;

        for( let i=0; i<12; i++) {
            product[i].Price = parseFloat(product[i].Price)
            let x = parseFloat(itemlist[i].value)

            total += x * product[i].Price;
        }

        localStorage.setItem("GrandTotal", total)

        FoodName(product[i]);
    })
}




// Breakfast
var BK = document.querySelectorAll(".Breakfast");
for (let i=0; i < BK.length; i++) {
    BK[i].addEventListener('change', () => {

        let product = [
            {
                Name:'Milk Hainan Toast',
                Price: '6.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Kaya & Steamed',
                Price: '8.00',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Peanut Butter Toast',
                Price: '7.60',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Garlic Toast',
                Price: '7.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Hot)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Cold)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Soya Milk',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Lime Drink',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Cream',
                Price: '5.60',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Kacang',
                Price: '3.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Nugget',
                Price: '3.20',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Curry Puff',
                Price: '2.80',
                ItemValue: 0,
                Total: 0
            }
        ]

        const itemlist = document.getElementsByClassName("Breakfast");
        setItems(product[i], itemlist[i].value);
        calculation(product[i]);

        var total = 0;

        for( let i=0; i<12; i++) {
            product[i].Price = parseFloat(product[i].Price)
            let x = parseFloat(itemlist[i].value)

            total += x * product[i].Price;
        }

        localStorage.setItem("GrandTotal", total)

        FoodName(product[i]);
    })
}




// Lunch
var LH = document.querySelectorAll(".Lunch");
for (let i=0; i < LH.length; i++) {
    LH[i].addEventListener('change', () => {

        let product = [
            {
                Name:'Vegetarian Curry Noddle',
                Price: '13.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Nasi Lemak with Chicken Rendang',
                Price: '16.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Chicken Bites Rice',
                Price: '12.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'BBQ Pork RIce',
                Price: '13.50',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Hot)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Cold)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Soya Milk',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Lime Drink',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Cream',
                Price: '5.60',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Kacang',
                Price: '3.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Nugget',
                Price: '3.20',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Curry Puff',
                Price: '2.80',
                ItemValue: 0,
                Total: 0
            }
        ]

        const itemlist = document.getElementsByClassName("Lunch");
        setItems(product[i], itemlist[i].value);
        calculation(product[i]);

        var total = 0;

        for( let i=0; i<12; i++) {
            product[i].Price = parseFloat(product[i].Price)
            let x = parseFloat(itemlist[i].value)

            total += x * product[i].Price;
        }

        localStorage.setItem("GrandTotal", total)

        FoodName(product[i]);
    })
}



// Dinner
var DR = document.querySelectorAll(".Dinner");
for (let i=0; i < DR.length; i++) {
    DR[i].addEventListener('change', () => {

        let product = [
            {
                Name:'Chicken Rice',
                Price: '8.00',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Laksa Prawn Soup',
                Price: '9.00',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Beef Noodles',
                Price: '10.00',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Porridge',
                Price: '7.50',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Hot)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Black Tea (Cold)',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Soya Milk',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Lime Drink',
                Price: '1.70',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Cream',
                Price: '5.60',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Ice Kacang',
                Price: '3.40',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Nugget',
                Price: '3.20',
                ItemValue: 0,
                Total: 0
            },
            {
                Name:'Curry Puff',
                Price: '2.80',
                ItemValue: 0,
                Total: 0
            }
        ]

        const itemlist = document.getElementsByClassName("Dinner");
        setItems(product[i], itemlist[i].value);
        calculation(product[i]);

        var total = 0;

        for( let i=0; i<12; i++) {
            product[i].Price = parseFloat(product[i].Price)
            let x = parseFloat(itemlist[i].value)

            total += x * product[i].Price;
        }

        console.log(product[i].Name)

        localStorage.setItem("GrandTotal", total)

        FoodName(product[i]);
    })
}


function FoodName(product) {

    let productstore = localStorage.getItem('Product');
    productstore = JSON.parse(productstore)

    if(productstore != null) {
        
        productstore = {
            ...productstore,
            [product.Name]: product
        }
        
    } else {
        productstore = {
            [product.Name]: product
        }
    }
    
    localStorage.setItem("Product", JSON.stringify(productstore));

}

function setItems(product, x) {
    x = parseInt(x);
    product.ItemValue = x;
}


function calculation(product) {
    
    product.Price = parseFloat(product.Price);

    if ( product.Total != 0 ) {
        product.Total = product.Total + product.ItemValue * product.Price;
    } else {
        product.Total = product.ItemValue * product.Price;
    }

}




function displayProduct() {
    let product = localStorage.getItem('Product');
    product = JSON.parse(product);

    let GrandTotal = localStorage.getItem('GrandTotal');
    GrandTotal = parseFloat(GrandTotal)

    let productContainer = document.querySelector('.product-container');

    if( product && productContainer ) {

        Object.values(product).map(item => {
            productContainer.innerHTML += `
            <tr style="height: 50px" class="header">
                <td>${item.Name}</td>
                <td>${item.Price.toFixed(2)}</td>
                <td>${item.ItemValue}</td>
                <td>RM ${item.Total.toFixed(2)}</td>
            </tr>
            `
            
        });

        productContainer.innerHTML += `
            <tr class="GrandTotal">
                <td colspan="3" class="GTOutput"> Grand Total: </td>
                <td class="GTAmount">RM ${GrandTotal.toFixed(2)} </td>
            </tr> 
            `

    }
}


displayProduct();

