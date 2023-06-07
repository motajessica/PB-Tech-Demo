const laptops = [
  {
    name: "HP Probook 450 G9",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1725",
    brand: "HP",    
    laptopType: "business"
  },
  {
    name: "Lenovo V15 G2",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1366x768",
    ssdCapacity: "256GB",
    hddCapacity: "1TB",
    gpuModel: "NVIDIA GeForce MX150",
    opSystem: "Windows 11 Pro",
    price: "$977.50",
    brand: "Lenovo",
    laptopType: "chromebook"
  },
  {
    name: "Lenovo V15 G2",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "500GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 11 Pro",
    price: "$1476",
    brand: "Lenovo",
    laptopType: "business"
  },
  {
    name: "Dell XPS 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "13.3 inches",
    screenReso: "3840x2160",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: "$1799",
    brand: "Dell",
    laptopType: "business"

  },
  {
    name: "MacBook Pro 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: "$1299",
    brand: "MacBook",
    laptopType: "chromebook"
  },
  {
    name: "HP Pavilion 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "12GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "1TB",
    gpuModel: "NVIDIA GeForce GTX 1650",
    opSystem: "Windows 10 Home",
    price: "$999",
    brand: "HP",
    laptopType: "business"
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "14 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1999",
    brand: "Lenovo",
    laptopType: "business"
  },
  {
    name: "Dell Inspiron 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: "$1199",
    brand: "Dell",
    laptopType: "business"
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: "$1499",
    brand: "MacBook",
    laptopType: "2_in_1"

  },
  {
    name: "HP Spectre x360",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "13.3 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: "$1699",
    brand: "HP",
    laptopType: "2_in_1"

  },
  {
    name: "Lenovo Yoga C940",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "14 inches",
    screenReso: "3840x2160",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Plus Graphics",
    opSystem: "Windows 10 Home",
    price: "$1499",
    brand: "Lenovo",
    laptopType: "business"

  },
  {
    name: "Dell Latitude 14",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Intel UHD Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1299",
    brand: "Dell",
    laptopType: "2_in_1"

  },
  {
    name: "MacBook Pro 16",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i9",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "3072x1920",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon Pro 5500M",
    opSystem: "macOS",
    price: "$2399",
    brand: "MacBook",
    laptopType: "business"
  },
  {
    name: "HP Envy 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: "$1099",
    brand: "HP",
    laptopType: "2_in_1"
  },
  {
    name: "Lenovo IdeaPad 5",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 5",
    memorySize: "8GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Home",
    price: "$799",
    brand: "Lenovo",
    laptopType: "business"
  },
  {
    name: "Dell XPS 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i9",
    memorySize: "32GB",
    screenSize: "15.6 inches",
    screenReso: "3840x2400",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1650 Ti",
    opSystem: "Windows 10 Home",
    price: "$2799",
    brand: "Dell",
  },
  {
    name: "MacBook Air M1",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "16GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: "$1799",
    brand: "MacBook",
    laptopType: "business"
  },
  {
    name: "HP Omen 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 10 Home",
    price: "$1599",
    brand: "HP",
    laptopType: "2_in_1"
  },
  {
    name: "Lenovo Legion 5",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce RTX 3060",
    opSystem: "Windows 10 Home",
    price: "$1799",
    brand: "Lenovo",
    laptopType: "business"

  },
];


module.exports = laptops;