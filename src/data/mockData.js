// // Image helper functions (FIXED - no more broken images)
// const carImage = (make, model, seed) =>
//   `https://loremflickr.com/800/600/${make},${model}?lock=${seed}`;

// const partImage = (name, seed) =>
//   `https://loremflickr.com/800/600/${name},car,auto?lock=${seed}`;

// // Cars Data
// export const mockCars = [
//   // TOYOTA
//   {
//     id: 1,
//     type: "car",
//     title: "Toyota Camry 2022",
//     price: 18500000,
//     location: "Lagos",
//     image: carImage("Toyota", "Camry", 1),
//     condition: "Used",
//     year: 2022,
//     make: "Toyota",
//     model: "Camry"
//   },
//   {
//     id: 2,
//     type: "car",
//     title: "Toyota Corolla 2020",
//     price: 13500000,
//     location: "Abuja",
//     image: carImage("Toyota", "Corolla", 2),
//     condition: "Used",
//     year: 2020,
//     make: "Toyota",
//     model: "Corolla"
//   },
//   {
//     id: 3,
//     type: "car",
//     title: "Toyota Hilux 2021",
//     price: 24500000,
//     location: "Port Harcourt",
//     image: carImage("Toyota", "Hilux", 3),
//     condition: "Used",
//     year: 2021,
//     make: "Toyota",
//     model: "Hilux"
//   },
//   {
//     id: 4,
//     type: "car",
//     title: "Toyota RAV4 2023",
//     price: 21000000,
//     location: "Lekki",
//     image: carImage("Toyota", "RAV4", 4),
//     condition: "Used",
//     year: 2023,
//     make: "Toyota",
//     model: "RAV4"
//   },

//   // HONDA
//   {
//     id: 5,
//     type: "car",
//     title: "Honda Civic 2023",
//     price: 16800000,
//     location: "Abuja",
//     image: carImage("Honda", "Civic", 5),
//     condition: "Used",
//     year: 2023,
//     make: "Honda",
//     model: "Civic"
//   },
//   {
//     id: 6,
//     type: "car",
//     title: "Honda Accord 2019",
//     price: 15500000,
//     location: "Ibadan",
//     image: carImage("Honda", "Accord", 6),
//     condition: "Used",
//     year: 2019,
//     make: "Honda",
//     model: "Accord"
//   },
//   {
//     id: 7,
//     type: "car",
//     title: "Honda CR-V 2021",
//     price: 19500000,
//     location: "Lagos",
//     image: carImage("Honda", "CR-V", 7),
//     condition: "Used",
//     year: 2021,
//     make: "Honda",
//     model: "CR-V"
//   },

//   // MERCEDES
//   {
//     id: 8,
//     type: "car",
//     title: "Mercedes-Benz C-Class 2019",
//     price: 22500000,
//     location: "Port Harcourt",
//     image: carImage("Mercedes", "C-Class", 8),
//     condition: "Used",
//     year: 2019,
//     make: "Mercedes-Benz",
//     model: "C-Class"
//   },
//   {
//     id: 9,
//     type: "car",
//     title: "Mercedes-Benz E-Class 2020",
//     price: 28500000,
//     location: "Lagos",
//     image: carImage("Mercedes", "E-Class", 9),
//     condition: "Used",
//     year: 2020,
//     make: "Mercedes-Benz",
//     model: "E-Class"
//   },
//   {
//     id: 10,
//     type: "car",
//     title: "Mercedes-Benz GLC 2022",
//     price: 32000000,
//     location: "Abuja",
//     image: carImage("Mercedes", "GLC", 10),
//     condition: "Used",
//     year: 2022,
//     make: "Mercedes-Benz",
//     model: "GLC"
//   },

//   // LEXUS
//   {
//     id: 11,
//     type: "car",
//     title: "Lexus RX 350 2021",
//     price: 28500000,
//     location: "Lekki",
//     image: carImage("Lexus", "RX", 11),
//     condition: "Used",
//     year: 2021,
//     make: "Lexus",
//     model: "RX"
//   },
//   {
//     id: 12,
//     type: "car",
//     title: "Lexus ES 2018",
//     price: 17500000,
//     location: "Ibadan",
//     image: carImage("Lexus", "ES", 12),
//     condition: "Used",
//     year: 2018,
//     make: "Lexus",
//     model: "ES"
//   },
//   {
//     id: 13,
//     type: "car",
//     title: "Lexus NX 2022",
//     price: 26500000,
//     location: "Lagos",
//     image: carImage("Lexus", "NX", 13),
//     condition: "Used",
//     year: 2022,
//     make: "Lexus",
//     model: "NX"
//   },

//   // HYUNDAI
//   {
//     id: 14,
//     type: "car",
//     title: "Hyundai Tucson 2021",
//     price: 16500000,
//     location: "Abuja",
//     image: carImage("Hyundai", "Tucson", 14),
//     condition: "Used",
//     year: 2021,
//     make: "Hyundai",
//     model: "Tucson"
//   },
//   {
//     id: 15,
//     type: "car",
//     title: "Hyundai Santa Fe 2020",
//     price: 17500000,
//     location: "Lagos",
//     image: carImage("Hyundai", "Santa Fe", 15),
//     condition: "Used",
//     year: 2020,
//     make: "Hyundai",
//     model: "Santa Fe"
//   },

//   // KIA
//   {
//     id: 16,
//     type: "car",
//     title: "Kia Sportage 2021",
//     price: 15500000,
//     location: "Lagos",
//     image: carImage("Kia", "Sportage", 16),
//     condition: "Used",
//     year: 2021,
//     make: "Kia",
//     model: "Sportage"
//   },

//   // FORD
//   {
//     id: 17,
//     type: "car",
//     title: "Ford Explorer 2019",
//     price: 20500000,
//     location: "Abuja",
//     image: carImage("Ford", "Explorer", 17),
//     condition: "Used",
//     year: 2019,
//     make: "Ford",
//     model: "Explorer"
//   },

//   // NISSAN
//   {
//     id: 18,
//     type: "car",
//     title: "Nissan Altima 2020",
//     price: 14500000,
//     location: "Ibadan",
//     image: carImage("Nissan", "Altima", 18),
//     condition: "Used",
//     year: 2020,
//     make: "Nissan",
//     model: "Altima"
//   }
// ];

// // Parts Data
// export const mockParts = [
//   {
//     id: 101,
//     type: "part",
//     title: "Brake Pads (Front Set)",
//     price: 45000,
//     location: "Lagos",
//     image: partImage("brake pads", 1),
//     category: "Brakes",
//     compatible: "Toyota, Honda"
//   },
//   {
//     id: 102,
//     type: "part",
//     title: "LED Headlights Pair",
//     price: 85000,
//     location: "Abuja",
//     image: partImage("headlights", 2),
//     category: "Lighting",
//     compatible: "All Models"
//   },
//   {
//     id: 103,
//     type: "part",
//     title: "Car Tyres (Set of 4)",
//     price: 480000,
//     location: "Lagos",
//     image: partImage("tyres", 3),
//     category: "Tyres",
//     compatible: "Camry, Corolla, Civic"
//   },
//   {
//     id: 104,
//     type: "part",
//     title: "Shock Absorber (Pair)",
//     price: 65000,
//     location: "Port Harcourt",
//     image: partImage("shock absorber", 4),
//     category: "Suspension",
//     compatible: "SUVs & Trucks"
//   },
//   {
//     id: 105,
//     type: "part",
//     title: "12V Car Battery",
//     price: 95000,
//     location: "Lagos",
//     image: partImage("car battery", 5),
//     category: "Electrical",
//     compatible: "Most Cars"
//   },
//   {
//     id: 106,
//     type: "part",
//     title: "Engine Air Filter",
//     price: 18000,
//     location: "Ibadan",
//     image: partImage("air filter", 6),
//     category: "Engine",
//     compatible: "Toyota, Honda, Nissan"
//   }
// ];

// ============================================================
// ManoVault - Mock Data with Multiple Images Support
// ============================================================

const CAR_IMAGES = {
  // Toyota
  "Toyota Camry": [
    "https://loremflickr.com/800/600/toyota,camry/all?lock=101",
    "https://loremflickr.com/800/600/toyota,camry,interior/all?lock=102",
    "https://loremflickr.com/800/600/toyota,camry,side/all?lock=103"
  ],
  "Toyota Corolla": [
    "https://loremflickr.com/800/600/toyota,corolla/all?lock=201",
    "https://loremflickr.com/800/600/toyota,corolla,interior/all?lock=202"
  ],
  "Toyota Hilux": [
    "https://loremflickr.com/800/600/toyota,hilux/all?lock=301",
    "https://loremflickr.com/800/600/toyota,hilux,truck/all?lock=302"
  ],
  "Toyota RAV4": [
    "https://loremflickr.com/800/600/toyota,rav4/all?lock=401",
    "https://loremflickr.com/800/600/toyota,rav4,interior/all?lock=402"
  ],

  // Honda
  "Honda Civic": [
    "https://loremflickr.com/800/600/honda,civic/all?lock=501",
    "https://loremflickr.com/800/600/honda,civic,interior/all?lock=502"
  ],
  "Honda Accord": [
    "https://loremflickr.com/800/600/honda,accord/all?lock=601",
    "https://loremflickr.com/800/600/honda,accord,interior/all?lock=602"
  ],
  "Honda CR-V": [
    "https://loremflickr.com/800/600/honda,crv/all?lock=701",
    "https://loremflickr.com/800/600/honda,crv,interior/all?lock=702"
  ],

  // Mercedes-Benz
  "Mercedes-Benz C-Class": [
    "https://loremflickr.com/800/600/mercedes,c-class/all?lock=801",
    "https://loremflickr.com/800/600/mercedes,c-class,interior/all?lock=802"
  ],
  "Mercedes-Benz E-Class": [
    "https://loremflickr.com/800/600/mercedes,e-class/all?lock=901",
    "https://loremflickr.com/800/600/mercedes,e-class,interior/all?lock=902"
  ],
  "Mercedes-Benz GLC": [
    "https://loremflickr.com/800/600/mercedes,glc/all?lock=1001",
    "https://loremflickr.com/800/600/mercedes,glc,interior/all?lock=1002"
  ],

  // Lexus
  "Lexus RX": [
    "https://loremflickr.com/800/600/lexus,rx/all?lock=1101",
    "https://loremflickr.com/800/600/lexus,rx,interior/all?lock=1102"
  ],
  "Lexus ES": [
    "https://loremflickr.com/800/600/lexus,es/all?lock=1201",
    "https://loremflickr.com/800/600/lexus,es,interior/all?lock=1202"
  ],
  "Lexus NX": [
    "https://loremflickr.com/800/600/lexus,nx/all?lock=1301",
    "https://loremflickr.com/800/600/lexus,nx,interior/all?lock=1302"
  ],

  // Others
  "Hyundai Tucson": "https://loremflickr.com/800/600/hyundai,tucson/all?lock=1401",
  "Hyundai Santa Fe": "https://loremflickr.com/800/600/hyundai,santafe/all?lock=1501",
  "Kia Sportage": "https://loremflickr.com/800/600/kia,sportage/all?lock=1601",
  "Ford Explorer": "https://loremflickr.com/800/600/ford,explorer/all?lock=1801",
  "Nissan Altima": "https://loremflickr.com/800/600/nissan,altima/all?lock=1901",
};

const PART_IMAGES = {
  Brakes:     "https://loremflickr.com/800/600/brake,disc,car/all?lock=901",
  Lighting:   "https://loremflickr.com/800/600/car,headlight/all?lock=902",
  Tyres:      "https://loremflickr.com/800/600/car,tyre/all?lock=903",
  Suspension: "https://loremflickr.com/800/600/car,shock,absorber/all?lock=904",
  Electrical: "https://loremflickr.com/800/600/car,battery/all?lock=905",
  Engine:     "https://loremflickr.com/800/600/car,engine,part/all?lock=906",
};

// Mock Cars with extraImages for gallery
export const mockCars = [
  { id: 1,  type: "car", title: "Toyota Camry 2022 (Silver)",   price: 18500000, location: "Lagos Island",  image: CAR_IMAGES["Toyota Camry"][0], extraImages: CAR_IMAGES["Toyota Camry"], condition: "Used", year: 2022, make: "Toyota", model: "Camry" },
  { id: 2,  type: "car", title: "Toyota Camry 2020 (Black)",    price: 15500000, location: "Abuja",         image: CAR_IMAGES["Toyota Camry"][0], extraImages: CAR_IMAGES["Toyota Camry"], condition: "Used", year: 2020, make: "Toyota", model: "Camry" },
  { id: 3,  type: "car", title: "Toyota Corolla 2021 (White)",  price: 14500000, location: "Ibadan",        image: CAR_IMAGES["Toyota Corolla"][0], extraImages: CAR_IMAGES["Toyota Corolla"], condition: "Used", year: 2021, make: "Toyota", model: "Corolla" },
  { id: 4,  type: "car", title: "Toyota Hilux 2022 (White)",    price: 24500000, location: "Lagos",         image: CAR_IMAGES["Toyota Hilux"][0], extraImages: CAR_IMAGES["Toyota Hilux"], condition: "Used", year: 2022, make: "Toyota", model: "Hilux" },
  { id: 5,  type: "car", title: "Toyota RAV4 2023 (Silver)",    price: 29500000, location: "Lekki",         image: CAR_IMAGES["Toyota RAV4"][0], extraImages: CAR_IMAGES["Toyota RAV4"], condition: "Used", year: 2023, make: "Toyota", model: "RAV4" },

  { id: 6,  type: "car", title: "Honda Civic 2023 (Red)",       price: 16800000, location: "Abuja",         image: CAR_IMAGES["Honda Civic"][0], extraImages: CAR_IMAGES["Honda Civic"], condition: "Used", year: 2023, make: "Honda", model: "Civic" },
  { id: 7,  type: "car", title: "Honda Accord 2022 (Black)",    price: 22000000, location: "Lekki",         image: CAR_IMAGES["Honda Accord"][0], extraImages: CAR_IMAGES["Honda Accord"], condition: "Used", year: 2022, make: "Honda", model: "Accord" },
  { id: 8,  type: "car", title: "Honda CR-V 2023 (Blue)",       price: 27000000, location: "Abuja",         image: CAR_IMAGES["Honda CR-V"][0], extraImages: CAR_IMAGES["Honda CR-V"], condition: "Used", year: 2023, make: "Honda", model: "CR-V" },

  { id: 9,  type: "car", title: "Mercedes-Benz C300 2022",      price: 35000000, location: "Lekki",         image: CAR_IMAGES["Mercedes-Benz C-Class"][0], extraImages: CAR_IMAGES["Mercedes-Benz C-Class"], condition: "Used", year: 2022, make: "Mercedes-Benz", model: "C-Class" },
  { id: 10, type: "car", title: "Lexus RX 350 2022",            price: 45000000, location: "Lagos Island",  image: CAR_IMAGES["Lexus RX"][0], extraImages: CAR_IMAGES["Lexus RX"], condition: "Used", year: 2022, make: "Lexus", model: "RX" },
];

// Mock Parts
export const mockParts = [
  { id: 101, type: "part", title: "Toyota Camry Brake Pads (Front Set)", price: 45000, location: "Lagos", image: PART_IMAGES.Brakes, compatible: "2018–2024 Camry", category: "Brakes", make: "Toyota" },
  { id: 102, type: "part", title: "LED Headlights Pair", price: 85000, location: "Abuja", image: PART_IMAGES.Lighting, compatible: "Toyota & Honda", category: "Lighting" },
  { id: 103, type: "part", title: "Michelin Tyres (Set of 4)", price: 480000, location: "Lagos", image: PART_IMAGES.Tyres, compatible: "Camry, Corolla, Civic", category: "Tyres" },
  { id: 104, type: "part", title: "Shock Absorber (Pair)", price: 65000, location: "Port Harcourt", image: PART_IMAGES.Suspension, compatible: "SUVs & Trucks", category: "Suspension" },
  { id: 105, type: "part", title: "12V Car Battery", price: 95000, location: "Lagos", image: PART_IMAGES.Electrical, compatible: "Most Cars", category: "Electrical" },
];

export const CAR_MAKES = ["Toyota", "Honda", "Mercedes-Benz", "Lexus", "Hyundai", "Kia", "Ford", "Nissan"];

export const CAR_MODELS = {
  Toyota: ["Camry", "Corolla", "Hilux", "RAV4"],
  Honda: ["Civic", "Accord", "CR-V"],
  "Mercedes-Benz": ["C-Class", "E-Class", "GLC"],
  Lexus: ["RX", "ES", "NX"],
  Hyundai: ["Tucson", "Santa Fe"],
  Kia: ["Sportage"],
  Ford: ["Explorer"],
  Nissan: ["Altima"]
};

export const YEARS = Array.from({ length: 12 }, (_, i) => 2015 + i);