// Catálogo completo de 90 fragancias con frases únicas y diseño de frasco
const PERFUMES = [
  { id: 1, name: "Perfume Badee Al Oud Honor Glory Edp", brand: "Lattafa", gender: "Unisex", conc: "EDP", price: 215000, niche: true, c1: "#F8F6F0", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Piña caramelizada y especias reales: lujo árabe imposible de ignorar." },
  { id: 2, name: "Perfume Ariana Grande Cloud Edt", brand: "Ariana Grande", gender: "Mujer", conc: "EDT", price: 180000, niche: false, c1: "#CBE7F5", c2: "#FFFFFF", cap: "#A8D5EC", shape: "round", quote: "Dulzura etérea de crema batida, coco y lavanda que envuelve como un abrazo." },
  { id: 3, name: "Perfume Carolina Herrera Good Girl Blush", brand: "Carolina Herrera", gender: "Mujer", conc: "EDP", price: 145000, niche: false, c1: "#F6C1CE", c2: "#D4AF37", cap: "#D4AF37", shape: "stiletto", quote: "Feminidad luminosa con peonía fresca y doble dosis de vainilla sensual." },
  { id: 4, name: "Perfume Giorgio Armani Acqua Di Gio Profondo", brand: "Giorgio Armani", gender: "Hombre", conc: "EDP", price: 175000, niche: false, c1: "#16324F", c2: "#2C5282", cap: "#1A202C", shape: "classic", quote: "Elegancia marina profunda con mandarina verde y minerales intensos." },
  { id: 5, name: "Perfume Bvlgari Omnia Coral Edt", brand: "Bvlgari", gender: "Mujer", conc: "EDT", price: 155000, niche: false, c1: "#E53E3E", c2: "#CBD5E0", cap: "#E2E8F0", shape: "round", quote: "Explosión radiante de hibisco y granada que ilumina los días soleados." },
  { id: 6, name: "Perfume Creed Millesime Imperial Edt", brand: "Creed", gender: "Unisex", conc: "EDT", price: 165000, niche: true, c1: "#E6C253", c2: "#B7952B", cap: "#D4AF37", shape: "crest", quote: "Distinción dorada con sal marina y frutas cítricas digna de la realeza." },
  { id: 7, name: "Perfume Hugo Boss Red", brand: "Hugo Boss", gender: "Hombre", conc: "EDT", price: 140000, niche: false, c1: "#C53030", c2: "#9B2C2C", cap: "#1A202C", shape: "flask", quote: "Adrenalina pura con pomelo vibrante, pimienta rosa y notas metálicas." },
  { id: 8, name: "Perfume Viking Kashmir Bharara Edp", brand: "Bharara", gender: "Hombre", conc: "EDP", price: 215000, niche: true, c1: "#7B1E26", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Potencia oriental conquistadora con especias exóticas y maderas nobles." },
  { id: 9, name: "Perfume Bvlgari Omnia Crystalline Edt", brand: "Bvlgari", gender: "Mujer", conc: "EDT", price: 150000, niche: false, c1: "#EDF2F7", c2: "#CBD5E0", cap: "#A0AEC0", shape: "round", quote: "Pureza cristalina de flor de loto y bambú que transmite paz y clase." },
  { id: 10, name: "Perfume Carolina Herrera Bad Boy Cobalt Edt", brand: "Carolina Herrera", gender: "Hombre", conc: "EDT", price: 155000, niche: false, c1: "#1E3A8A", c2: "#172554", cap: "#D4AF37", shape: "bolt", quote: "Energía eléctrica de ciruela negra, trufa y cedro mineral audaz." },
  { id: 11, name: "Perfume Dolce Gabbana Light Blue Edt", brand: "Dolce & Gabbana", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#EBF8FF", c2: "#BEE3F8", cap: "#CBD5E0", shape: "classic", quote: "Brisa fresca del Mediterráneo con toronja siciliana y enebro vigorizante." },
  { id: 12, name: "Perfume Rabanne Invictus Edt", brand: "Paco Rabanne", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#A0AEC0", c2: "#718096", cap: "#CBD5E0", shape: "trophy", quote: "El aroma de la victoria: frescura marina con laureles y ámbar gris." },
  { id: 13, name: "Perfume Carolina Herrera 212 Sexy Men Edt", brand: "Carolina Herrera", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#822727", c2: "#C53030", cap: "#742A2A", shape: "cylinder", quote: "Magnetismo nocturno con vainilla especiada, cardamomo y mandarina." },
  { id: 14, name: "Perfume Versace Eros Flame Edt", brand: "Versace", gender: "Hombre", conc: "EDP", price: 150000, niche: false, c1: "#B91C1C", c2: "#D4AF37", cap: "#D4AF37", shape: "square", quote: "Pasión ardiente que contrasta cítricos fríos con pimienta y haba tonka." },
  { id: 15, name: "Perfume Jean Paul Gaultier Le Male Edp", brand: "Jean Paul Gaultier", gender: "Hombre", conc: "EDP", price: 165000, niche: false, c1: "#18181B", c2: "#D4AF37", cap: "#D4AF37", shape: "torso", quote: "Carisma irresistible de cardamomo oscuro, lavanda y vainilla intensa." },
  { id: 16, name: "Perfume Hombre Carolina Herrera 212 Vip Black", brand: "Carolina Herrera", gender: "Hombre", conc: "EDP", price: 145000, niche: false, c1: "#171717", c2: "#52525B", cap: "#171717", shape: "cylinder", quote: "El rey de la fiesta: absenta seductora, lavanda y vainilla negra." },
  { id: 17, name: "Perfume Paco Rabanne Olympea Edt", brand: "Paco Rabanne", gender: "Mujer", conc: "EDT", price: 150000, niche: false, c1: "#F5D0C5", c2: "#D4AF37", cap: "#E2E8F0", shape: "round", quote: "Diosa moderna con vainilla salada, jazmín de agua y mandarina verde." },
  { id: 18, name: "Perfume Sweet Like Candy Ariana Grande", brand: "Ariana Grande", gender: "Mujer", conc: "EDP", price: 150000, niche: false, c1: "#FBCFE8", c2: "#F472B6", cap: "#FCE7F3", shape: "round", quote: "Tentación juguetona de moras escarchadas, malvavisco y crema dulce." },
  { id: 19, name: "Perfume Calvin Free Sport", brand: "Calvin Klein", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#E2E8F0", c2: "#EF4444", cap: "#94A3B8", shape: "classic", quote: "Libertad dinámica con notas acuáticas limpias, loto y cedro fresco." },
  { id: 20, name: "Perfume Jean Pascal Cuero", brand: "Jean Pascal", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#78350F", c2: "#D97706", cap: "#1C1917", shape: "flask", quote: "Carácter clásico varonil con cuero elegante, maderas secas y especias." },
  { id: 21, name: "Perfume Armaf Club De Nuit Intense Edt", brand: "Armaf", gender: "Hombre", conc: "EDT", price: 155000, niche: true, c1: "#18181B", c2: "#3F3F46", cap: "#27272A", shape: "square", quote: "Imán de cumplidos con piña ahumada, abedul y estela imparable." },
  { id: 22, name: "Perfume Rabanne 1 Million Royal Edp", brand: "Paco Rabanne", gender: "Hombre", conc: "EDP", price: 140000, niche: false, c1: "#EAB308", c2: "#B91C1C", cap: "#CA8A04", shape: "ingot", quote: "Opulencia audaz de cardamomo, lavanda real y benjuí amaderado." },
  { id: 23, name: "Perfume Ralph Lauren Ralph Edt", brand: "Ralph Lauren", gender: "Mujer", conc: "EDT", price: 140000, niche: false, c1: "#38BDF8", c2: "#BAE6FD", cap: "#E0F2FE", shape: "round", quote: "Alegría juvenil y vibrante con manzana verde, fresia y almizcle limpio." },
  { id: 24, name: "Perfume Versace Bright Crystal Edt", brand: "Versace", gender: "Mujer", conc: "EDT", price: 150000, niche: false, c1: "#FBCFE8", c2: "#F9A8D4", cap: "#FCE7F3", shape: "square", quote: "Joya floral delicada de granada helada, peonía y magnolia pura." },
  { id: 25, name: "Perfume Paco Rabanne Pure Xs Edt", brand: "Paco Rabanne", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#0F172A", c2: "#1D4ED8", cap: "#0F172A", shape: "square", quote: "Exceso magnético de jengibre fresco, vainilla ardiente y mirra." },
  { id: 26, name: "Perfume Orientica Luxury Velvet Gold Edp", brand: "Orientica", gender: "Mujer", conc: "EDP", price: 195000, niche: true, c1: "#581C87", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Terciopelo real de caramelo, rosa atalcada y vainilla sofisticada." },
  { id: 27, name: "Perfume Lacoste Blanc Edt", brand: "Lacoste", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#F8FAFC", c2: "#16A34A", cap: "#F1F5F9", shape: "square", quote: "Elegancia casual impecable con pomelo limpio, romero y gamuza blanca." },
  { id: 28, name: "Perfume Versace Bright Crystal Absolu Edp", brand: "Versace", gender: "Mujer", conc: "EDP", price: 205000, niche: false, c1: "#EC4899", c2: "#F472B6", cap: "#FBCFE8", shape: "square", quote: "Versión más intensa y duradera con frambuesa jugosa y peonía vibrante." },
  { id: 29, name: "Perfume Gucci Bamboo Edp", brand: "Gucci", gender: "Mujer", conc: "EDP", price: 155000, niche: false, c1: "#F3E8EE", c2: "#CBD5E1", cap: "#94A3B8", shape: "classic", quote: "Fuerza y gracia femenina en armonía de azucena, bergamota y sándalo." },
  { id: 30, name: "Perfume Lacoste L.12.12 Rouge Edt", brand: "Lacoste", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#DC2626", c2: "#B91C1C", cap: "#DC2626", shape: "square", quote: "Vitalidad especiada con té rooibos, jengibre rojo y mango energético." },
  { id: 31, name: "Perfume Hugo Boss Man Edt", brand: "Hugo Boss", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#DBEAFE", c2: "#16A34A", cap: "#94A3B8", shape: "flask", quote: "Frescura aromática atemporal de manzana verde, pino y menta limpia." },
  { id: 32, name: "Perfume Lacoste Noir Edt", brand: "Lacoste", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#18181B", c2: "#27272A", cap: "#18181B", shape: "square", quote: "Contrastes nocturnos de sandía fresca, albahaca y chocolate oscuro." },
  { id: 33, name: "Perfume Jean Paul Gaultier Scandal Edt", brand: "Jean Paul Gaultier", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#475569", c2: "#D4AF37", cap: "#D4AF37", shape: "square", quote: "Golpe maestro de caramelo tostado, salvia esclarea y haba tonka." },
  { id: 34, name: "Perfume Hugo Boss Bottled Night", brand: "Hugo Boss", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#1E1B4B", c2: "#312E81", cap: "#0F172A", shape: "classic", quote: "Seducción misteriosa con lavanda profunda, violeta y madera de louro." },
  { id: 35, name: "Perfume Yves Saint Laurent Y For Men Edt", brand: "Yves Saint Laurent", gender: "Hombre", conc: "EDT", price: 170000, niche: false, c1: "#BAE6FD", c2: "#38BDF8", cap: "#1E293B", shape: "classic", quote: "Frescura moderna y pulcra con aldehídos, lavanda y ámbar gris." },
  { id: 36, name: "Perfume Versace Eros Edt", brand: "Versace", gender: "Hombre", conc: "EDT", price: 155000, niche: false, c1: "#0D9488", c2: "#D4AF37", cap: "#D4AF37", shape: "square", quote: "Seducción mítica de menta helada, manzana verde y vainilla de Madagascar." },
  { id: 37, name: "Perfume Ch Men Carolina Herrera", brand: "Carolina Herrera", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#3B1D1A", c2: "#DC2626", cap: "#CBD5E1", shape: "classic", quote: "Sofisticación caballerosa de cuero suave, azúcar quemado y azafrán." },
  { id: 38, name: "Perfume Moschino Toy 2 Bubble Gum Edt", brand: "Moschino", gender: "Mujer", conc: "EDT", price: 150000, niche: false, c1: "#F472B6", c2: "#F9A8D4", cap: "#F472B6", shape: "bear", quote: "Divertida y dulce explosión de chicle rosado, durazno y rosa cristalina." },
  { id: 39, name: "Perfume Creed Original Santal", brand: "Creed", gender: "Unisex", conc: "EDP", price: 145000, niche: true, c1: "#DC2626", c2: "#F8FAFC", cap: "#CBD5E1", shape: "crest", quote: "Calidez majestuosa de sándalo de Mysore, canela y vainilla cremosa." },
  { id: 40, name: "Perfume Ajwad Lattafa Edp", brand: "Lattafa", gender: "Unisex", conc: "EDP", price: 160000, niche: true, c1: "#1E1B4B", c2: "#D4AF37", cap: "#1E1B4B", shape: "arabic", quote: "Elegancia oriental envolvente de frutas dulces, rosa y cedro almizclado." },
  { id: 41, name: "Perfume 212 Vip Black I Love Ny", brand: "Carolina Herrera", gender: "Hombre", conc: "EDP", price: 135000, niche: false, c1: "#18181B", c2: "#EF4444", cap: "#18181B", shape: "cylinder", quote: "Edición urbana vibrante con café aromático, pomelo y vetiver magnético." },
  { id: 42, name: "Perfume Bad Boy Carolina Herrera", brand: "Carolina Herrera", gender: "Hombre", conc: "EDT", price: 130000, niche: false, c1: "#18181B", c2: "#D4AF37", cap: "#18181B", shape: "bolt", quote: "Rebeldía sofisticada que une pimienta blanca, cacao y haba tonka." },
  { id: 43, name: "Perfume Parfums De Marly Layton", brand: "Parfums de Marly", gender: "Hombre", conc: "EDP", price: 150000, niche: true, c1: "#1E293B", c2: "#475569", cap: "#94A3B8", shape: "crest", quote: "Obra maestra nicho con manzana especiada, vainilla y cardamomo noble." },
  { id: 44, name: "Perfume Carolina Herrera Good Girl Edt", brand: "Carolina Herrera", gender: "Mujer", conc: "EDP", price: 155000, niche: false, c1: "#1E293B", c2: "#D4AF37", cap: "#D4AF37", shape: "stiletto", quote: "Dualidad fascinante de nardos luminosos, cacao tostado y almendra." },
  { id: 45, name: "Perfume Yara Tous Lattafa Edp", brand: "Lattafa", gender: "Mujer", conc: "EDP", price: 165000, niche: true, c1: "#F59E0B", c2: "#FDE68A", cap: "#F59E0B", shape: "cylinder", quote: "Paraíso tropical cremoso de mango maduro, coco y maracuyá irresistible." },
  { id: 46, name: "Perfume Versace Eros Energy Edp", brand: "Versace", gender: "Hombre", conc: "EDP", price: 145000, niche: false, c1: "#EAB308", c2: "#CA8A04", cap: "#D4AF37", shape: "square", quote: "Chispa cítrica electrizante de limón siciliano, naranja sanguina y musgo." },
  { id: 47, name: "Perfume Hugo Boss The Scent For Her Edp", brand: "Hugo Boss", gender: "Mujer", conc: "EDP", price: 145000, niche: false, c1: "#FDE8D7", c2: "#D4AF37", cap: "#D4AF37", shape: "classic", quote: "Seducción aterciopelada de durazno meloso, fresia y cacao tostado." },
  { id: 48, name: "Perfume Dolce Gabbana K Intense", brand: "Dolce & Gabbana", gender: "Hombre", conc: "EDP", price: 130000, niche: false, c1: "#1E3A8A", c2: "#172554", cap: "#94A3B8", shape: "crown", quote: "Liderazgo magnético con higo intenso, azafrán y cuero profundo." },
  { id: 49, name: "Perfume Carolina Herrera 212 Vip Rose", brand: "Carolina Herrera", gender: "Mujer", conc: "EDP", price: 155000, niche: false, c1: "#F5D0C5", c2: "#E5B299", cap: "#F5D0C5", shape: "cylinder", quote: "Glamour burbujeante de champán rosado, flor de duraznero y almizcle." },
  { id: 50, name: "Perfume 212 Aqua Men", brand: "Carolina Herrera", gender: "Hombre", conc: "EDT", price: 135000, niche: false, c1: "#E2E8F0", c2: "#38BDF8", cap: "#CBD5E1", shape: "cylinder", quote: "Frescura oceánica urbana con bergamota fría, sal marina y sándalo." },
  { id: 51, name: "Perfume Creed Aventus Edt", brand: "Creed", gender: "Hombre", conc: "EDP", price: 150000, niche: true, c1: "#18181B", c2: "#E2E8F0", cap: "#18181B", shape: "crest", quote: "El estándar del éxito: piña fresca, abedul ahumado y almizcle de roble." },
  { id: 52, name: "Perfume Montblanc Explorer Edp", brand: "Montblanc", gender: "Hombre", conc: "EDP", price: 150000, niche: false, c1: "#1F2937", c2: "#9CA3AF", cap: "#111827", shape: "cylinder", quote: "Espíritu aventurero con bergamota italiana, vetiver de Haití y cuero." },
  { id: 53, name: "Perfume Tom Ford Black Orchid Edp", brand: "Tom Ford", gender: "Unisex", conc: "EDP", price: 155000, niche: true, c1: "#18181B", c2: "#D4AF37", cap: "#18181B", shape: "classic", quote: "Lujo oscuro y hipnótico de orquídea negra, trufa, chocolate e incienso." },
  { id: 54, name: "Perfume Haya Lattafa Edp", brand: "Lattafa", gender: "Mujer", conc: "EDP", price: 165000, niche: true, c1: "#F9A8D4", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Feminidad encantadora de champán, fresas frescas y vainilla sedosa." },
  { id: 55, name: "Perfume Giorgio Armani Acqua Di Gio Edt", brand: "Giorgio Armani", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#F1F5F9", c2: "#CBD5E1", cap: "#94A3B8", shape: "classic", quote: "El clásico inmortal de frescura marina, lima, jazmín y cedro limpio." },
  { id: 56, name: "Perfume Moschino Toy Boy Edt", brand: "Moschino", gender: "Hombre", conc: "EDP", price: 155000, niche: false, c1: "#18181B", c2: "#3F3F46", cap: "#18181B", shape: "bear", quote: "Audacia inesperada de rosa especiada, pimienta rosa, pera y cachemira." },
  { id: 57, name: "Perfume Emblem De Mont Blanc Edt", brand: "Montblanc", gender: "Hombre", conc: "EDT", price: 155000, niche: false, c1: "#111827", c2: "#4B5563", cap: "#111827", shape: "square", quote: "Distinción ejecutiva de cardamomo aromático, hojas de violeta y canela." },
  { id: 58, name: "Perfume Yara Lattafa Edp", brand: "Lattafa", gender: "Mujer", conc: "EDP", price: 160000, niche: true, c1: "#FBCFE8", c2: "#CBD5E1", cap: "#F9A8D4", shape: "cylinder", quote: "Nube aterciopelada de orquídea, frutas tropicales y vainilla cremosa." },
  { id: 59, name: "Perfume Hugo Boss Bottled Oud Saffron", brand: "Hugo Boss", gender: "Hombre", conc: "EDP", price: 135000, niche: false, c1: "#991B1B", c2: "#D4AF37", cap: "#D4AF37", shape: "classic", quote: "Intensidad oriental sofisticada de azafrán dorado, rosa y madera de oud." },
  { id: 60, name: "Perfume Creed Viking Edt", brand: "Creed", gender: "Hombre", conc: "EDP", price: 150000, niche: true, c1: "#DC2626", c2: "#CBD5E1", cap: "#94A3B8", shape: "crest", quote: "Fuerza indomable con pimienta rosa ardiente, menta fresca y sándalo." },
  { id: 61, name: "Perfume Bharara Viking Dubai Edp", brand: "Bharara", gender: "Hombre", conc: "EDP", price: 215000, niche: true, c1: "#14532D", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Exclusividad de Dubái con notas cítricas vibrantes, ámbar y maderas." },
  { id: 62, name: "Perfume Giorgio Armani Si Edp", brand: "Giorgio Armani", gender: "Mujer", conc: "EDP", price: 145000, niche: false, c1: "#FDE8D7", c2: "#D4AF37", cap: "#18181B", shape: "classic", quote: "Elegancia italiana segura de sí misma con grosella negra, rosa y vainilla." },
  { id: 63, name: "Perfume Issey Miyake L'Eau D'Issey Pour Homme", brand: "Issey Miyake", gender: "Hombre", conc: "EDT", price: 170000, niche: false, c1: "#F8FAFC", c2: "#CBD5E1", cap: "#94A3B8", shape: "classic", quote: "Pureza minimalista de yuzu japonés, nenúfar azul y maderas serenas." },
  { id: 64, name: "Perfume Marc Jacobs Decadence Edp", brand: "Marc Jacobs", gender: "Mujer", conc: "EDP", price: 155000, niche: false, c1: "#065F46", c2: "#D4AF37", cap: "#18181B", shape: "bag", quote: "Glamour sensual de ciruela oscura, azafrán, ámbar líquido y papiro." },
  { id: 65, name: "Perfume Montale Arabians Tonka Edp", brand: "Montale", gender: "Unisex", conc: "EDP", price: 150000, niche: true, c1: "#18181B", c2: "#D4AF37", cap: "#D4AF37", shape: "cylinder", quote: "Proyección nuclear de azafrán, rosa árabe, azúcar de caña y oud." },
  { id: 66, name: "Perfume The Queen Of Sheba Attar Edp", brand: "Attar Collection", gender: "Mujer", conc: "EDP", price: 165000, niche: true, c1: "#18181B", c2: "#D4AF37", cap: "#18181B", shape: "arabic", quote: "Majestuosidad hipnótica de durazno aterciopelado, nardos e incienso." },
  { id: 67, name: "Perfume Paco Rabanne One Million Edt", brand: "Paco Rabanne", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#EAB308", c2: "#FDE047", cap: "#CA8A04", shape: "ingot", quote: "El lingote dorado del encanto: canela especiada, mandarina y cuero." },
  { id: 68, name: "Perfume Shaheen Gold Lattafa Edp", brand: "Lattafa", gender: "Unisex", conc: "EDP", price: 205000, niche: true, c1: "#FAF8F5", c2: "#D4AF37", cap: "#D4AF37", shape: "arabic", quote: "Vuelo dorado de piña jugosa, higo dulce, lavanda y haba tonka." },
  { id: 69, name: "Perfume Hugo Boss Unlimited Edt", brand: "Hugo Boss", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#F8FAFC", c2: "#22C55E", cap: "#F1F5F9", shape: "classic", quote: "Frescura sin límites con menta helada, piña energética y maderas blancas." },
  { id: 70, name: "Perfume Orientica Luxury Royal Amber Edp", brand: "Orientica", gender: "Unisex", conc: "EDP", price: 195000, niche: true, c1: "#FDE68A", c2: "#D97706", cap: "#D4AF37", shape: "arabic", quote: "Ámbar real luminoso con melón dulce, bergamota y vainilla envolvente." },
  { id: 71, name: "Perfume Jean Paul Gaultier Elixir", brand: "Jean Paul Gaultier", gender: "Hombre", conc: "EDP", price: 140000, niche: false, c1: "#D97706", c2: "#18181B", cap: "#D4AF37", shape: "torso", quote: "Adicción dorada de miel cálida, tabaco aromático, lavanda y benjuí." },
  { id: 72, name: "Perfume Valentino Uomo Born In Roma Edt", brand: "Valentino", gender: "Hombre", conc: "EDT", price: 160000, niche: false, c1: "#18181B", c2: "#F472B6", cap: "#18181B", shape: "classic", quote: "Actitud romana moderna con hojas de violeta, sal mineral y vetiver." },
  { id: 73, name: "Perfume Dolce Gabbana K Hombre Edt", brand: "Dolce & Gabbana", gender: "Hombre", conc: "EDT", price: 155000, niche: false, c1: "#1D4ED8", c2: "#60A5FA", cap: "#D4AF37", shape: "crown", quote: "Carisma natural con naranja sanguina, bayas de enebro y cedro noble." },
  { id: 74, name: "Perfume Initio Oud For Greatness Edp", brand: "Initio", gender: "Unisex", conc: "EDP", price: 175000, niche: true, c1: "#18181B", c2: "#D4AF37", cap: "#18181B", shape: "square", quote: "Aura de grandeza absoluta con oud sagrado, azafrán, nuez moscada y lavanda." },
  { id: 75, name: "Perfume Dolce Gabbana Sun", brand: "Dolce & Gabbana", gender: "Mujer", conc: "EDT", price: 145000, niche: false, c1: "#FDE68A", c2: "#F59E0B", cap: "#F8FAFC", shape: "classic", quote: "Calidez radiante de verano con agua de coco, frangipani y vainilla solar." },
  { id: 76, name: "Perfume 212 Vip Wins", brand: "Carolina Herrera", gender: "Hombre", conc: "EDP", price: 145000, niche: false, c1: "#16A34A", c2: "#4ADE80", cap: "#16A34A", shape: "cylinder", quote: "Frescura triunfadora con mandarina verde, yuzu, lavanda y haba tonka." },
  { id: 77, name: "Perfume Paco Rabanne Phantom Edt", brand: "Paco Rabanne", gender: "Hombre", conc: "EDT", price: 155000, niche: false, c1: "#CBD5E1", c2: "#18181B", cap: "#94A3B8", shape: "robot", quote: "Fusión futurista de limón energizante, lavanda cremosa y vainilla." },
  { id: 78, name: "Perfume Lacoste L.12.12 Magnetic Edt", brand: "Lacoste", gender: "Hombre", conc: "EDT", price: 150000, niche: false, c1: "#1D4ED8", c2: "#1E40AF", cap: "#1D4ED8", shape: "square", quote: "Atracción espontánea de artemisia verde, violeta fresca y pachulí suave." },
  { id: 79, name: "Perfume Dior Sauvage Edp", brand: "Dior", gender: "Hombre", conc: "EDP", price: 150000, niche: false, c1: "#0F172A", c2: "#1E3A8A", cap: "#090D16", shape: "cylinder", quote: "Ícono salvaje y elegante de bergamota jugosa, pimienta y vainilla ámbar." },
  { id: 80, name: "Perfume Jean Paul Gaultier Le Beau Parfum", brand: "Jean Paul Gaultier", gender: "Hombre", conc: "EDP", price: 150000, niche: false, c1: "#0F766E", c2: "#D4AF37", cap: "#D4AF37", shape: "torso", quote: "Tentación tropical intensa de madera de coco, piña y haba tonka." },
  { id: 81, name: "Perfume Tommy Hilfiger Men Edt", brand: "Tommy Hilfiger", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#F8FAFC", c2: "#DC2626", cap: "#94A3B8", shape: "classic", quote: "Clásico americano refrescante con menta, manzana crujiente y arándano." },
  { id: 82, name: "Perfume Ilmin Kakuno Edp", brand: "Ilmin", gender: "Unisex", conc: "EDP", price: 195000, niche: true, c1: "#18181B", c2: "#D4AF37", cap: "#18181B", shape: "square", quote: "Sofisticación nicho envolvente con notas ambaradas, maderas y estela única." },
  { id: 83, name: "Perfume Ralph Lauren Polo Blue Edt", brand: "Ralph Lauren", gender: "Hombre", conc: "EDT", price: 160000, niche: false, c1: "#1E3A8A", c2: "#2563EB", cap: "#CBD5E1", shape: "flask", quote: "Elegancia deportiva abierta al cielo azul con melón fresco, pepino y gamuza." },
  { id: 84, name: "Perfume Lacoste L.12.12 Jaune", brand: "Lacoste", gender: "Hombre", conc: "EDT", price: 130000, niche: false, c1: "#EAB308", c2: "#FACC15", cap: "#EAB308", shape: "square", quote: "Optimismo puro con pomelo chispeante, manzana golden y ciprés aromático." },
  { id: 85, name: "Perfume Lattafa Mayar Edp", brand: "Lattafa", gender: "Mujer", conc: "EDP", price: 155000, niche: true, c1: "#F9A8D4", c2: "#D4AF37", cap: "#D4AF37", shape: "cylinder", quote: "Dulzura frutal radiante de lichi jugoso, frambuesa y rosa de mayo." },
  { id: 86, name: "Perfume Paco Rabanne Invictus Onyx Edt", brand: "Paco Rabanne", gender: "Hombre", conc: "EDT", price: 145000, niche: false, c1: "#18181B", c2: "#94A3B8", cap: "#27272A", shape: "trophy", quote: "Edición coleccionista de poder marino, madera de guayaco y ámbar oscuro." },
  { id: 87, name: "Perfume 212 Vip Edt", brand: "Carolina Herrera", gender: "Mujer", conc: "EDP", price: 150000, niche: false, c1: "#D4AF37", c2: "#FDE047", cap: "#D4AF37", shape: "cylinder", quote: "Exclusividad dorada con ron dulce, maracuyá exótico y vainilla sensual." },
  { id: 88, name: "Perfume Bleu De Chanel Edp", brand: "Chanel", gender: "Hombre", conc: "EDP", price: 155000, niche: false, c1: "#0F172A", c2: "#1E293B", cap: "#090D16", shape: "square", quote: "Elegancia masculina definitiva: cítricos nobles, incienso y sándalo." },
  { id: 89, name: "Perfume Lancome La Vie Est Belle Edt", brand: "Lancôme", gender: "Mujer", conc: "EDT", price: 155000, niche: false, c1: "#FBCFE8", c2: "#F9A8D4", cap: "#E2E8F0", shape: "classic", quote: "La felicidad embotellada con iris noble, praliné dulce, pera y vainilla." },
  { id: 90, name: "Perfume Thank U Next De Ariana Grande", brand: "Ariana Grande", gender: "Mujer", conc: "EDP", price: 150000, niche: false, c1: "#F9A8D4", c2: "#FBCFE8", cap: "#F472B6", shape: "heart", quote: "Actitud dulce y empoderada de coco cremoso, frambuesa y macaron rosado." }
];

// Estado global de la aplicación
window.state = {
  search: "",
  category: "Todos",
  brand: "Todas",
  conc: "Todas",
  sort: "default",
  favoritesOnly: false,
  favorites: JSON.parse(localStorage.getItem("ml_favorites") || "[]"),
  cart: JSON.parse(localStorage.getItem("ml_cart") || "[]"),
  orders: JSON.parse(localStorage.getItem("ml_orders") || "[]"),
  qvId: null,
  qvQty: 1
};
const state = window.state;

function formatCOP(amount) {
  return "$ " + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function getBottleSVG(p, sizeClass = "w-28 h-36") {
  const gradId = `grad-${p.id}-${Math.random().toString(36).slice(2, 6)}`;
  const { c1, c2, cap, shape, brand } = p;
  let bodyMarkup = "";
  let capMarkup = "";

  switch (shape) {
    case "stiletto":
      capMarkup = `<path d="M44 18 L56 18 L54 30 L46 30 Z" fill="${cap}" />`;
      bodyMarkup = `<path d="M46 30 C34 42, 26 58, 28 74 C30 88, 48 92, 64 96 L72 124 L80 123 L70 88 C56 83, 44 78, 46 64 C48 50, 54 38, 54 30 Z" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
      break;
    case "bolt":
      capMarkup = `<rect x="44" y="16" width="12" height="12" rx="2" fill="${cap}" />`;
      bodyMarkup = `<path d="M53 28 L34 66 L49 66 L43 108 L68 62 L52 62 Z" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.2" stroke-width="1.2" stroke-linejoin="round"/>`;
      break;
    case "ingot":
      capMarkup = `<rect x="38" y="20" width="24" height="8" rx="2" fill="${cap}" />`;
      bodyMarkup = `<polygon points="30,28 70,28 78,106 22,106" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.2" stroke-width="1.2"/>`;
      break;
    case "torso":
      capMarkup = `<rect x="43" y="16" width="14" height="11" rx="3" fill="${cap}" />`;
      bodyMarkup = `<path d="M43 27 C31 31, 25 40, 27 54 C29 66, 26 86, 28 106 L72 106 C74 86, 71 66, 73 54 C75 40, 69 31, 57 27 Z" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.2" stroke-width="1.2"/>`;
      break;
    case "bear":
      capMarkup = `<circle cx="34" cy="26" r="8" fill="${cap}" /><circle cx="66" cy="26" r="8" fill="${cap}" /><ellipse cx="50" cy="36" rx="17" ry="13" fill="${cap}" />`;
      bodyMarkup = `<rect x="31" y="47" width="38" height="44" rx="14" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
      break;
    case "heart":
      capMarkup = `<rect x="45" y="18" width="10" height="12" rx="2" fill="${cap}" />`;
      bodyMarkup = `<path d="M50 104 C50 104 18 82 18 55 C18 40 30 32 41 36 C46 38 49 42 50 45 C51 42 54 38 59 36 C70 32 82 40 82 55 C82 82 50 104 50 104 Z" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
      break;
    case "arabic":
      capMarkup = `<path d="M40 28 L44 14 L50 10 L56 14 L60 28 Z" fill="${cap}" />`;
      bodyMarkup = `<path d="M28 34 C28 28, 72 28, 72 34 L76 104 C76 108, 24 108, 24 104 Z" fill="url(#${gradId})" stroke="#C5A059" stroke-width="1.4"/>`;
      break;
    case "round":
      capMarkup = `<circle cx="50" cy="22" r="9" fill="${cap}" />`;
      bodyMarkup = `<circle cx="50" cy="68" r="34" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.16" stroke-width="1.2"/>`;
      break;
    case "cylinder":
      capMarkup = `<rect x="37" y="16" width="26" height="13" rx="3" fill="${cap}" />`;
      bodyMarkup = `<rect x="34" y="29" width="32" height="77" rx="10" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
      break;
    case "trophy":
      capMarkup = `<rect x="42" y="18" width="16" height="10" rx="2" fill="${cap}" />`;
      bodyMarkup = `<path d="M26 30 L74 30 L66 78 C64 92, 56 102, 50 105 C44 102, 36 92, 34 78 Z" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
      break;
    default:
      capMarkup = `<rect x="38" y="16" width="24" height="13" rx="2" fill="${cap}" />`;
      bodyMarkup = `<rect x="26" y="29" width="48" height="77" rx="7" fill="url(#${gradId})" stroke="#141414" stroke-opacity="0.18" stroke-width="1.2"/>`;
  }

  return `
    <svg viewBox="0 0 100 128" class="bottle-shadow ${sizeClass} overflow-visible" aria-label="${p.name}">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c2}" />
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="116" rx="24" ry="4.5" fill="#141414" fill-opacity="0.12" />
      ${capMarkup}
      ${bodyMarkup}
      <text x="50" y="70" text-anchor="middle" fill="#FFFFFF" fill-opacity="0.88" font-size="6.2" font-weight="700" letter-spacing="0.8" style="text-shadow: 0 1px 2px rgba(0,0,0,0.45)">
        ${brand.toUpperCase().slice(0, 12)}
      </text>
    </svg>
  `;
}

function getFragranceProfile(p) {
  const n = p.name.toLowerCase();
  if (n.includes("oud") || n.includes("arabians") || n.includes("sheba") || n.includes("ajwad") || n.includes("shaheen") || n.includes("royal amber")) {
    return {
      desc: "Composición oriental opulenta con maderas nobles, especias cálidas y estela magnética de larga duración.",
      notes: ["Oud Ahumado", "Ámbar Dorado", "Azafrán", "Vainilla Cálida", "Almizcle"]
    };
  }
  if (n.includes("acqua") || n.includes("light blue") || n.includes("polo blue") || n.includes("bleu") || n.includes("aqua") || n.includes("issey")) {
    return {
      desc: "Frescura cristalina inspirada en la brisa marina y cítricos mediterráneos, perfecta para uso diario.",
      notes: ["Bergamota", "Notas Marinas", "Cedro Blanco", "Salvia", "Almizcle Limpio"]
    };
  }
  return {
    desc: "Fragancia equilibrada de alta fijación diseñada para destacar con sofisticación en cualquier ocasión.",
    notes: ["Notas Cítricas", "Especias Aromáticas", "Maderas Nobles", "Ámbar", "Vainilla"]
  };
}

function initBrandDropdown() {
  const brands = [...new Set(PERFUMES.map(p => p.brand))].sort((a, b) => a.localeCompare(b));
  const select = document.getElementById("brandFilter");
  brands.forEach(brand => {
    const opt = document.createElement("option");
    opt.value = brand;
    opt.textContent = brand;
    select.appendChild(opt);
  });
}

function renderHeroBottles() {
  [1, 4, 3].forEach((id, idx) => {
    const p = PERFUMES.find(item => item.id === id);
    const el = document.getElementById(`hero-bottle-${idx + 1}`);
    if (p && el) el.innerHTML = getBottleSVG(p, "w-16 h-22");
  });
}

function applyFilters() {
  state.search = document.getElementById("searchInput").value.trim().toLowerCase();
  state.brand = document.getElementById("brandFilter").value;
  state.conc = document.getElementById("concFilter").value;
  state.sort = document.getElementById("sortSelect").value;

  document.getElementById("clearSearchBtn").classList.toggle("hidden", state.search.length === 0);

  let filtered = PERFUMES.filter(p => {
    if (state.favoritesOnly && !state.favorites.includes(p.id)) return false;
    if (state.category === "Hombre" && p.gender !== "Hombre") return false;
    if (state.category === "Mujer" && p.gender !== "Mujer") return false;
    if (state.category === "Unisex" && p.gender !== "Unisex") return false;
    if (state.category === "Árabes & Nicho" && !p.niche) return false;
    if (state.brand !== "Todas" && p.brand !== state.brand) return false;
    if (state.conc !== "Todas" && p.conc !== state.conc) return false;
    if (state.search && !`${p.name} ${p.brand} ${p.gender} ${p.conc}`.toLowerCase().includes(state.search)) return false;
    return true;
  });

  if (state.sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (state.sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (state.sort === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));

  renderGrid(filtered);
}

function renderGrid(list) {
  const grid = document.getElementById("productsGrid");
  const empty = document.getElementById("emptyState");
  document.getElementById("resultsCounter").textContent = `Mostrando ${list.length} de ${PERFUMES.length} fragancias disponibles`;

  if (list.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");
  grid.innerHTML = list.map((p, idx) => {
    const isFav = state.favorites.includes(p.id);
    const staggerDelay = Math.min(idx * 25, 350);
    return `
      <article style="animation-delay: ${staggerDelay}ms" class="product-card animate-card-entrance group bg-white rounded-3xl border border-stone-200/80 hover:border-champagne/70 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
        <div>
          <div class="relative bg-gradient-to-b from-cream/90 to-sand/45 pt-5 pb-4 px-5 flex flex-col items-center justify-center border-b border-stone-100">
            <div class="w-full flex items-center justify-between mb-2">
              <span class="text-[10px] uppercase tracking-[0.16em] font-bold px-2.5 py-1 rounded-full bg-white/90 text-charcoal border border-stone-200/70">${p.conc}</span>
              <div class="flex items-center gap-1.5">
                <button onclick="downloadPerfumeCardPNG(${p.id})" title="Descargar imagen PNG" class="w-8 h-8 rounded-full bg-white/95 border border-stone-200/80 hover:border-champagne flex items-center justify-center text-stone-500 hover:text-champagneDark">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                </button>
                <button onclick="toggleFavorite(${p.id})" class="w-8 h-8 rounded-full bg-white/95 border border-stone-200/80 hover:border-champagne flex items-center justify-center">
                  <svg class="w-4 h-4 ${isFav ? 'text-rose-500 fill-rose-500' : 'text-stone-400 hover:text-rose-500'}" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" /></svg>
                </button>
              </div>
            </div>
            <div onclick="openQuickView(${p.id})" class="cursor-pointer py-2 flex items-center justify-center">${getBottleSVG(p, "w-28 h-36")}</div>
            <div class="w-full flex items-center justify-between mt-2 pt-1">
              <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50/90 px-2.5 py-0.5 rounded-full border border-emerald-200/60">Disponible</span>
              <span class="text-[10px] uppercase tracking-[0.14em] text-stone-500 font-medium">${p.gender}</span>
            </div>
          </div>
          <div class="p-5 pb-3">
            <p class="text-[10px] uppercase tracking-[0.2em] font-bold text-champagneDark truncate">${p.brand}</p>
            <h3 onclick="openQuickView(${p.id})" class="cursor-pointer font-semibold text-sm sm:text-[15px] text-charcoal group-hover:text-champagneDark transition-colors line-clamp-2 mt-1 min-h-[2.6rem] leading-snug">${p.name}</h3>
            <p class="font-editorial italic text-[13px] sm:text-sm text-stone-500 mt-1.5 line-clamp-2 min-h-[2.3rem] leading-snug">“${p.quote}”</p>
          </div>
        </div>
        <div class="px-5 pb-5 pt-2">
          <div class="flex items-baseline justify-between mb-3.5">
            <div>
              <span class="text-[10px] uppercase tracking-wider text-stone-400 block">Precio sugerido</span>
              <span class="text-lg font-bold text-charcoal tracking-tight">${formatCOP(p.price)}</span>
            </div>
            <button onclick="openQuickView(${p.id})" class="text-[11px] font-medium text-stone-500 hover:text-charcoal underline underline-offset-4">Vista rápida</button>
          </div>
          <button onclick="addToCart(${p.id}, 1)" class="w-full py-3 px-4 rounded-2xl bg-charcoal text-cream hover:bg-champagneDark text-xs uppercase tracking-[0.14em] font-semibold transition-all flex items-center justify-center gap-2">
            <span>Agregar al carrito</span>
          </button>
        </div>
      </article>
    `;
  }).join("");
}

function setCategoryFilter(cat) {
  state.category = cat;
  state.favoritesOnly = false;
  updateFavoritesHeaderUI();
  document.querySelectorAll(".cat-pill").forEach(btn => {
    const isMatch = btn.getAttribute("data-cat") === cat;
    btn.className = isMatch
      ? "cat-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-charcoal text-cream"
      : "cat-pill px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all bg-cream text-stone-600 hover:bg-sand";
  });
  applyFilters();
}

function selectCollectionCard(cat) {
  setCategoryFilter(cat);
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

function clearSearch() {
  document.getElementById("searchInput").value = "";
  applyFilters();
}

function resetAllFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("brandFilter").value = "Todas";
  document.getElementById("concFilter").value = "Todas";
  document.getElementById("sortSelect").value = "default";
  state.favoritesOnly = false;
  updateFavoritesHeaderUI();
  setCategoryFilter("Todos");
}

function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    showToast("Guardado en tus favoritos");
  } else {
    state.favorites.splice(idx, 1);
    showToast("Eliminado de favoritos");
  }
  localStorage.setItem("ml_favorites", JSON.stringify(state.favorites));
  updateFavoritesHeaderUI();
  applyFilters();
}

function toggleFavoritesFilter() {
  state.favoritesOnly = !state.favoritesOnly;
  updateFavoritesHeaderUI();
  applyFilters();
}

function updateFavoritesHeaderUI() {
  document.getElementById("favCountBadge").textContent = state.favorites.length;
}

function openQuickView(id) {
  const p = PERFUMES.find(item => item.id === id);
  if (!p) return;
  state.qvId = id;
  state.qvQty = 1;
  const profile = getFragranceProfile(p);
  document.getElementById("qvBrandBadge").textContent = p.brand;
  document.getElementById("qvConcTag").textContent = p.conc;
  document.getElementById("qvGender").textContent = p.gender;
  document.getElementById("qvTitle").textContent = p.name;
  document.getElementById("qvPrice").innerHTML = `${formatCOP(p.price)} <span class="text-xs font-normal text-stone-400">COP</span>`;
  document.getElementById("qvDescription").innerHTML = `<span class="font-editorial italic text-base text-champagneDark block mb-1.5">“${p.quote}”</span>${profile.desc}`;
  document.getElementById("qvQtyDisplay").textContent = "1";
  document.getElementById("qvBottleContainer").innerHTML = getBottleSVG(p, "w-32 h-40");
  document.getElementById("qvNotes").innerHTML = profile.notes.map(note => `<span class="text-[11px] px-3 py-1 rounded-full bg-cream border border-stone-200 text-stone-700 font-medium">${note}</span>`).join("");
  document.getElementById("qvAddBtn").onclick = () => {
    addToCart(p.id, state.qvQty);
    closeQuickView();
  };
  const modal = document.getElementById("quickViewModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function changeQvQty(delta) {
  state.qvQty = Math.max(1, state.qvQty + delta);
  document.getElementById("qvQtyDisplay").textContent = state.qvQty;
}

function addToCart(id, qty = 1) {
  const existing = state.cart.find(item => item.id === id);
  if (existing) existing.qty += qty;
  else state.cart.push({ id, qty });
  saveCart();
  renderCart();
  const p = PERFUMES.find(item => item.id === id);
  showToast(p ? `${p.brand} agregado a tu bolsa` : "Fragancia agregada");
}

function updateCartQty(id, delta) {
  const item = state.cart.find(it => it.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) return removeFromCart(id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(it => it.id !== id);
  saveCart();
  renderCart();
}

function saveCart() {
  localStorage.setItem("ml_cart", JSON.stringify(state.cart));
}

function openCart() {
  renderCart();
  document.getElementById("cartDrawerOverlay").classList.remove("hidden");
  document.getElementById("cartDrawer").classList.remove("translate-x-full");
}

function closeCart() {
  document.getElementById("cartDrawerOverlay").classList.add("hidden");
  document.getElementById("cartDrawer").classList.add("translate-x-full");
}

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  const totalUnits = state.cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById("cartCountBadge").textContent = totalUnits;
  document.getElementById("drawerSubtitle").textContent = `${totalUnits} fragancias seleccionadas`;

  if (state.cart.length === 0) {
    document.getElementById("cartTotalDisplay").textContent = formatCOP(0);
    container.innerHTML = `<p class="text-center text-xs text-stone-500 py-14">Tu bolsa está vacía.</p>`;
    return;
  }

  let totalAmount = 0;
  container.innerHTML = state.cart.map(item => {
    const p = PERFUMES.find(prod => prod.id === item.id);
    if (!p) return "";
    const subtotal = p.price * item.qty;
    totalAmount += subtotal;
    return `
      <div class="flex items-center gap-3.5 p-3.5 rounded-2xl bg-cream/70 border border-stone-200/80">
        <div class="w-14 h-16 rounded-xl bg-white border border-stone-100 flex items-center justify-center shrink-0">${getBottleSVG(p, "w-11 h-14")}</div>
        <div class="flex-1 min-w-0">
          <p class="text-[10px] uppercase tracking-[0.18em] font-bold text-champagneDark truncate">${p.brand}</p>
          <h4 class="text-xs sm:text-sm font-semibold text-charcoal truncate">${p.name}</h4>
          <p class="text-xs font-bold text-charcoal mt-0.5">${formatCOP(subtotal)}</p>
          <div class="flex items-center gap-2 mt-2">
            <button onclick="updateCartQty(${p.id}, -1)" class="w-6 h-6 rounded-full bg-white border border-stone-200 text-xs font-bold">−</button>
            <span class="text-xs font-semibold w-5 text-center">${item.qty}</span>
            <button onclick="updateCartQty(${p.id}, 1)" class="w-6 h-6 rounded-full bg-white border border-stone-200 text-xs font-bold">+</button>
            <button onclick="removeFromCart(${p.id})" class="ml-auto text-[11px] text-stone-400 hover:text-rose-600">Quitar</button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  document.getElementById("cartTotalDisplay").textContent = formatCOP(totalAmount);
}

// Envío del pedido por WhatsApp (+57 311 324 7101) y registro de compra
function checkoutWhatsApp() {
  if (state.cart.length === 0) return;
  const clientName = document.getElementById("clientNameInput").value.trim();
  const orderCode = `ML-${Date.now().toString().slice(-6)}`;
  let total = 0;
  const purchasedItems = [];
  const lines = ["✨ *NUEVO PEDIDO - MUNDO LOCIONES* ✨", `🧾 *Código:* ${orderCode}`, ""];

  if (clientName) lines.push(`👤 *Cliente:* ${clientName}`, "");
  lines.push("🛍️ *Detalle de fragancias:*");

  state.cart.forEach((item, idx) => {
    const p = PERFUMES.find(prod => prod.id === item.id);
    if (p) {
      const sub = p.price * item.qty;
      total += sub;
      purchasedItems.push({ name: p.name, qty: item.qty, subtotal: sub });
      lines.push(`${idx + 1}. *${p.name}* (${p.brand}) - Cant: ${item.qty} = *${formatCOP(sub)}*`);
    }
  });

  lines.push("", `💰 *TOTAL ESTIMADO: ${formatCOP(total)} COP*`);

  state.orders.unshift({
    orderCode,
    clientName: clientName || "Cliente",
    items: purchasedItems,
    totalAmount: total,
    createdAt: new Date().toLocaleString("es-CO")
  });
  localStorage.setItem("ml_orders", JSON.stringify(state.orders));
  updateOrdersBadge();

  window.open(`https://wa.me/573113247101?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  state.cart = [];
  saveCart();
  renderCart();
  closeCart();
  showToast(`Compra ${orderCode} registrada`);
}

function updateOrdersBadge() {
  document.getElementById("ordersCountBadge").textContent = state.orders.length;
}

function openOrdersModal() {
  const container = document.getElementById("ordersListContainer");
  container.innerHTML = state.orders.length === 0
    ? `<p class="text-center text-xs text-stone-500 py-10">Aún no hay compras registradas.</p>`
    : state.orders.map(ord => `
      <div class="p-4 rounded-2xl bg-cream/70 border border-stone-200 space-y-2">
        <div class="flex justify-between text-xs font-bold">
          <span>${ord.orderCode} · ${ord.clientName}</span>
          <span>${ord.createdAt}</span>
        </div>
        ${ord.items.map(it => `<div class="text-xs flex justify-between"><span>${it.qty}x ${it.name}</span><span>${formatCOP(it.subtotal)}</span></div>`).join("")}
        <div class="text-right text-sm font-bold pt-1">Total: ${formatCOP(ord.totalAmount)} COP</div>
      </div>
    `).join("");

  const modal = document.getElementById("ordersModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeOrdersModal() {
  const modal = document.getElementById("ordersModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// Descarga de imágenes en PNG
function createPerfumePNGDataUrl(p) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FAF8F5";
    ctx.fillRect(0, 0, 800, 1000);
    ctx.strokeStyle = "#C5A059";
    ctx.lineWidth = 4;
    ctx.strokeRect(28, 28, 744, 944);

    ctx.fillStyle = "#141414";
    ctx.font = "bold 24px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("MUNDO LOCIONES", 400, 86);

    const tempWrap = document.createElement("div");
    tempWrap.innerHTML = getBottleSVG(p, "w-72 h-96");
    const svgEl = tempWrap.querySelector("svg");
    svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svgEl.setAttribute("width", "380");
    svgEl.setAttribute("height", "486");

    const url = URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(svgEl)], { type: "image/svg+xml;charset=utf-8" }));
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 210, 165, 380, 486);
      URL.revokeObjectURL(url);
      ctx.fillStyle = "#141414";
      ctx.font = "bold 30px Georgia, serif";
      ctx.fillText(p.name, 400, 720);
      ctx.font = "bold 28px sans-serif";
      ctx.fillText(`${formatCOP(p.price)} COP`, 400, 860);
      resolve(canvas.toDataURL("image/png"));
    };
    img.src = url;
  });
}

async function downloadPerfumeCardPNG(id) {
  const p = PERFUMES.find(item => item.id === id);
  if (!p) return;
  const link = document.createElement("a");
  link.download = `${String(p.id).padStart(2, "0")}-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`;
  link.href = await createPerfumePNGDataUrl(p);
  link.click();
  showToast(`Descargando: ${p.name}`);
}

async function downloadAllPerfumeImages() {
  for (let i = 0; i < PERFUMES.length; i++) {
    await downloadPerfumeCardPNG(PERFUMES[i].id);
    await new Promise(r => setTimeout(r, 180));
  }
}

function openGalleryModal() {
  document.getElementById("galleryGridContainer").innerHTML = PERFUMES.map(p => `
    <div class="p-3 rounded-2xl bg-cream/80 border border-stone-200 flex flex-col items-center text-center justify-between gap-2">
      <div>${getBottleSVG(p, "w-20 h-24")}</div>
      <p class="text-xs font-semibold text-charcoal line-clamp-2">${p.name}</p>
      <button onclick="downloadPerfumeCardPNG(${p.id})" class="w-full py-2 px-3 rounded-xl bg-white hover:bg-charcoal hover:text-cream border border-stone-200 text-[11px] font-semibold">Descargar PNG</button>
    </div>
  `).join("");
  const modal = document.getElementById("galleryModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

let toastTimeout;
function showToast(msg) {
  const toast = document.getElementById("toastNotification");
  document.getElementById("toastMessage").textContent = msg;
  toast.classList.remove("opacity-0", "translate-y-3");
  toast.classList.add("opacity-100", "translate-y-0");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-3");
    toast.classList.remove("opacity-100", "translate-y-0");
  }, 2400);
}

window.addEventListener("DOMContentLoaded", () => {
  initBrandDropdown();
  renderHeroBottles();
  updateFavoritesHeaderUI();
  updateOrdersBadge();
  renderCart();
  applyFilters();
});