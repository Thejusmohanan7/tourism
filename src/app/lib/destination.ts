export type Destination = {
    slug: string;
    name: string;
    caption: string;
    desc: string;
};

export const INTERNATIONAL: Destination[] = [
    { slug: 'bali', name: 'Bali', caption: 'Island of the Gods', desc: 'Rice terraces, cliff-top temples and beach clubs. A honeymoon favourite.' },
    { slug: 'vietnam', name: 'Vietnam', caption: 'Timeless Charm', desc: 'Ha Long Bay cruises, lantern-lit Hoi An and unforgettable street food.' },
    { slug: 'maldives', name: 'Maldives', caption: 'Overwater Bliss', desc: 'Private villas above turquoise lagoons, coral reefs and golden sunsets.' },
    { slug: 'sri-lanka', name: 'Sri Lanka', caption: 'Pearl of the Indian Ocean', desc: 'Tea hills, wild safaris, golden beaches and ancient temples.' },
    { slug: 'malaysia', name: 'Malaysia', caption: 'Truly Asia', desc: 'Kuala Lumpur skylines, Langkawi beaches and Cameron Highlands tea farms.' },
    { slug: 'singapore', name: 'Singapore', caption: 'The Garden City', desc: 'Gardens by the Bay, Sentosa fun and spotless streets. Great for families.' },
    { slug: 'thailand', name: 'Thailand', caption: 'Land of Smiles', desc: 'Phuket and Krabi islands, Bangkok nights and elephant sanctuaries.' },
    { slug: 'dubai', name: 'Dubai', caption: 'City of Superlatives', desc: 'Burj Khalifa, desert safaris and luxury shopping in one stay.' },
    { slug: 'georgia', name: 'Georgia', caption: 'Where Europe Meets Asia', desc: "Tbilisi's old town, Caucasus peaks and the wine valleys of Kakheti." },
    { slug: 'azerbaijan', name: 'Azerbaijan', caption: 'Land of Fire', desc: "Baku's futuristic skyline, walled old city and Gabala mountain escapes." },
    { slug: 'kazakhstan', name: 'Kazakhstan', caption: 'Steppe & Sky', desc: "Almaty's alpine lakes, Charyn Canyon and a futuristic Astana." },
    { slug: 'bhutan', name: 'Bhutan', caption: 'The Last Shangri-La', desc: 'Cliffside monasteries, Himalayan trails and a kingdom that values happiness.' },
    { slug: 'nepal', name: 'Nepal', caption: 'Roof of the World', desc: "Everest views, Kathmandu's temples and Pokhara's lakeside calm." },
];

export const DOMESTIC: Destination[] = [
    { slug: 'andaman', name: 'Andaman', caption: 'The Emerald Islands', desc: "Havelock's white sands, Radhanagar Beach, scuba diving and clear water." },
    { slug: 'goa', name: 'Goa', caption: 'Sun, Sand & Susegad', desc: 'Beach shacks, Portuguese lanes, lively nights and Arabian Sea sunsets.' },
    { slug: 'gujarat', name: 'Gujarat', caption: 'From the Rann to Gir', desc: 'White Rann of Kutch, Gir lions, Somnath temple and the Statue of Unity.' },
    { slug: 'kashmir', name: 'Kashmir', caption: 'Paradise on Earth', desc: 'Dal Lake shikaras, Gulmarg snow slopes and the valleys of Pahalgam.' },
    { slug: 'leh-ladakh', name: 'Leh Ladakh', caption: 'Land of High Passes', desc: 'Pangong Lake, hilltop monasteries and legendary Himalayan road trips.' },
    { slug: 'himachal-pradesh', name: 'Himachal', caption: 'Mountains & Mall Roads', desc: 'Shimla, Manali, Spiti and Kasol for snow, cafes and adventure.' },
    { slug: 'uttarakhand', name: 'Uttarakhand', caption: 'Devbhoomi', desc: 'Rishikesh rafting, Mussoorie hills, Nainital lakes and Himalayan pilgrimages.' },
    { slug: 'delhi-agra-jaipur', name: 'Delhi · Agra · Jaipur', caption: "India's Golden Triangle", desc: 'The classic route: Red Fort, the Taj Mahal and the palaces of the Pink City.' },
    { slug: 'rajasthan', name: 'Rajasthan', caption: 'Land of Kings', desc: 'Jodhpur forts, Udaipur lakes and camel rides at sunset in Jaisalmer.' },
    { slug: 'odisha', name: 'Odisha', caption: 'The Soul of India', desc: "Puri's Jagannath temple, the Konark Sun Temple and Chilika lagoon." },
    { slug: 'hyderabad', name: 'Hyderabad', caption: 'City of Pearls', desc: 'Charminar, Golconda Fort, Ramoji Film City and legendary biryani.' },
    { slug: 'meghalaya', name: 'Meghalaya', caption: 'Abode of Clouds', desc: "Living root bridges, Dawki's crystal rivers and Cherrapunji waterfalls." },
    { slug: 'sikkim', name: 'Sikkim', caption: 'Himalayan Hideaway', desc: 'Gangtok, Tsomgo Lake and Kanchenjunga views in a peaceful hill state.' },
    { slug: 'varanasi-ayodhya', name: 'Varanasi & Ayodhya', caption: 'Spiritual India', desc: "Ganga aarti on Varanasi's ghats and the sacred temples of Ayodhya." },
    { slug: 'kerala', name: 'Kerala', caption: "God's Own Country", desc: 'Munnar tea hills, Alleppey houseboats, backwater kayaking and Ayurveda.' },
];