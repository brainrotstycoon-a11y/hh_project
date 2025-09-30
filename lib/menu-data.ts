export interface MenuItem {
  name: string
  priceUSD: string
  priceLBP: number
  image: string
  description?: string
}

export interface Category {
  id: string
  name: string
  items: MenuItem[]
}

export const menuData: Category[] = [
  {
    id: "hot-beverages",
    name: "Hot Beverages",
    items: [
      {
        name: "Espresso",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/espresso-shot-coffee-cup.jpg",
      },
      {
        name: "Cappuccino",
        priceUSD: "1.20",
        priceLBP: 84000,
        image: "/cappuccino-coffee-foam-art.jpg",
      },
      {
        name: "Cappuccino Luxe",
        priceUSD: "1.60",
        priceLBP: 112000,
        image: "/luxury-cappuccino-latte-art.jpg",
      },
      {
        name: "Latte",
        priceUSD: "1.30",
        priceLBP: 91000,
        image: "/latte-coffee-milk-foam.jpg",
      },
      {
        name: "Spanish Latte",
        priceUSD: "1.60",
        priceLBP: 112000,
        image: "/spanish-latte-condensed-milk-coffee.jpg",
      },
      {
        name: "Mocha",
        priceUSD: "2.00",
        priceLBP: 140000,
        image: "/mocha-chocolate-coffee-whipped-cream.png",
      },
      {
        name: "Moccachito",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/moccachito-coffee-drink.jpg",
      },
      {
        name: "American Coffee",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/americano-black-coffee-cup.jpg",
      },
      {
        name: "Caramel Mocha",
        priceUSD: "1.90",
        priceLBP: 133000,
        image: "/caramel-mocha-coffee-drizzle.jpg",
      },
      {
        name: "Flat White",
        priceUSD: "1.50",
        priceLBP: 105000,
        image: "/flat-white-coffee-microfoam.jpg",
      },
      {
        name: "Hot Chocolate",
        priceUSD: "1.60",
        priceLBP: 112000,
        image: "/hot-chocolate-marshmallows-whipped-cream.jpg",
      },
      {
        name: "Tea (all kinds)",
        priceUSD: "0.50",
        priceLBP: 35000,
        image: "/tea-cup-herbal-green-black.jpg",
      },
    ],
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    items: [
      {
        name: "Caramel Frappe",
        priceUSD: "3.50",
        priceLBP: 245000,
        image: "/caramel-frappe-iced-coffee-whipped-cream.jpg",
      },
      {
        name: "Cappuccino Frappe",
        priceUSD: "3.50",
        priceLBP: 245000,
        image: "/cappuccino-frappe-iced-blended.jpg",
      },
      {
        name: "Chocolate Frappe",
        priceUSD: "3.50",
        priceLBP: 245000,
        image: "/chocolate-frappe-iced-drink.jpg",
      },
      {
        name: "Lemonade Mint",
        priceUSD: "2.00",
        priceLBP: 140000,
        image: "/lemonade-mint-fresh-drink.jpg",
      },
      {
        name: "Blue White Lemonade",
        priceUSD: "2.50",
        priceLBP: 175000,
        image: "/blue-lemonade-refreshing-drink.jpg",
      },
      {
        name: "Cold Nescafe",
        priceUSD: "1.70",
        priceLBP: 119000,
        image: "/iced-nescafe-cold-coffee.jpg",
      },
      {
        name: "Blend",
        priceUSD: "2.00",
        priceLBP: 140000,
        image: "/blended-iced-coffee-drink.jpg",
      },
    ],
  },
  {
    id: "milkshakes",
    name: "Milkshakes",
    items: [
      {
        name: "Passion Fruits Milkshake",
        priceUSD: "4.50",
        priceLBP: 315000,
        image: "/passion-fruit-milkshake-tropical.jpg",
      },
      {
        name: "Mango Milkshake",
        priceUSD: "4.50",
        priceLBP: 315000,
        image: "/mango-milkshake-yellow-creamy.jpg",
      },
      {
        name: "Strawberry Milkshake",
        priceUSD: "3.80",
        priceLBP: 266000,
        image: "/strawberry-milkshake-pink-whipped-cream.jpg",
      },
      {
        name: "Peach Milkshake",
        priceUSD: "3.80",
        priceLBP: 266000,
        image: "/peach-milkshake-orange-creamy.jpg",
      },
      {
        name: "Watermelon Milkshake",
        priceUSD: "3.80",
        priceLBP: 266000,
        image: "/watermelon-milkshake-red-fresh.jpg",
      },
    ],
  },
  {
    id: "soft-drinks",
    name: "Soft Drinks & Energy",
    items: [
      {
        name: "Iced Tea Peach",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/iced-tea-peach-bottle-can.jpg",
      },
      {
        name: "Iced Tea Tropical Tank",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/iced-tea-tropical-drink-can.jpg",
      },
      {
        name: "XXL Energy Drink",
        priceUSD: "1.70",
        priceLBP: 119000,
        image: "/xxl-energy-drink-can.jpg",
      },
      {
        name: "Dark Blue Energy",
        priceUSD: "1.70",
        priceLBP: 119000,
        image: "/dark-blue-energy-drink-can.jpg",
      },
      {
        name: "Laziza",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/laziza-soft-drink-can.jpg",
      },
      {
        name: "Fizz",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/fizz-soda-drink-can.jpg",
      },
      {
        name: "AMP Energy",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/amp-energy-drink-green-can.jpg",
      },
      {
        name: "SPIN Energy",
        priceUSD: "1.00",
        priceLBP: 70000,
        image: "/spin-energy-drink-can.jpg",
      },
      {
        name: "Red Bull",
        priceUSD: "2.20",
        priceLBP: 154000,
        image: "/red-bull-energy-drink-can.jpg",
      },
      {
        name: "7Up",
        priceUSD: "0.75",
        priceLBP: 52500,
        image: "/7up-lemon-lime-soda-can.jpg",
      },
      {
        name: "Pepsi",
        priceUSD: "0.75",
        priceLBP: 52500,
        image: "/pepsi-cola-can-bottle.jpg",
      },
      {
        name: "Miranda",
        priceUSD: "0.75",
        priceLBP: 52500,
        image: "/miranda-orange-soda-can.jpg",
      },
      {
        name: "Coca Cola",
        priceUSD: "2.30",
        priceLBP: 161000,
        image: "/coca-cola-classic-can-bottle.jpg",
      },
      {
        name: "Fanta",
        priceUSD: "2.30",
        priceLBP: 161000,
        image: "/fanta-orange-soda-can.jpg",
      },
      {
        name: "Sprite",
        priceUSD: "2.30",
        priceLBP: 161000,
        image: "/sprite-lemon-lime-can.jpg",
      },
      {
        name: "Perrier",
        priceUSD: "1.60",
        priceLBP: 112000,
        image: "/perrier-sparkling-water-bottle.jpg",
      },
      {
        name: "D. Gourmet",
        priceUSD: "1.50",
        priceLBP: 105000,
        image: "/gourmet-drink-bottle.jpg",
      },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        name: "Eclaire",
        priceUSD: "1.79",
        priceLBP: 125000,
        image: "/eclair-chocolate-pastry-cream.jpg",
      },
      {
        name: "Special Cake",
        priceUSD: "2.86",
        priceLBP: 200000,
        image: "/special-cake-slice-layered.jpg",
      },
      {
        name: "Cake",
        priceUSD: "2.14",
        priceLBP: 150000,
        image: "/cake-slice-dessert-frosting.jpg",
      },
      {
        name: "Jello",
        priceUSD: "1.07",
        priceLBP: 75000,
        image: "/jello-dessert-colorful-cup.jpg",
      },
      {
        name: "Custard",
        priceUSD: "2.14",
        priceLBP: 150000,
        image: "/custard-dessert-vanilla-cream.jpg",
      },
      {
        name: "Cheesecake",
        priceUSD: "2.86",
        priceLBP: 200000,
        image: "/cheesecake-slice-strawberry-topping.jpg",
      },
    ],
  },
  {
    id: "food",
    name: "Food",
    items: [
      {
        name: "Grape Leaves with Olive Oil",
        priceUSD: "2.14",
        priceLBP: 150000,
        image: "/grape-leaves-stuffed-olive-oil.jpg",
      },
      {
        name: "Kaak - Mozzarella with Smoked Turkey",
        priceUSD: "4.29",
        priceLBP: 300000,
        image: "/kaak-mozzarella-turkey-sandwich.jpg",
      },
      {
        name: "Kaak - 4 Cheese with Mixed Vegetables",
        priceUSD: "4.29",
        priceLBP: 300000,
        image: "/kaak-four-cheese-vegetables.jpg",
      },
      {
        name: "Kaak - 4 Cheese with Pepperoni",
        priceUSD: "4.29",
        priceLBP: 300000,
        image: "/kaak-four-cheese-pepperoni.jpg",
      },
      {
        name: "Original Kaak",
        priceUSD: "3.57",
        priceLBP: 250000,
        image: "/original-kaak-lebanese-bread.jpg",
      },
      {
        name: "Brown Bread with Labneh & Vegetables",
        priceUSD: "2.86",
        priceLBP: 200000,
        image: "/brown-bread-labneh-vegetables.jpg",
      },
    ],
  },
  {
    id: "water",
    name: "Water",
    items: [
      {
        name: "Water",
        priceUSD: "0.43",
        priceLBP: 30000,
        image: "/water-bottle-mineral-spring.jpg",
      },
    ],
  },
]
