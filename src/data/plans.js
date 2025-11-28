export const plans = [
    // --- STARTER SERIES (Tubular Batteries) ---
    {
        id: 1,
        name: "I PASS MY NEIGHBOUR SOLAR",
        price: "₦500,000",
        category: "Starter",
        system: [
            "500 Watts Inverter",
            "1x 100AH Battery",
            "1x 200W Solar Panel",
            "20A PWM Charge Controller",
            "Installation Kits"
        ],
        load: [
            "AC/DC Bulbs",
            "Phone Charging",
            "Note: No Fans/TVs"
        ]
    },
    {
        id: 2,
        name: "I PASS MY NEIGHBOUR OGA SOLAR",
        price: "₦900,000",
        category: "Starter",
        system: [
            "1kVA Hybrid Inverter",
            "1x 200AH Tubular Battery",
            "2x 300W Solar Panels",
            "Installation Kits"
        ],
        load: [
            "AC/DC Bulbs",
            "AC/DC Fan",
            "Small LED TV",
            "Phones"
        ]
    },
    {
        id: 3,
        name: "CHAIRMAN TYPE 01",
        price: "₦1,100,000",
        category: "Starter",
        system: [
            "1.5kVA Hybrid Inverter",
            "1x 200AH Tubular Battery",
            "3x 300W Solar Panels",
            "Installation Kits"
        ],
        load: [
            "Bulbs",
            "2 Fans",
            "Small LED TV",
            "Phones & Laptop"
        ]
    },
    {
        id: 4,
        name: "ABLE CHAIRMAN",
        price: "₦1,700,000",
        category: "Starter",
        system: [
            "2.5kVA Hybrid Inverter",
            "1x 200AH Tubular Battery",
            "4x 550W Solar Panels",
            "Installation Kits"
        ],
        load: [
            "Bulbs",
            "2-3 Fans",
            "32/43 Inch TV",
            "Phones & Laptops"
        ]
    },

    // --- PREMIUM SERIES (Lithium Batteries) ---
    {
        id: 5,
        name: "ABLE CHAIRMAN SILVER 🥈",
        price: "₦2,500,000",
        category: "Premium",
        system: [
            "2.5kVA Hybrid Inverter",
            "5kWh Lithium Battery",
            "4x 550W Solar Panels",
            "Installation Kits"
        ],
        load: [
            "Bulbs",
            "2-3 Fans",
            "32/43 Inch TV",
            "Phones & Laptops"
        ]
    },
    {
        id: 6,
        name: "CHAIRMAN GOLD 🥇",
        price: "₦4,000,000",
        category: "Premium",
        system: [
            "4kVA Hybrid Inverter",
            "2x 5kWh Lithium Batteries",
            "8x 550W Solar Panels",
            "Installation Kits"
        ],
        load: [
            "Bulbs & Fans",
            "43 Inch TV",
            "Small Inverter Fridge",
            "Washing Machine",
            "Phones/Laptops"
        ]
    },
    {
        id: 7,
        name: "DIAMOND 💎",
        price: "₦5,000,000",
        category: "Premium",
        isPopular: true, // We can highlight this one
        system: [
            "5kVA Hybrid Inverter",
            "10kWh Lithium Battery",
            "8x 550W OR 12x 300W Panels",
            "Installation Kits"
        ],
        load: [
            "1HP Inverter AC",
            "Mini Inverter Fridge",
            "Washing Machine",
            "43 Inch TV",
            "Bulbs & Fans"
        ]
    },
    {
        id: 8,
        name: "PLATINUM 🔹",
        price: "₦7,200,000",
        category: "Premium",
        system: [
            "10kVA Hybrid Inverter",
            "2x 10kWh Lithium Batteries",
            "16x 550W Panels",
            "Installation Kits"
        ],
        load: [
            "2x 1HP ACs OR 1.5HP AC",
            "1HP Pumping Machine",
            "Inverter Fridge/Freezer",
            "Washing Machine",
            "Full Home Setup"
        ]
    }
];

export const promoPlan = {
    id: 99,
    name: "BEST FRIEND TO THE LANDLORD",
    price: "₦5,000,000",
    tagline: "The Ultimate Promo Deal",
    system: [
        "5kVA Inverter",
        "10kWh Lithium Battery",
        "8x 600W Solar Panels (Upgrade)",
        "Full Installation & Warranty"
    ]
};