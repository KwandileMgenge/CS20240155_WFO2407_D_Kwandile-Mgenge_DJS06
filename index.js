import { provinces, names, products} from './scripts.js'

/** 
 * ForEach Basics: Use forEach to log each name and each province to the console.
 * Then, log each name with a matching province in the format "Name (Province)".
*/
console.log('--- NAMES ---')
names.forEach( (name) => console.log(name)); // Logs each name
console.log('--- PROVINCES ---')
provinces.forEach( (province) => console.log(province));// Logs each province

console.log('--- NAME (PROVINCE) ---')
names.forEach( (name, index) => console.log(`${name} (${provinces[index]})`) ) // Log each name with its matching province

/**
 * Uppercase Transformation: Use map to create a new array of province names in all uppercase.
 * Log the new array to the console.
 */
console.log('--- UPPERCASE PROVINCES ---')
console.log( provinces.map((province) => province.toUpperCase()));

/**
 * Name Lengths: Create a new array using map that contains the length of each name.
 */
console.log('--- NAME LENGTHS ---')
console.log(names.map(name => name.length));

/**
 * Sorting: Use sort to alphabetically sort the provinces.
 */
console.log('--- SORTED PROVINCES ---')
console.log([...provinces].sort()); // Use spread to avoid mutating the original array

/**
 * Filtering Cape: Use filter to remove provinces containing "Cape". Log the count of remaining provinces.
 */
console.log('--- FILTERED PROVINCES LENGTH ---')
console.log((provinces.filter(province => !province.includes('Cape')).length));

/**
 * Finding 'S': Create a boolean array using map and some to determine if a name contains the letter 'S'.
 */
console.log('--- CONTAINS S ---')
console.log(names.map(name => name.toLowerCase().includes('s')));

/**
 * Creating Object Mapping: Use reduce to transform the names array into an object mapping names to their respective provinces.
 */
console.log('--- NAME PROVINCE OBJECT ---')
const nameProvinceMap = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});
console.log(nameProvinceMap);

/**
 * Log Products: Iterate over the products array, logging each product name.
 */
console.log(products.map(product => product.product).join(', '));

/**
 * Filter by Name Length: Filter out products with names longer than 5 characters.
 */
console.log(products.filter(product => product.product.length <= 5).map(product => product.product).join(', '));

/**
 * Price Manipulation: Filter out products without prices, convert string prices to numbers,
 * and calculate the total price using reduce.
 */
console.log(
  products
    .filter(product => product.price !== '')
    .map(product => ({ ...product, price: Number(product.price) }))
    .reduce((total, product) => total + product.price, 0)
);

/**
 * Concatenate Product Names: Use reduce to concatenate all product names into a single string.
 */
console.log(
  products.reduce((acc, product) => acc + product.product, '')
);

/**
 * Find Extremes in Prices:
 * Identify the highest and lowest-priced items, returning a string formatted as "Highest: X. Lowest: Y."
 */
const validProducts = products.filter(product => product.price !== '');
const prices = validProducts.map(product => Number(product.price));

const maxPrice = Math.max(...prices);
const minPrice = Math.min(...prices);

console.log(`Highest: ${maxPrice}. Lowest: ${minPrice}.`);

/**
 * Object Transformation: Using Object.entries and reduce, 
 * recreate the products object with keys 'name' and 'cost', maintaining their original values.
 */
console.log(
  products.reduce((acc, product) => {
    acc[product.product] = { name: product.product, cost: Number(product.price) || 0 };
    return acc;
  }, {})
);
