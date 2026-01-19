document.addEventListener("DOMContentLoaded", function () {

    const categories = document.querySelectorAll(".category");
    const productDisplay = document.getElementById("product-display");

    // ALL PRODUCTS DATA
    const productData = {
        hdpe: [
            { id: "black-hdpe",
              name: "Black HDPE Granules",
              img: "images/black-hdpe.jpg",
              desc: "With the esteem support of our experts we offer black hdpe at industry leading prices. These granules are tested for quality at each manufacturing stage. They are available in different colors & sizes that cater to the needs of various industries such as plastic industry for making different plastic items. We manufacture these using good quality raw materials and available at competitive pricing..",
              price: "₹85 / Kg" },

            { id: "bopp-milky", 
              name: "BOPP Milky White Granules",
              img: "images/bopp-milky.jpg",
              desc: "We can supply HDPE reprocessed or recycled granules in all possible colors. These are used in plastic manufacturing or processing industry.",
              price: "₹90 / Kg" },

            { id: "ppcp-dark",
              name: "PPCP Dark Grey Granules",
              img: "images/ppcp-dark.jpg",
              desc: "Keeping in sync with time, we are able to offer cp to our respectable clients. The offered range of cp granules is made utilizing high grade raw material and innovative techniques in strict compliance with the international quality norms and standards. Moreover, the offered range of white HDPE granules is suitably checked on varied parameters to ensure that defect-free products are delivered at customers' premises. Features: Opaque Strong Less ductile in nature Low temperature toughness.",
              price: "₹62 / Kg" },

            { id: "natural-hdpe",
              name: "Natural HDPE Granules",
              img: "images/natural-hdpe.jpg",
              desc: "We are a renowned organization, which is engaged in offering Natural HDPE Granules to our clients. The offered range is of natural HDPE granules is made superior grade raw material and innovative techniques in complete adherence with the industry laid norms and standards. Moreover, the offered range is known for its weatherproof nature and good low temperature toughness..",
              price: "₹85 / Kg" },

            { id: "reprocessed-hdpe",
              name: "Reprocessed HDPE Granules",
              img: "images/reprocessed-hdpe.jpg",
              desc: "Backed by the rich experience and a competent team of professionals, we are able to offer Reprocessed HDPE Granules. The offered range of reprocessed HDPE granules is suitably inspected in varied characteristics to ensure its adherence with the highest quality norms and standards. Along with this, the offered range of reprocessed HDPE granules is known known for its flexibility and excellent thermal stability.",
              price: "₹90 / Kg" },

            { id: "mix-hdpe",
              name: "Mix HDPE Granules",
              img: "images/default-mix.jpg",
              desc: "We offer Transparent HDPE (High Density Polyethylene) Granulesat industry leading prices. These are transparent and harder product which has got a high resistivity towards temperature and widely used in the production of containers, plastic bags, water pipes, bottles and root barriers. We manufacture these products using high grade material as per industry standards. Our clients can avail these products from us as per their needs and requirements that to at market leading prices.",
              price: "₹70 / Kg" }

        ],

        plastic: [
            { id: "recycled-pp",
              name: "Recycled PP Granules",
              img: "images/recycled-pp.jpg", 
              desc: "In order to cater to the diverse requirements of honorable clients, we are able to offer PP Granules. The offered range of PP granules is made utilizing high grade raw material and highly advanced technology in strict compliance with the international quality standards. Along with this, the offered range of PP granules is extensively applicable in manufacturing injection molding products, plastic mats, mono-filament yarns and engineering parts.",
              price: "₹70 / Kg" },

            { id: "plastic-polymer", name: "Plastic Polymer Granules", img: "images/plastic-polymer.jpg", desc: "Plastic polymer granules are small, bead-like raw materials used as the base input for manufacturing a wide variety of plastic products. These granules are typically made from synthetic resins and come in different types based on the specific polymer used, such as polyethylene (PE), polypropylene (PP), polyvinyl chloride (PVC), polystyrene (PS), polyethylene terephthalate (PET), acrylonitrile butadiene styrene (ABS), and many others.", price: "₹58 / Kg" },

            { id: "blue-pp", name: "Blue PP Granules", img: "images/blue-pp.jpg", desc: "Blue PP granules are made from polypropylene (PP) and are used to make blue plastic products: .", price: "₹65 / Kg" },

            { id: "recycled-pp-dana", name: "Recycled Pp Dana Plastic", img: "images/recycled-pp2.jpg", desc: "Recycled PP dana plastic granules for versatile use in plastic processing.", price: "₹68 / Kg" },

            { id: "white-bopp", name: "White Bopp Granules", img: "images/white-bopp.jpg", desc: "This Milky PP (polypropylene) Granules are fabricated using latest technologies and superior quality material. We offer these in a variety of specifications to meet the varied requirements of our clients and at market leading prices. They are used for making plastic combs, reprocessed granules, plastic lunch boxes and plastic household items. Our ranges of these products are appreciated for their quality and they are well known for their strength..", price: "₹60 / Kg" },

            { id: "color-pp", name: "Color Pp Granules", img: "images/color-pp.jpg", desc: "We are an eminent name, which is engaged in delivering PP Color Granules to our clients. The offered range of PP color granules is designed & developed utilizing high grade raw material and highly modern machines in strict tandem with the industry laid norms and standards. Along with this, the offered range of PP color granules is widely used for making molding furniture, chairs, buckets and kitchenwares.", price: "₹58 / Kg" },

            { id: "pp-non-woven", name: "PP Non Woven Granules", img: "images/pp-non-woven.jpg", desc: "PP (polypropylene) Non woven Granules are fabricated using optimum quality raw material. These PLastic Granules are well-known in the industry for their strength, low maintenance and longer service life. Our range is highly appreciated by our customers for their incomparable quality standard. We manufacture these products using high grade material as per industry standards. Our clients can avail these products from us as per their needs and requirements that to at market leading prices.", price: "₹80 / Kg" },

            { id: "natural-pp", name: "Natural PP Granules", img: "images/natural-pp.jpg", desc: "We offer a wide range of Natural PP (polypropylene) Granules which are suitable for various kinds of industrial applications. These products are tested for their strength, density and quality at each stage and finally defect free product is delivered to the customer. These granules are available in natural colors and customized quantity is provided depending upon the requirement of clients. This type of plastic usually has good resistance from fatigue, they are strong and opaque.", price: "₹73 / Kg" },

            { id: "ppcp-black-reprocessed", name: "Ppcp Black Reprocessed Granules", img: "images/ppcp-black.jpg", desc: "Reprocessed black PPCP granules for cost-effective solutions.", price: "₹65 / Kg" },

            { id: "pp-yellow-orange", name: "Pp Yellow Orange", img: "images/pp-yellow.jpg", desc: "We offer this Milky HDPE (High density Polyethylene) Granules which is used in large number of fields including carry bags, food packaging, rope making, manufacturing of textiles, stationery, plastic parts, reusable containers etc. These are fabricated using high grade material as per industry standards and by using hi-tech machinery. They are highly appreciated for its qualities like larger & harder granules and these are strong & rigid.", price: "₹70 / Kg" },

            { id: "pp-raffia", name: "Pp Raffia Granules", img: "images/pp-raffia.jpg", desc: "PP Raffia granules are a type of polypropylene resin specifically formulated for the production of raffia tapes. These tapes are commonly used in woven sacks, bags, ropes, mats, and other packaging materials. The granules are processed using extrusion to produce high-strength, lightweight tapes.", price: "₹55 / Kg" },

            { id: "pp-color", name: "PP Color Granules", img: "images/pp-color.jpg", desc: "Pp coloured sare used in a variety of applications and industries which show high resistance towards solvent. They are widely appreciated for its features like impact resistance, high strength, low moisture absorption and chemical- and corrosion-resistance properties. Our range is extensively used in the production of containers, plastic bags, water pipes, bottles and root barriers. Clients can avail these as per their requirements.", price: "₹70 / Kg" },

            { id: "plastic-granules", name: "Plastic Granules", img: "images/plastic-granules.jpg", desc: "General-purpose plastic granules for various manufacturing needs.", price: "₹68 / Kg" }
        ],

    pp: [
            { id: "pp-white", name: "PP White Granules", img: "images/pp-white.jpg", desc: "We can supply white or milky white PP White Granules in bulk quantity at reasonable rates. These are used in all kinds of plastic processing or manufacturing units", price: "₹80 / Kg" },

{ id: "bopp-natural", name: "Bopp Natural Granule", img: "images/bopp-natural.jpg", desc: "BOPP natural granules are small plastic pellets made from biaxially oriented polypropylene (BOPP) material that has been recycled and reprocessed. They are used in the production of various plastic products, including packaging materials, labels, and tapes.", price: "₹68 / Kg" },

 { id: "pp-milky-dana", name: "Pp Milky Dana", img: "images/pp-milky-dana.jpg", desc: "Pp polymer.We can supply recycled or reprocessed Plastic (LLDP, HDPE and PP) dana or granule in bulk quantity.", price: "₹80 / Kg" },

 { id: "white-pp", name: "White Pp Granules", img: "images/white-pp.jpg", desc: "Pure white PP granules for high-quality output.", price: "₹75 / Kg" },

 { id: "pp-green-reprocess", name: "Pp Green Reprocess Granules", img: "images/pp-green.jpg", desc: "PP green reprocess granules are recycled plastic pellets that are made from post-consumer and post-industrial waste. They are cleaned and processed to remove impurities and can be used to make a variety of plastic products.", price: "₹53 / Kg" },

{ id: "pp-colors", name: "Pp Colors Granules", img: "images/pp-colors.jpg", desc: "Multi-colored PP granules for diverse product lines We have gained immense expertise in delivering HD Colors Granules to our clients. The offered range of HD colors granules is available in different grades and allied specifications to cater to the diverse requirements of esteemed clients. Along with this, the offered range of HD colors granules is ideally utilized in different tasks such as sheet extrusion and manufacturing several plastic products.", price: "₹71 / Kg" },

 { id: "ppcp-grey", name: "Ppcp Grey Granules", img: "images/ppcp-grey2.jpg", desc: "Grey PPCP granules with strong mechanical properties.", price: "₹72 / Kg" },

{ id: "ppcp-black", name: "Ppcp Black Granules", img: "images/ppcp-black.jpg", desc: "Black PPCP granules for UV-resistant applications.", price: "₹55 / Kg" },

{ id: "pp-raffia-2", name: "PP Raffia Granules", img: "images/pp-raffia-2.jpg", desc: "We can supply PP Raffia Granules in form of bags of 25kgs. These are supplied in bulk quantity and at reasonable rates.", price: "₹55 / Kg" },

{ id: "ppcp-light-grey", name: "Ppcp Light Grey", img: "images/ppcp-light-grey.jpg", desc: "Light grey PPCP granules for lightweight products.", price: "₹76 / Kg" },
 ],

        ldpe: [
            { id: "reprocessed-ldpe", name: "Reprocessed LDPE Granules", img: "images/reprocessed-ldpe.jpg", desc: "We can supply LDPE granules in bulk quantity at reasonable rates. These are used in plastic processing or manufacturing factories.", price: "₹70 / Kg" },

            { id: "reprocessed-ldpe-2", name: "Reprocessed Ldpe Granule", img: "images/reprocessed-ldpe-2.jpg", desc: "We are an eminent name, which is engaged in delivering Reprocessed LDPE Granule at clients' premises. The offered range of reprocessed LDPE granules is manufactured utilizing high grade raw material and innovative technology in complete adherence with the international quality norms. Along with this, the offered range of reprocessed LDPE granules is known for its durability and high strength.", price: "₹52 / Kg" },

            { id: "ldpe-moulding", name: "Ldpe Moulding Grade", img: "images/ldpe-moulding.jpg", desc: "LDPE Film Grade is determined by a density range of 0.910-0.940 g / cm3. It does not react at room temperature, except for strong oxidizing agents, and some solvents cause swelling. It can withstand continuous 80 ° C and 95 ° C temperatures for a short time.", price: "₹100 / Kg" },

            { id: "colored-ldpe", name: "Colored LDPE Granules", img: "images/colored-ldpe.jpg", desc: "hese Colored LDPE (Low Density Polythene) Granules are used for manufacturing aluminium composite panels and other related items in various industries. They are fabricated using premium grade raw material which is sourced from the reliable and certified vendors of the market. Our range is available in different colors and can be customized as per the specifications given by the clients. We offer these at market leading prices and this Colored LDPE Granules are the best choice that is available in the markets.", price: "₹35 / Kg" },

            { id: "milky-ldpe", name: "Milky LDPE Granules", img: "images/milky-ldpe.jpg", desc: "Milky white LDPE granules with good clarity.", price: "₹90 / Kg" },

            { id: "white-ldpe", name: "White LDPE Granules", img: "images/white-ldpe.jpg", desc: "Pure white LDPE granules for high-transparency items.", price: "₹110 / Kg" }        ],

        bopp: [
            { id: "recycled-bopp", name: "Recycled BOPP Granules", img: "images/recycled-bopp.jpg", desc: "Colored Dark Grey PP Plastic Granules (Polypropylene), 0.92 G/Cm3, Grade: PP0304UF-DGY4. Pure PP Dark Grey Homopolymer (Unfilled) with very high gloss, great Strength & Excellent Flow properties. Color can be customised as per requirement for orders above 3000kg.", price: "₹80 / Kg" },

            { id: "dark-grey-pp", name: "Dark Grey Pp Granules", img: "images/dark-grey-pp.jpg", desc: "Recycled Bopp granules are small plastic pellets made from recycled Biaxially Oriented Polypropylene (BOPP) resin. BOPP is a thermoplastic polymer that's often used to make packaging films, labels, tapes, and other flexible packaging.", price: "₹97 / Kg" }
        ],

        "recycled-plastic": [
            { id: "pp-brown", name: "PP Brown Granules", img: "images/pp-brown.jpg", desc: "Brown PP recycled granules.", price: "₹95 / Kg" },
            { id: "bopp-milky-white-2", name: "Bopp Milky White Granules", img: "images/bopp-milky-white-2.jpg", desc: "Milky white BOPP granules for recycled applications.", price: "₹110 / Kg" }
        ],

        polypropylene: [
            { id: "pp-granules-plastic-dana", name: "Pp Granules Plastic Dana", img: "images/default.jpg", desc: "Polypropylene granules in dana form for versatile plastic manufacturing.", price: "₹73 / Kg" }
        ]
    };

    // CATEGORY CLICK
    categories.forEach(cat => {
        cat.addEventListener("click", function () {

            const subList = this.querySelector(".sub-list");

            document.querySelectorAll(".sub-list").forEach(list => {
                if (list !== subList) list.style.display = "none";
            });

            subList.style.display =
                subList.style.display === "block" ? "none" : "block";

            showCategoryProducts(this.dataset.category);
        });
    });

    // SUB PRODUCT CLICK
    document.querySelectorAll(".sub-list li").forEach(item => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            showSingleProduct(this.dataset.product);
        });
    });

    function showCategoryProducts(category) {
        productDisplay.innerHTML = "";
        if (!productData[category]) return;

        productData[category].forEach(p => {
            productDisplay.innerHTML += productCard(p);
        });
    }

    function showSingleProduct(id) {
        productDisplay.innerHTML = "";
        for (let cat in productData) {
            const product = productData[cat].find(p => p.id === id);
            if (product) {
                productDisplay.innerHTML = productCard(product);
                break;
            }
        }
    }

    function productCard(p) {
        return `
            <div class="product">
                <img src="${p.img}" onerror="this.src='images/default.jpg'">
                <div>
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <p><strong>Price:</strong> ${p.price}</p>
                    <button>Enquiry Now</button>
                </div>
            </div>
        `;
    }
});

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all fields.');
    }
});

// Get elements
const contactButton = document.getElementById('contactButton');
const contactModal = document.getElementById('contactModal');
const descriptionModal = document.getElementById('descriptionModal');
const thankYouModal = document.getElementById('thankYouModal');
const closeContact = document.getElementById('closeContact');
const closeDescription = document.getElementById('closeDescription');
const closeThankYou = document.getElementById('closeThankYou');
const contactForm = document.getElementById('contactForm');
const descriptionForm = document.getElementById('descriptionForm');

// Open first modal on button click
contactButton.onclick = function() {
    contactModal.style.display = 'block';
};

// Close modals
closeContact.onclick = function() {
    contactModal.style.display = 'none';
};
closeDescription.onclick = function() {
    descriptionModal.style.display = 'none';
};
closeThankYou.onclick = function() {
    thankYouModal.style.display = 'none';
};

// Handle first form submit
contactForm.onsubmit = function(e) {
    e.preventDefault();
    contactModal.style.display = 'none';
    descriptionModal.style.display = 'block';
};

// Handle second form submit
descriptionForm.onsubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    
    // Store data in local storage (for demo)
    const customerData = { name, email, phone, description };
    localStorage.setItem('customerData', JSON.stringify(customerData));
    
    // Simulate sending to number (open WhatsApp with message)
    const message = `New Lead from DAKD Enterprise Company:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDescription: ${description}`;
    const whatsappUrl = `https://wa.me/918795682850?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank'); // Opens WhatsApp
    
    // Show thank you modal
    descriptionModal.style.display = 'none';
    thankYouModal.style.display = 'block';
};

// Close modals when clicking outside
window.onclick = function(event) {
    if (event.target == contactModal) contactModal.style.display = 'none';
    if (event.target == descriptionModal) descriptionModal.style.display = 'none';
    if (event.target == thankYouModal) thankYouModal.style.display = 'none';
};