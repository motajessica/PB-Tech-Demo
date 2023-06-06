const laptops = [
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1299",
    brand: "Dell"
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1366x768",
    ssdCapacity: "256GB",
    hdCapacity: "1TB",
    gpuModel: "NVIDIA GeForce MX150",
    opSystem: "Windows 10 Home",
    price: "$899",
    brand: "Lenovo"
  },
  {
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 11 Pro",
    price: "$1499",
    brand: "Macbook"
  },
  {
    cpuFamily: "Intel Core i9",
    memorySize: "32GB",
    screenSize: "17.3 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hdCapacity: "2TB",
    gpuModel: "NVIDIA GeForce RTX 3080",
    opSystem: "Windows 11 Home",
    price: "$2499",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "AMD Radeon RX 5500M",
    opSystem: "Windows 10 Pro",
    price: "$1599",
  },
  {
    cpuFamily: "AMD Ryzen 9",
    memorySize: "32GB",
    screenSize: "15.6 inches",
    screenReso: "3840x2160",
    ssdCapacity: "2TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 10 Home",
    price: "$1799",
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: "$999",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "1TB",
    gpuModel: "NVIDIA GeForce RTX 3060",
    opSystem: "Windows 11 Home",
    price: "$1799",
  },
  {
    cpuFamily: "AMD Ryzen 5",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 11 Pro",
    price: "$1299",
  },
  {
    cpuFamily: "Intel Core i9",
    memorySize: "64GB",
    screenSize: "17.3 inches",
    screenReso: "3840x2160",
    ssdCapacity: "2TB",
    hdCapacity: "2TB",
    gpuModel: "NVIDIA GeForce RTX 3090",
    opSystem: "Windows 11 Home",
    price: "$2999",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "2560x1440",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1650",
    opSystem: "Windows 10 Pro",
    price: "$1399",
  },
  {
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Home",
    price: "$1299",
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1099",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "1TB",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 11 Home",
    price: "$1799",
  },
  {
    cpuFamily: "AMD Ryzen 9",
    memorySize: "32GB",
    screenSize: "15.6 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce RTX 3070",
    opSystem: "Windows 11 Pro",
    price: "$1999",
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Home",
    price: "$999",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "13.3 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Pro",
    price: "$1299",
  },
  {
    cpuFamily: "AMD Ryzen 5",
    memorySize: "8GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hdCapacity: "1TB",
    gpuModel: "NVIDIA GeForce GTX 1650",
    opSystem: "Windows 11 Home",
    price: "$1099",
  },
  {
    cpuFamily: "Intel Core i9",
    memorySize: "32GB",
    screenSize: "17.3 inches",
    screenReso: "3840x2160",
    ssdCapacity: "2TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce RTX 3080",
    opSystem: "Windows 11 Pro",
    price: "$2499",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce GTX 1650",
    opSystem: "Windows 10 Home",
    price: "$1399",
  },
  {
    cpuFamily: "AMD Ryzen 7",
    memorySize: "16GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "AMD Radeon RX Vega 10",
    opSystem: "Windows 10 Pro",
    price: "$1299",
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "13.3 inches",
    screenReso: "2560x1600",
    ssdCapacity: "512GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Home",
    price: "$1099",
  },
  {
    cpuFamily: "Intel Core i7",
    memorySize: "16GB",
    screenSize: "15.6 inches",
    screenReso: "1920x1080",
    ssdCapacity: "512GB",
    hdCapacity: "1TB",
    gpuModel: "NVIDIA GeForce GTX 1660 Ti",
    opSystem: "Windows 11 Home",
    price: "$1799",
  },
  {
    cpuFamily: "AMD Ryzen 9",
    memorySize: "32GB",
    screenSize: "15.6 inches",
    screenReso: "3840x2160",
    ssdCapacity: "1TB",
    hdCapacity: "N/A",
    gpuModel: "NVIDIA GeForce RTX 3070",
    opSystem: "Windows 11 Pro",
    price: "$1999",
  },
  {
    cpuFamily: "Intel Core i5",
    memorySize: "8GB",
    screenSize: "14 inches",
    screenReso: "1920x1080",
    ssdCapacity: "256GB",
    hdCapacity: "N/A",
    gpuModel: "Integrated Graphics",
    opSystem: "Windows 10 Home",
    price: "$999",
  },
]

module.exports = laptops;