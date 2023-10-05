// localStorage.clear();
let storedProductsList = JSON.parse(localStorage.getItem("productsList"));

if (!storedProductsList || storedProductsList.length === 0) {
  storedProductsList = [
    {
      id: 1,
      img: "productImg.jpg",
      title: "Gaming PC Pro",
      desc: "Powerful gaming PC with high-performance components for an immersive gaming experience.",
      price: 1299,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 2,
      img: "productImg.jpg",
      title: "Business Workstation",
      desc: "Reliable PC designed for business tasks and productivity, featuring fast processors and ample storage.",
      price: 899,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 3,
      img: "productImg.jpg",
      title: "Home Entertainment PC",
      desc: "PC optimized for home entertainment, perfect for streaming, multimedia, and casual gaming.",
      price: 699,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 4,
      img: "productImg.jpg",
      title: "Ultra Thin Laptop",
      desc: "Slim and lightweight laptop with long battery life, ideal for on-the-go productivity and browsing.",
      price: 799,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 5,
      img: "productImg.jpg",
      title: "Creative Professional PC",
      desc: "High-end PC tailored for creative professionals, offering powerful performance for video editing, design, and 3D rendering.",
      price: 1499,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 6,
      img: "productImg.jpg",
      title: "Budget-Friendly PC",
      desc: "Affordable PC solution for everyday tasks, email, and light web browsing.",
      price: 499,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 7,
      img: "productImg.jpg",
      title: "High-Performance Desktop",
      desc: "Desktop PC packed with high-performance components for gaming, content creation, and multitasking.",
      price: 1599,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 8,
      img: "productImg.jpg",
      title: "Portable Gaming Laptop",
      desc: "Laptop designed for gaming enthusiasts, featuring dedicated graphics and fast refresh rates for smooth gameplay.",
      price: 1199,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 9,
      img: "productImg.jpg",
      title: "Professional Workstation",
      desc: "High-end workstation for professionals requiring immense computational power, perfect for scientific simulations and 3D modeling.",
      price: 2499,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 10,
      img: "productImg.jpg",
      title: "Student Laptop",
      desc: "Laptop tailored for students, combining affordability with essential features for studying and research.",
      price: 599,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 11,
      img: "productImg.jpg",
      title: "All-in-One PC",
      desc: "Sleek all-in-one PC with a space-saving design, featuring built-in display, CPU, and peripherals for a clutter-free workspace.",
      price: 899,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 12,
      img: "productImg.jpg",
      title: "Gaming Console PC",
      desc: "Hybrid gaming console and PC, offering the flexibility of both console gaming and PC functionality.",
      price: 1299,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 13,
      img: "productImg.jpg",
      title: "VR-Ready PC",
      desc: "PC optimized for virtual reality experiences, featuring powerful graphics and smooth performance for immersive VR gaming and applications.",
      price: 1599,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 14,
      img: "productImg.jpg",
      title: "Custom Gaming Rig",
      desc: "Customizable gaming PC with options for personalized components, allowing gamers to build their dream gaming setup.",
      price: 1399,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 15,
      img: "productImg.jpg",
      title: "Developer's Workhorse",
      desc: "High-performance PC tailored for software developers, providing rapid compile times and efficient multitasking for coding projects.",
      price: 1799,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 16,
      img: "productImg.jpg",
      title: "Multimedia Powerhouse",
      desc: "PC optimized for multimedia creation, offering powerful processing and graphics capabilities for video editing, audio production, and graphic design.",
      price: 1699,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 17,
      img: "productImg.jpg",
      title: "Office Productivity PC",
      desc: "Efficient PC for office productivity tasks, featuring fast processors and ample RAM for smooth multitasking and document management.",
      price: 799,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 18,
      img: "productImg.jpg",
      title: "Rugged Industrial PC",
      desc: "Industrial-grade PC built to withstand harsh environments, suitable for manufacturing, automation, and control applications.",
      price: 1999,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 19,
      img: "productImg.jpg",
      title: "Home Server",
      desc: "Dedicated server PC for home network storage, media streaming, and remote access, providing centralized data management for households.",
      price: 899,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 20,
      img: "productImg.jpg",
      title: "Graphic Design Workstation",
      desc: "Specialized PC for graphic designers, offering color-accurate displays and powerful GPUs for handling large design files and complex visuals.",
      price: 1499,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 21,
      img: "productImg.jpg",
      title: "AI Development PC",
      desc: "PC optimized for artificial intelligence and machine learning development, featuring GPUs designed for neural network processing and deep learning algorithms.",
      price: 2499,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 22,
      img: "productImg.jpg",
      title: "Digital Audio Workstation",
      desc: "Specialized PC for music producers and audio engineers, offering low-latency audio interfaces and high-performance components for audio production.",
      price: 1899,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 23,
      img: "productImg.jpg",
      title: "CAD Workstation",
      desc: "Highly capable PC for computer-aided design (CAD) professionals, providing powerful GPUs and efficient processors for complex 3D modeling and engineering tasks.",
      price: 2099,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 24,
      img: "productImg.jpg",
      title: "IT Administrator's PC",
      desc: "PC tailored for IT administrators and system managers, offering remote management capabilities and efficient multitasking for network maintenance and troubleshooting.",
      price: 1699,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 25,
      img: "productImg.jpg",
      title: "Eco-Friendly PC",
      desc: "Environmentally conscious PC featuring energy-efficient components and sustainable materials, reducing environmental impact.",
      price: 999,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 26,
      img: "productImg.jpg",
      title: "Wireless Home Theater PC",
      desc: "PC designed for wireless home entertainment systems, offering streaming capabilities and seamless integration with home theater setups.",
      price: 1199,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 27,
      img: "productImg.jpg",
      title: "Multi-Monitor Workstation",
      desc: "PC optimized for multi-monitor setups, offering powerful graphics and multiple display outputs for efficient multitasking and expansive workspaces.",
      price: 1799,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 28,
      img: "productImg.jpg",
      title: "Educational PC for Schools",
      desc: "PC designed for educational institutions, providing secure and reliable computing for classrooms and e-learning environments.",
      price: 699,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 29,
      img: "productImg.jpg",
      title: "Home Automation Server",
      desc: "Server PC for home automation systems, offering connectivity and control for smart home devices and IoT applications.",
      price: 1299,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 30,
      img: "productImg.jpg",
      title: "High-End Streaming PC",
      desc: "PC optimized for streaming content creators, featuring powerful CPUs and GPUs for high-quality live streaming and content production.",
      price: 1599,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 31,
      img: "productImg.jpg",
      title: "Professional Video Editing PC",
      desc: "PC tailored for professional video editors, offering dedicated GPUs and fast storage solutions for smooth editing of high-resolution videos.",
      price: 2199,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 32,
      img: "productImg.jpg",
      title: "Gaming Laptop Ultra",
      desc: "High-performance gaming laptop with a sleek design, offering desktop-level graphics and fast refresh rates for competitive gaming.",
      price: 1799,
      quantity: 0,
      isAddedToCart: false,
    },
    {
      id: 33,
      img: "productImg.jpg",
      title: "Compact Mini PC",
      desc: "Small form factor PC ideal for space-constrained environments without compromising performance.",
      price: 599,
      quantity: 0,
      isAddedToCart: false,
    },
  ];
}
let cartProductsList =
  JSON.parse(localStorage.getItem("cartProductsList")) || [];
let cartItemCount = parseInt(localStorage.getItem("cartItemCount")) || 0;

// Render products initially
renderProducts();

function renderProducts() {
  let htmlProducts = "";
  storedProductsList.forEach((product, index) => {
    let isAddedToCart = cartProductsList.some((item) => item.id === product.id);
    let addToCartText = isAddedToCart ? "Added" : "Add To Cart";
    let buttonBackgroundColor = isAddedToCart ? "green" : "rgb(132, 4, 161)";
    let htmlProduct = `
      <div class="container">
        <img class="ProductImg" src="${product.img}" alt="">
        <span class="nameOfProduct">${product.title}</span>
        <p class="descriptionProd">${product.desc}</p>
       <div class="priceAddToCartDiv">
       <span>${product.price} $</span>
       <div class="addToCartDiv"  style="background-color: ${buttonBackgroundColor};cursor: ${
      !isAddedToCart ? "pointer" : ""
    };">    <button style="cursor: ${
      !isAddedToCart ? "pointer" : ""
    };" class="addToCartBtn" data-index="${index}">
          ${addToCartText}
        </button>
        <i class="fa-solid fa-cart-shopping"></i>
        </div>
       </div>
      </div>`;
    htmlProducts += htmlProduct;
  });
  document.querySelector(".productsList").innerHTML = htmlProducts;
  document.querySelector(".cartCount").innerHTML = cartItemCount;
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("addToCartBtn")) {
    const index = event.target.getAttribute("data-index");
    addToCart(index);
  }
});

function addToCart(index) {
  const selectedProduct = storedProductsList[index];
  if (!selectedProduct.isAddedToCart) {
    selectedProduct.isAddedToCart = true;
    cartProductsList.push(selectedProduct);
    cartItemCount++;
    updateLocalStorage();
    renderProducts();
  }
}

function updateLocalStorage() {
  localStorage.setItem("productsList", JSON.stringify(storedProductsList));
  localStorage.setItem("cartProductsList", JSON.stringify(cartProductsList));
  localStorage.setItem("cartItemCount", cartItemCount);
}
