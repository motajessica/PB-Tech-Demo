const laptops = [
  {
    name: "HP Probook 450 G9",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "13 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: 1725,
    brand: "HP",    
    laptopType: "business",
    purposes: ["Home use", "School work"]
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
    price: 977.50,
    brand: "Lenovo",
    laptopType: "chromebook",
    purposes: ["Gaming use"]
  },
  {
    name: "MacBook Pro",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "15 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "macOS",
    price: 1399,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
  {
    name: "Lenovo V15 G2",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "1920x1080",
    ssdCapacity: "500GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 11 Pro",
    price: 1476,
    brand: "Lenovo",
    laptopType: "business",
    purposes: ["Programming"]
  },
  {
    name: "Dell XPS 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15 inches",
    screenReso: "3840x2160",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: 1799,
    brand: "Dell",
    laptopType: "business",
    purposes: ["Heavy Work"]
  },
  {
    name: "MacBook Pro 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1299,
    brand: "MacBook",
    laptopType: "chromebook",
    purposes: ["Office work"]
  },
  {
    name: "HP Pavilion 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i5",
    memorySize: "12GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "1TB",
    gpuModel: "NVIDIA GeForce GTX 1650",
    opSystem: "Windows 10 Home",
    price: 999,
    brand: "HP",
    laptopType: "business",
    purposes: ["Home use"]
  },
  {
    name: "Lenovo ThinkPad X1 Carbon",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Pro",
    price: 1999,
    brand: "Lenovo",
    laptopType: "business",
    purposes: ["General use"]
  },
  {
    name: "Dell Inspiron 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: 1199,
    brand: "Dell",
    laptopType: "business",
    purposes: ["School use"]
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1499,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
  {
    name: "HP Spectre x360",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "14 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: 1699,
    brand: "HP",
    laptopType: "2_in_1",
    purposes: ["Programming"]

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
    price: 1499,
    brand: "Lenovo",
    laptopType: "business",
    purposes: ["General use", "Office work"]

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
    price: 1299,
    brand: "Dell",
    laptopType: "2_in_1",
    purposes: ["Gamming"]

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
    price: 2399,
    brand: "MacBook",
    laptopType: "business",
    purposes: ["Gamming"]
  },
  {
    name: "HP Envy 13",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Intel Iris Xe Graphics",
    opSystem: "Windows 10 Home",
    price: 1099,
    brand: "HP",
    laptopType: "2_in_1",
    purposes: ["Gamming"]
  },
  {
    name: "Lenovo IdeaPad 5",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 5",
    memorySize: "8GB",
    screenSize: "15 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Home",
    price: 799,
    brand: "Lenovo",
    laptopType: "business",
    purposes: ["Office work"]
  },
  {
    name: "Dell XPS 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i9",
    memorySize: "32GB",
    screenSize: "15 inches",
    screenReso: "3840x2400",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1650 Ti",
    opSystem: "Windows 10 Home",
    price: 2799,
    brand: "Dell",
    laptopType: "chromebook",
    purposes: ["Office work"]
  },
  {
    name: "MacBook Air M1",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "16GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1799,
    brand: "MacBook",
    laptopType: "business",
    purposes: ["Office work"]
  },
  {
    name: "HP Omen 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 10 Home",
    price: 1599,
    brand: "HP",
    laptopType: "2_in_1",
    purposes: ["Heavy Work"]
  },
  {
    name: "Lenovo Legion 5",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "15 inches",
    screenReso: "1920x1080",
    ssdCapacity: "1TB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce RTX 3060",
    opSystem: "Windows 10 Home",
    price: 1799,
    brand: "Lenovo",
    laptopType: "business",
    purposes: ["Heavy Work"]

  },
  {
    name: "MacBook Pro 12",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "12 inches",
    screenReso: "2560x1600",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1299,
    brand: "MacBook",
    laptopType: "chromebook",
    purposes: ["Office work"]
  },
  {
    name: "HP Omen 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 10 Home",
    price: 1599,
    brand: "HP",
    laptopType: "2_in_1",
    purposes: ["Heavy Work"]
  },
  {
    name: "Dell Inspiron 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: 1199,
    brand: "Dell",
    laptopType: "business",
    purposes: ["School use"]
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1499,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
  {
    name: "Dell Inspiron 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 9",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: 1199,
    brand: "Dell",
    laptopType: "business",
    purposes: ["School use"]
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1499,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
  {
    name: "Dell Inspiron 15",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "16 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: 1199,
    brand: "Dell",
    laptopType: "business",
    purposes: ["School use"]
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1499,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
  {
    name: "MacBook Pro 12",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1",
    memorySize: "8GB",
    screenSize: "16 inches",
    screenReso: "2560x1600",
    ssdCapacity: "256GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price: 1299,
    brand: "MacBook",
    laptopType: "chromebook",
    purposes: ["Office work"]
  },
  {
    name: "MacBook Air",
    image:"https://www.pbtech.co.nz/imgprod/N/B/NBKHNB450906__1.jpg?h=3346252898",
    cpuFamily: "Apple M1 Pro",
    memorySize: "8GB",
    screenSize: "13 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hddCapacity: "N/A",
    gpuModel: "Apple M1",
    opSystem: "macOS",
    price:  1499,
    brand: "MacBook",
    laptopType: "2_in_1",
    purposes: ["Home use"]

  },
];


module.exports = laptops;