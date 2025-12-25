// --- PRODUCT DATABASE ---
const products = [
    // Le Luxe - Gajebo/Pergola
    { id: 1, name: "Celestial Dome Marble Pergola", price: 12500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 2, name: "Eternal Legacy Pavilion", price: 15000, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 3, name: "Heritage Stone Gazebo", price: 11000, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "sandstone" },
    { id: 4, name: "Imperial Carrara Marble Pergola", price: 18000, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 5, name: "Regalia Corinthian Pergola", price: 16500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 6, name: "Serene Marble Court", price: 14000, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 7, name: "The Desert Royale Pergola", price: 13500, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "sandstone" },
    { id: 8, name: "The Eternal Aureum Pergola", price: 17500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 9, name: "The Lattice Pavilion", price: 12000, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    { id: 10, name: "The Regal Harmony Pavilion", price: 16000, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "gajebo-pergola", material: "marble" },
    
    // Le Luxe - Stone Basins
    { id: 11, name: "Aqua Pebble Basin", price: 1800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 12, name: "Arcus Marble Basin", price: 2200, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 13, name: "Aurelia Marble Basin", price: 2400, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 14, name: "Calacatta Marble Basin", price: 2800, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 15, name: "Carrara Marble Basin", price: 2600, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 16, name: "Daino Reale Marble Basin", price: 2500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 17, name: "Emperador Dark Marble Basin", price: 2700, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 18, name: "Eterna Rock Basin", price: 2100, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-basin", material: "basalt" },
    { id: 19, name: "Fluted Harmony Basin", price: 2300, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 20, name: "Makrana White Marble Basin", price: 3000, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 21, name: "Midnight Black Stone Basin", price: 2400, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-basin", material: "basalt" },
    { id: 22, name: "Natural Black Marble Basin", price: 2500, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 23, name: "Nero Flute Basin", price: 2600, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 24, name: "Nero Marquina Marble Basin", price: 2700, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 25, name: "Noir Haven Basin", price: 2500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 26, name: "Pietra Grey Marble Basin", price: 2400, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 27, name: "Regal Arc Basin", price: 2800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-basin", material: "marble" },
    { id: 28, name: "Volcanic Stone Basin", price: 2200, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-basin", material: "basalt" },
    
    // Le Luxe - Wall Murals
    { id: 29, name: "Abstract Harmony Mural", price: 4500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "wall-murals", material: "marble" },
    { id: 30, name: "Botanical Dreams Mural", price: 5000, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "wall-murals", material: "marble" },
    { id: 31, name: "Heritage Pattern Mural", price: 4800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "wall-murals", material: "sandstone" },
    
    // Le Luxe - Counter Top
    { id: 32, name: "Antique Sand Travertine Countertop", price: 3200, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 33, name: "Arctic White Marble Inlay Table", price: 3800, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 34, name: "Aria Marble Accent Table", price: 3500, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 35, name: "Aura Black Table", price: 3600, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 36, name: "Aurelia Stone Coffee Table", price: 4000, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 37, name: "Éclat Face Art Table", price: 4500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 38, name: "Emerald Loop Side Table", price: 3400, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 39, name: "Marbella Orb Table Collection", price: 3900, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 40, name: "Obsidian Arc Console Table", price: 4200, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 41, name: "The Onyx Horizon Center Table", price: 4600, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 42, name: "The Sculpted Wave Table", price: 4300, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    { id: 43, name: "Verdant Sculpture Console", price: 4100, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "counter-top", material: "marble" },
    
    // Le Luxe - Inlay Art
    { id: 44, name: "Floral Inlay Panel", price: 3500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "inlay", material: "marble" },
    { id: 45, name: "Geometric Bone Inlay", price: 3200, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "inlay", material: "marble" },
    { id: 46, name: "Heritage Inlay Art", price: 3800, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "inlay", material: "marble" },
    
    // Le Luxe - Stone Sculptures
    { id: 47, name: "Ethereal Glow – Medusa Light Sculpture", price: 5500, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-sculptures", material: "marble" },
    { id: 48, name: "Ethereal Nexus", price: 6000, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-sculptures", material: "marble" },
    { id: 49, name: "Luminous Bunny – Marble Finish Garden Light Sculpture", price: 4800, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-sculptures", material: "marble" },
    { id: 50, name: "The Inner World", price: 5200, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-sculptures", material: "marble" },
    { id: 51, name: "The Wise Scholar Owl", price: 4900, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-sculptures", material: "marble" },
    
    // Le Luxe - Stone Fountain
    { id: 52, name: "Abstract Harmony Fountain", price: 8500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-fountains", material: "marble" },
    { id: 53, name: "Ecliptica Marble Fountain", price: 9200, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "le-luxe", collection: "stone-fountains", material: "marble" },
    { id: 54, name: "Elysian Flow Fountain", price: 8800, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "le-luxe", collection: "stone-fountains", material: "marble" },
    { id: 55, name: "Fluid Geometry Fountain", price: 9000, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "le-luxe", collection: "stone-fountains", material: "marble" },
    { id: 56, name: "Regal Elephants Fountain", price: 9500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "le-luxe", collection: "stone-fountains", material: "marble" },
    
    // Surface - Sandstone Tiles
    { id: 57, name: "Agra Red Sandstone", price: 850, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 58, name: "Autumn Brown Sandstone", price: 820, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 59, name: "Camel Dust Sandstone", price: 800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 60, name: "Fossil Mint Sandstone", price: 880, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 61, name: "Ita Gold Sandstone", price: 900, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 62, name: "Jaisalmer Yellow Sandstone", price: 870, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 63, name: "Kandla Grey Sandstone", price: 860, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 64, name: "Kota Dessert Sandstone", price: 840, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 65, name: "Mandana Sandstone", price: 890, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 66, name: "Modak Sandstone", price: 830, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 67, name: "Rainbow Sandstone", price: 920, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 68, name: "Raj Green Sandstone", price: 880, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 69, name: "Raveena Sandstone", price: 850, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 70, name: "Teakwood Sandstone", price: 910, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 71, name: "White Mint Sandstone", price: 870, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    { id: 72, name: "Yellow Mint Sandstone", price: 860, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "sandstone-tiles", material: "sandstone" },
    
    // Surface - Limestone Tiles
    { id: 73, name: "Kota Blue Limestone", price: 950, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 74, name: "Kota Brown Limestone", price: 920, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 75, name: "Kurnool Grey Limestone", price: 930, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 76, name: "Lime Black Limestone", price: 960, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 77, name: "Tandur Grey Limestone", price: 940, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    { id: 78, name: "Tandur Yellow Limestone", price: 950, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "limestone-tiles", material: "limestone" },
    
    // Surface - Slatestone Tiles
    { id: 79, name: "Black Slatestone", price: 780, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 80, name: "Black Galaxy Slatestone", price: 850, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 81, name: "Chocolate Slatestone", price: 790, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 82, name: "Copper Slatestone", price: 820, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 83, name: "Golden Slatestone", price: 840, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 84, name: "Indian Autumn Slatestone", price: 810, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 85, name: "Multicolor Slatestone", price: 830, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 86, name: "Ocean Green Slatestone", price: 860, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 87, name: "Silver Grey Slatestone", price: 800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    { id: 88, name: "Vijaya Gold Slatestone", price: 870, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "salestone-tiles", material: "basalt" },
    
    // Surface - Basalt
    { id: 89, name: "Black Basalt Tiles", price: 900, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "basalt", material: "basalt" },
    { id: 90, name: "Natural Basalt Stone", price: 920, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "basalt", material: "basalt" },
    
    // Surface - Porcelain Tiles
    { id: 91, name: "Ardois Galicia Porcelain", price: 1100, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    { id: 92, name: "Country Anthracite Porcelain", price: 1150, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    { id: 93, name: "Fossil Grey Porcelain", price: 1120, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    { id: 94, name: "Kandla Grey Porcelain", price: 1080, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    { id: 95, name: "Riverside Pearl Porcelain", price: 1140, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    { id: 96, name: "Tokyo Crema Porcelain", price: 1130, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "surface", collection: "porcelain-tiles", material: "marble" },
    
    // Temple - Home Temples
    { id: 97, name: "Heritage Temple", price: 8500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "temple", collection: "temple-carvings", material: "marble" },
    { id: 98, name: "Heritage Restorations Temple", price: 9200, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "temple", collection: "temple-carvings", material: "sandstone" },
    { id: 99, name: "Custom Temple Sculpture", price: 8800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "temple", collection: "temple-carvings", material: "marble" },
    { id: 100, name: "Sacred Pillar Design", price: 7500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "temple", collection: "pillars-torans", material: "sandstone" },
    
    // Sculptures - Stone Sculptures Art
    { id: 101, name: "Abstract Stone Art", price: 4500, img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800", category: "sculptures", collection: "stone-sculptures-art", material: "marble" },
    { id: 102, name: "Modern Stone Sculpture", price: 5200, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?w=800", category: "sculptures", collection: "stone-sculptures-art", material: "basalt" },
    
    // Sculptures - Fountains
    { id: 103, name: "Garden Fountain Classic", price: 6800, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800", category: "sculptures", collection: "fountains", material: "marble" },
    { id: 104, name: "Tiered Water Feature", price: 7500, img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=800", category: "sculptures", collection: "fountains", material: "marble" }
];

// --- MAGNETIC SLIDING NAVIGATION ---
function initMagneticNav() {
    const magneticBg = document.getElementById('nav-magnetic-bg');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-item > .nav-link');
    
    if (!magneticBg || navItems.length === 0) return;

    let activeItem = null;

    function updateBackgroundPosition(item) {
        if (!item) {
            magneticBg.classList.remove('active');
            // Remove has-bg from all items when hiding background
            navItems.forEach(navItem => navItem.classList.remove('has-bg'));
            return;
        }

        const link = item.querySelector('.nav-link');
        if (!link) return;

        const rect = link.getBoundingClientRect();
        const navBoxRect = magneticBg.parentElement.getBoundingClientRect();

        const left = rect.left - navBoxRect.left;
        const top = rect.top - navBoxRect.top;
        const width = rect.width;
        const height = rect.height;

        magneticBg.style.left = `${left}px`;
        magneticBg.style.top = `${top}px`;
        magneticBg.style.width = `${width}px`;
        magneticBg.style.height = `${height}px`;
        magneticBg.classList.add('active');
        
        // CRITICAL: Remove has-bg from ALL items first, then add only to current
        navItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    // Hover effect
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(item);
            }
        });
    });

    // Mouse leave - return to active or hide
    const navBox = document.getElementById('nav-box');
    if (navBox) {
        navBox.addEventListener('mouseleave', () => {
            if (window.innerWidth > 900) {
                if (activeItem) {
                    updateBackgroundPosition(activeItem);
                } else {
                    magneticBg.classList.remove('active');
                    navItems.forEach(navItem => navItem.classList.remove('has-bg'));
                }
            }
        });
    }

    // Click to set active state
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            // Remove active from all items
            navItems.forEach(item => item.classList.remove('active'));
            
            // Set current as active
            const parentItem = navItems[index];
            parentItem.classList.add('active');
            activeItem = parentItem;
            
            if (window.innerWidth > 900) {
                updateBackgroundPosition(activeItem);
            }
        });
    });

    // Set Home as default active
    if (navItems[0]) {
        navItems[0].classList.add('active');
        activeItem = navItems[0];
        setTimeout(() => {
            if (window.innerWidth > 900) {
                updateBackgroundPosition(activeItem);
            }
        }, 100);
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        if (activeItem && window.innerWidth > 900) {
            updateBackgroundPosition(activeItem);
        } else if (window.innerWidth <= 900) {
            magneticBg.classList.remove('active');
            navItems.forEach(navItem => navItem.classList.remove('has-bg'));
        }
    });
}

const categoryData = {
    'mines': {
        title: "Our Private Mines",
        desc: "We source our raw stone directly from premium quarries, ensuring the highest grade of natural marble and sandstone from the very start.",
        img: "img/grungy-gray-marble-textured-background.jpg"
    },
    'manufacturing-units': {
        title: "State-of-the-Art Facilities",
        desc: "Our manufacturing units utilize precision Italian machinery to cut and polish stone to international luxury standards.",
        img: "img/2046556.jpg"
    },
    'quality-control': {
        title: "Rigorous Inspection",
        desc: "Every slab undergoes a 12-point quality check to ensure color consistency, structural integrity, and a flawless finish.",
        img: "img/pastel-purple-marble-background-with-gold-lining.jpg"
    },
    'packaging-unit': {
        title: "Secure Global Shipping",
        desc: "Custom wooden crating and reinforced padding ensure that every masterpiece arrives at your doorstep in perfect condition.",
        img: "img/2046556.jpg"
    }
};

// --- INITIALIZE PAGE ---
document.addEventListener('DOMContentLoaded', () => {
    // Render all products on initial load
    renderProducts();
    
    // Set initial breadcrumb to show "All Collection"
    const categoryNameEl = document.getElementById('category-name');
    const arrowSep = document.getElementById('arrow-separator');
    if (categoryNameEl) categoryNameEl.textContent = '';
    if (arrowSep) arrowSep.style.display = 'none';

    // Initialize Magnetic Sliding Navigation Background
    initMagneticNav();
    
    // Initialize Horizontal Nav Magnetic Effect
    initHorizontalMagneticNav();

    // Initialize mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navBox = document.getElementById('nav-box');
    
    if (mobileMenuToggle && navBox) {
        mobileMenuToggle.addEventListener('click', () => {
            navBox.classList.toggle('active');
            const isActive = navBox.classList.contains('active');
            mobileMenuToggle.textContent = isActive ? '✕' : '☰';
            mobileMenuToggle.setAttribute('aria-expanded', isActive);
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navBox.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navBox.classList.remove('active');
                mobileMenuToggle.textContent = '☰';
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close menu when clicking a nav link
        const navLinks = navBox.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 900) {
                    navBox.classList.remove('active');
                    mobileMenuToggle.textContent = '☰';
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }
    
    // Initialize filter dropdown toggles
    const filterDropdownHeaders = document.querySelectorAll('.filter-dropdown-header');
    filterDropdownHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            // Don't toggle if clicking on checkbox
            if (e.target.type === 'checkbox') return;
            
            const dropdownId = header.getAttribute('data-toggle');
            const dropdownContent = document.getElementById(dropdownId);
            
            // Toggle current dropdown
            header.classList.toggle('open');
            dropdownContent.classList.toggle('open');
        });
    });
    
    // Parent checkbox logic - check/uncheck all children
    const parentCheckboxes = document.querySelectorAll('.parent-checkbox');
    parentCheckboxes.forEach(parentCheckbox => {
        parentCheckbox.addEventListener('change', function() {
            const categoryValue = this.value;
            const childCheckboxes = document.querySelectorAll(`input[data-parent="${categoryValue}"]`);
            
            childCheckboxes.forEach(child => {
                child.checked = this.checked;
            });
        });
    });
    
    // Child checkbox logic - update parent if all children are checked/unchecked
    const collectionCheckboxes = document.querySelectorAll('input[name="collection"]');
    collectionCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const parentValue = this.getAttribute('data-parent');
            const parentCheckbox = document.querySelector(`.parent-checkbox[value="${parentValue}"]`);
            const siblings = document.querySelectorAll(`input[data-parent="${parentValue}"]`);
            
            const allChecked = Array.from(siblings).every(cb => cb.checked);
            const anyChecked = Array.from(siblings).some(cb => cb.checked);
            
            if (parentCheckbox) {
                parentCheckbox.checked = allChecked;
                parentCheckbox.indeterminate = anyChecked && !allChecked;
            }
        });
    });
    
    // Apply Filters functionality
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', () => {
            applyFilters();
        });
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', () => {
            clearAllFilters();
        });
    }

    // initialize horizontal nav after DOM ready
    if (typeof initHorizontalNav === 'function') initHorizontalNav();
    
    // Logo click - go to hero/home section
    const logoLink = document.getElementById('logo-link');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Home link - go to hero/home section
    const homeLink = document.getElementById('home-link');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Gallery link - open all collection section
    const galleryLink = document.getElementById('gallery-link');
    if (galleryLink) {
        galleryLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Reset to show all products
            renderProducts();
            
            // Clear breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            if (categoryNameEl) categoryNameEl.textContent = '';
            if (arrowSep) arrowSep.style.display = 'none';
            
            // Remove active class from all nav items in horizontal nav
            document.querySelectorAll('.h-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
    
    // Add event listener for All Collection button
    const allCollectionBtn = document.getElementById('all-collection-btn');
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', () => {
            // Reset to show all products
            renderProducts();
            
            // Clear breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            if (categoryNameEl) categoryNameEl.textContent = '';
            if (arrowSep) arrowSep.style.display = 'none';
            
            // Remove active class from all nav items
            document.querySelectorAll('.h-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Close any open submenus
            document.querySelectorAll('.h-nav-item.open').forEach(item => {
                item.classList.remove('open', 'on-top');
            });
            document.querySelectorAll('.h-nav-btn').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
});

// --- HORIZONTAL NAV MAGNETIC SLIDING EFFECT ---
function initHorizontalMagneticNav() {
    const hMagneticBg = document.getElementById('h-nav-magnetic-bg');
    const hNavItems = document.querySelectorAll('.h-nav-item');
    const hNavBtns = document.querySelectorAll('.h-nav-btn');
    
    if (!hMagneticBg || hNavItems.length === 0) return;

    let activeHItem = null;

    function updateHorizontalBgPosition(item) {
        if (!item) {
            hMagneticBg.classList.remove('active');
            // Remove has-bg from all items when hiding background
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
            return;
        }

        const btn = item.querySelector('.h-nav-btn');
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const navRect = hMagneticBg.parentElement.getBoundingClientRect();

        const left = rect.left - navRect.left;
        const top = rect.top - navRect.top;
        const width = rect.width;
        const height = rect.height;

        hMagneticBg.style.left = `${left}px`;
        hMagneticBg.style.top = `${top}px`;
        hMagneticBg.style.width = `${width}px`;
        hMagneticBg.style.height = `${height}px`;
        hMagneticBg.classList.add('active');
        
        // CRITICAL: Remove has-bg from ALL items first, then add only to current
        hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        item.classList.add('has-bg');
    }

    // Hover effect
    hNavItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth > 900) {
                updateHorizontalBgPosition(item);
            }
        });
    });

    // Mouse leave - return to active or hide
    const horizontalNav = document.querySelector('.horizontal-nav');
    if (horizontalNav) {
        horizontalNav.addEventListener('mouseleave', () => {
            if (window.innerWidth > 900) {
                if (activeHItem) {
                    updateHorizontalBgPosition(activeHItem);
                } else {
                    hMagneticBg.classList.remove('active');
                    hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
                }
            }
        });
    }

    // Click to set active state
    hNavBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Remove active from all items
            hNavItems.forEach(item => item.classList.remove('active'));
            
            // Set current as active
            const parentItem = hNavItems[index];
            parentItem.classList.add('active');
            activeHItem = parentItem;
            
            if (window.innerWidth > 900) {
                updateHorizontalBgPosition(activeHItem);
            }
        });
    });

    // All Collection button removes active state
    const allCollectionBtn = document.getElementById('all-collection-btn');
    if (allCollectionBtn) {
        allCollectionBtn.addEventListener('click', () => {
            hNavItems.forEach(item => item.classList.remove('active'));
            activeHItem = null;
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        });
    }

    // Update on window resize
    window.addEventListener('resize', () => {
        if (activeHItem && window.innerWidth > 900) {
            updateHorizontalBgPosition(activeHItem);
        } else if (window.innerWidth <= 900) {
            hMagneticBg.classList.remove('active');
            hNavItems.forEach(navItem => navItem.classList.remove('has-bg'));
        }
    });
}

// --- Horizontal nav product categories (used by the center long bar) ---


const productCategories = {
    'le-luxe': {
        title: 'Le Luxe',
        desc: 'Premium outdoor & hardscape solutions — pergolas, basins, murals, and curated hardscape.',
        img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200',
        items: [ 'Gajebo / Pergola', 'Stone Basin', 'Wall Murals', 'Stone Sculptures', 'Stone Fountains', 'Counter Top', 'Inlay' ]
    },
    'surface': {
        title: 'Surface',
        desc: 'Sandstone, Limestone, Salestone, Basalt and Porcelain tile collections.',
        img: 'https://images.unsplash.com/photo-1548095115-45697e7a3e6b?w=1200',
        items: [ 'Sandstone Tiles', 'Limestone Tiles', 'Salestone Tiles', 'Basalt', 'Porcelain Tiles' ]
    },
    'temple': {
        title: 'Temple',
        desc: 'Traditional and custom temple elements and carvings.',
        img: 'https://images.unsplash.com/photo-1582719478171-ff6b80a7b1f7?w=1200',
        items: [ 'Temple Carvings', 'Pillars & Torans' ]
    },
    'sculptures': {
        title: 'Sculptures',
        desc: 'Hand-carved centerpieces that define a space.',
        img: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=1200',
        items: [ 'Stone Sculptures', 'Fountains' ]
    }
};

function initHorizontalNav() {
    const nav = document.querySelector('.horizontal-nav');
    if (!nav) return;

    // Close sibling menus on hover, force-hide their submenus, and bring current submenu to top
    nav.querySelectorAll('.h-nav-item').forEach(li => {
        li.addEventListener('mouseenter', () => {
            Array.from(li.parentElement.children).forEach(sib => {
                if (sib !== li) {
                    sib.classList.remove('open', 'on-top');
                    const sibBtn = sib.querySelector('.h-nav-btn');
                    if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
                    // Force-hide sibling submenu immediately (overrides :hover)
                    const sibSub = sib.querySelector('.h-submenu');
                    if (sibSub) {
                        sibSub.style.opacity = '0';
                        sibSub.style.visibility = 'hidden';
                        sibSub.style.pointerEvents = 'none';
                    }
                }
            });
            // Add on-top so the submenu appears above any siblings
            li.classList.add('on-top');
            // Ensure current submenu inline styles are cleared so it can show normally
            const curSub = li.querySelector('.h-submenu');
            if (curSub) {
                curSub.style.opacity = '';
                curSub.style.visibility = '';
                curSub.style.pointerEvents = '';
            }
        });
        li.addEventListener('mouseleave', () => {
            // Remove on-top when leaving unless it's explicitly open (user clicked it)
            if (!li.classList.contains('open')) li.classList.remove('on-top');
        });
    });

    // Remove any forced inline hiding when the mouse leaves the whole nav area
    nav.addEventListener('mouseleave', () => {
        nav.querySelectorAll('.h-submenu').forEach(s => {
            s.style.opacity = '';
            s.style.visibility = '';
            s.style.pointerEvents = '';
        });
    });

    // Toggle on button click (helpful for touch) and also render category gallery
    nav.querySelectorAll('.h-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const li = btn.closest('.h-nav-item');
            const cat = li.dataset.cat;

            // Filter and render products for this category
            const filteredProducts = products.filter(p => p.category === cat);
            renderProducts(filteredProducts);
            
            // Update breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            if (categoryNameEl && arrowSep) {
                const categoryNames = {
                    'le-luxe': 'Le Luxe',
                    'surface': 'Surface',
                    'temple': 'Temple',
                    'sculptures': 'Sculptures'
                };
                categoryNameEl.textContent = categoryNames[cat] || cat;
                arrowSep.style.display = 'inline';
            }
            
            // Add active class to clicked item, remove from siblings
            Array.from(li.parentElement.children).forEach(sib => {
                sib.classList.remove('active');
            });
            li.classList.add('active');

            const isOpen = li.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            // ensure correct stacking
            if (isOpen) li.classList.add('on-top'); else li.classList.remove('on-top');

            // close siblings and remove their on-top
            Array.from(li.parentElement.children).forEach(sib => {
                if (sib !== li) {
                    sib.classList.remove('open', 'on-top');
                    const sibBtn = sib.querySelector('.h-nav-btn');
                    if (sibBtn) sibBtn.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Subitem clicks render right-side details and gallery filtered to the item
    nav.querySelectorAll('.h-submenu a').forEach(a => {
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = a.dataset.cat;
            const item = a.dataset.item;
            
            // Convert item name to collection value
            // "Gajebo / Pergola" -> "gajebo-pergola"
            // "Stone Basin" -> "stone-basin"
            const collectionValue = item.toLowerCase()
                .replace(/\s*\/\s*/g, '-')  // Replace " / " with "-"
                .replace(/\s+/g, '-')        // Replace spaces with "-"
                .replace(/&/g, '')           // Remove ampersands
                .replace(/-+/g, '-');        // Replace multiple dashes with single dash
            
            // Filter products by both category and collection
            const filteredProducts = products.filter(p => {
                return p.category === cat && p.collection === collectionValue;
            });
            
            renderProducts(filteredProducts);
            
            // Update breadcrumb
            const categoryNameEl = document.getElementById('category-name');
            const arrowSep = document.getElementById('arrow-separator');
            if (categoryNameEl && arrowSep) {
                categoryNameEl.textContent = item;
                arrowSep.style.display = 'inline';
            }

            // Close any open submenu on click (mobile expectation)
            Array.from(nav.querySelectorAll('.h-nav-item.open')).forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
            
            // Scroll to gallery section
            const gallery = document.querySelector('.unified-gallery-wrapper');
            if (gallery) {
                gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.horizontal-nav-container')) {
            nav.querySelectorAll('.h-nav-item.open').forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });

    // close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            nav.querySelectorAll('.h-nav-item.open').forEach(n => n.classList.remove('open', 'on-top'));
            nav.querySelectorAll('.h-nav-btn').forEach(b => b.setAttribute('aria-expanded', 'false'));
        }
    });
}

// --- RENDER SHOP ---
function renderProducts(filteredProducts = null) {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear existing products
    
    const productsToRender = filteredProducts || products;
    
    if (productsToRender.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 40px; color: #666; grid-column: 1/-1;">No products found matching your filters.</p>';
        return;
    }
    
    productsToRender.forEach(p => {
        container.innerHTML += `
            <div class="card">
                <img src="${p.img}" alt="${p.name}">
                <h3 style="margin-top:20px">${p.name}</h3>
                <p style="color: #888; margin: 10px 0">$${p.price.toLocaleString()}</p>
                <div style="display:flex; gap:10px; margin-top:12px">
                    <button class="connect-btn" style="flex:1" onclick="enquireProduct('${encodeURIComponent(p.name)}')">Enquire</button>
                    <button class="connect-btn" style="flex:1" onclick="viewProduct('${encodeURIComponent(p.name)}', ${p.price})">View Product</button>
                </div>
            </div>`;
    });
}

// --- PRODUCT INTERACTIONS ---
function enquireProduct(encodedName) {
    const name = decodeURIComponent(encodedName);
    alert(`Enquiry submitted for ${name}. Our team will contact you shortly.`);
}

function viewProduct(encodedName, price) {
    const name = decodeURIComponent(encodedName);
    alert(`${name} - $${price.toLocaleString()}\n\nClick "Enquire" to get more details about this product.`);
}

// --- VERTICAL NAV LOGIC ---
// --- VERTICAL SHOWROOM AUTO-CYCLE ---
const categories = ['mines', 'manufacturing-units', 'quality-control', 'packaging-unit'];
let currentCategoryIndex = 0;
let categoryAutoplayInterval;

function showCategory(cat, element) {
    // 1. Handle Active Tab Styling
    document.querySelectorAll('.v-nav-item').forEach(item => item.classList.remove('active'));
    
    if (element) {
        element.classList.add('active');
    } else {
        // Find and activate the element by category name
        const items = document.querySelectorAll('.v-nav-item');
        items.forEach((item, index) => {
            if (categories[index] === cat) {
                item.classList.add('active');
            }
        });
    }

    const data = categoryData[cat];
    if (!data) return;

    // 2. Update the Center Image with smooth fade and scale transition
    const mediaContainer = document.getElementById('category-media');
    const currentImg = mediaContainer.querySelector('.btw-image');
    
    // Fade out and scale down current image
    if (currentImg) {
        currentImg.style.opacity = '0';
        currentImg.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
            // Fade in and scale to normal
            setTimeout(() => {
                const newImg = mediaContainer.querySelector('.btw-image');
                if (newImg) {
                    newImg.style.opacity = '1';
                    newImg.style.transform = 'scale(1)';
                }
            }, 50);
        }, 500);
    } else {
        // First load
        mediaContainer.innerHTML = `<img src="${data.img}" class="btw-image" alt="${data.title}" style="opacity: 0; transform: scale(1.05);">`;
        setTimeout(() => {
            const newImg = mediaContainer.querySelector('.btw-image');
            if (newImg) {
                newImg.style.opacity = '1';
                newImg.style.transform = 'scale(1)';
            }
        }, 50);
    }

    // 3. Update the Right Section Content with smooth fade and slide
    const display = document.getElementById('category-display');
    display.style.opacity = '0';
    display.style.transform = 'translateX(20px)';
    
    setTimeout(() => {
        display.innerHTML = `
            <div class="category-details">
                <h3 class="v-nav-list" style="border:none; color:#111; font-size: 1.6rem; font-weight: 600;">${data.title}</h3>
                <p class="muted">${data.desc}</p>
                <button class="connect-btn explore-btn">Explore Categories</button>
            </div>
        `;
        setTimeout(() => {
            display.style.opacity = '1';
            display.style.transform = 'translateX(0)';
        }, 50);
    }, 500);
    
    // Update currentCategoryIndex
    currentCategoryIndex = categories.indexOf(cat);
    
    // Reset autoplay timer
    clearInterval(categoryAutoplayInterval);
    startCategoryAutoplay();
}

function nextCategory() {
    currentCategoryIndex = (currentCategoryIndex + 1) % categories.length;
    showCategory(categories[currentCategoryIndex]);
}

function startCategoryAutoplay() {
    categoryAutoplayInterval = setInterval(() => {
        nextCategory();
    }, 5000); // Change category every 5 seconds
}

// Initialize autoplay and display first category on page load
document.addEventListener('DOMContentLoaded', () => {
    // Show initial category (mines) with image
    showCategory('mines');
    // Start autoplay
    startCategoryAutoplay();
});

// --- HERO SLIDER WITH LUXURY BLACKOUT FADE ---
const slides = document.querySelectorAll('.slide');
const bulletNav = document.getElementById('bullet-nav');
let currentSlide = 0;
let sliderInterval;

// Create bullet points
function initBullets() {
    slides.forEach((_, index) => {
        const bullet = document.createElement('button');
        bullet.classList.add('bullet');
        if (index === 0) bullet.classList.add('active');
        bullet.setAttribute('aria-label', `Go to slide ${index + 1}`);
        bullet.onclick = () => goToSlide(index);
        bulletNav.appendChild(bullet);
    });
}

function updateBullets() {
    document.querySelectorAll('.bullet').forEach((bullet, index) => {
        bullet.classList.toggle('active', index === currentSlide);
    });
}

function moveSlide(step) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateBullets();
    resetSliderInterval();
}

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    updateBullets();
    resetSliderInterval();
}

function resetSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => moveSlide(1), 6000);
}

// Initialize bullets on startup
document.addEventListener('DOMContentLoaded', () => {
    initBullets();
    resetSliderInterval();
    document.getElementById('next-btn').onclick = () => moveSlide(1);
    document.getElementById('prev-btn').onclick = () => moveSlide(-1);
});

// --- DROPDOWN TOUCH/CLICK SUPPORT & ACCESSIBILITY ---
(function() {
    const nav = document.querySelector('.nav-box');
    if (!nav) return;

    // Add ARIA attributes to items with submenus
    nav.querySelectorAll('li').forEach(li => {
        const link = li.querySelector(':scope > a');
        if (link && li.querySelector('ul')) {
            link.setAttribute('aria-haspopup', 'true');
            link.setAttribute('aria-expanded', 'false');
        }
    });

    // Handle clicks: toggle submenu for items that contain a submenu
    document.addEventListener('click', (e) => {
        const toggle = e.target.closest('.nav-box a');
        if (!toggle) {
            // Click outside nav: close any open menus
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
            return;
        }

        const parentLi = toggle.parentElement;
        if (!parentLi) return;

        // If this item contains a submenu, toggle it instead of following the link
        if (parentLi.querySelector('ul')) {
            e.preventDefault();
            const opened = parentLi.classList.toggle('open');
            toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');

            // Close sibling menus
            Array.from(parentLi.parentElement.children).forEach(sib => {
                if (sib !== parentLi) sib.classList.remove('open');
            });
        } else {
            // clicking a normal nav link: close menus
            document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
        }
    });

    // Close menus with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') document.querySelectorAll('.nav-box .open').forEach(n => n.classList.remove('open'));
    });
})();

// --- FILTER FUNCTIONALITY ---
document.addEventListener('DOMContentLoaded', () => {
    const applyFiltersBtn = document.getElementById('apply-filters');
    const clearFiltersBtn = document.getElementById('clear-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.onclick = () => {
            applyFilters();
        };
    }
    
    if (clearFiltersBtn) {
        clearFiltersBtn.onclick = () => {
            clearAllFilters();
        };
    }
});

// --- FILTER FUNCTIONS ---
function applyFilters() {
    // Get selected categories (parent checkboxes)
    const selectedCategories = Array.from(document.querySelectorAll('.parent-checkbox:checked')).map(el => el.value);
    
    // Get selected collections (child checkboxes)
    const selectedCollections = Array.from(document.querySelectorAll('input[name="collection"]:checked')).map(el => el.value);
    
    // Get selected price range
    const selectedPrice = document.querySelector('input[name="price"]:checked')?.value;
    
    // Get selected materials
    const selectedMaterials = Array.from(document.querySelectorAll('input[name="material"]:checked')).map(el => el.value);
    
    // Filter products
    let filteredProducts = products.filter(product => {
        // Category filter
        let categoryMatch = true;
        if (selectedCategories.length > 0) {
            categoryMatch = selectedCategories.includes(product.category);
        }
        
        // Collection filter (only if collections are selected)
        let collectionMatch = true;
        if (selectedCollections.length > 0) {
            collectionMatch = selectedCollections.includes(product.collection);
        }
        
        // Price filter
        let priceMatch = true;
        if (selectedPrice && selectedPrice !== 'all') {
            if (selectedPrice === 'low') {
                priceMatch = product.price < 2000;
            } else if (selectedPrice === 'mid') {
                priceMatch = product.price >= 2000 && product.price <= 4000;
            } else if (selectedPrice === 'high') {
                priceMatch = product.price > 4000;
            }
        }
        
        // Material filter
        let materialMatch = true;
        if (selectedMaterials.length > 0) {
            materialMatch = selectedMaterials.includes(product.material);
        }
        
        return categoryMatch && collectionMatch && priceMatch && materialMatch;
    });
    
    // Render filtered products
    renderProducts(filteredProducts);
    
    // Update breadcrumb
    updateBreadcrumb(selectedCategories, selectedCollections);
}

function clearAllFilters() {
    // Clear all category checkboxes
    document.querySelectorAll('.parent-checkbox').forEach(el => {
        el.checked = false;
        el.indeterminate = false;
    });
    
    // Clear all collection checkboxes
    document.querySelectorAll('input[name="collection"]').forEach(el => el.checked = false);
    
    // Clear all material checkboxes
    document.querySelectorAll('input[name="material"]').forEach(el => el.checked = false);
    
    // Reset price to "all"
    const allPriceRadio = document.querySelector('input[name="price"][value="all"]');
    if (allPriceRadio) allPriceRadio.checked = true;
    
    // Render all products
    renderProducts();
    
    // Reset breadcrumb
    const categoryName = document.getElementById('category-name');
    const arrowSeparator = document.getElementById('arrow-separator');
    if (categoryName) categoryName.textContent = '';
    if (arrowSeparator) arrowSeparator.style.display = 'none';
}

function updateBreadcrumb(categories, collections) {
    const categoryName = document.getElementById('category-name');
    const arrowSeparator = document.getElementById('arrow-separator');
    
    if (!categoryName || !arrowSeparator) return;
    
    if (categories.length > 0 || collections.length > 0) {
        let breadcrumbText = '';
        
        if (categories.length > 0) {
            breadcrumbText = categories.map(cat => {
                return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }).join(', ');
        }
        
        if (collections.length > 0) {
            if (breadcrumbText) breadcrumbText += ' > ';
            breadcrumbText += collections.map(col => {
                return col.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            }).join(', ');
        }
        
        categoryName.textContent = breadcrumbText;
        arrowSeparator.style.display = 'inline';
    } else {
        categoryName.textContent = '';
        arrowSeparator.style.display = 'none';
    }
}

