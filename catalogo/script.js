const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const fileInput = document.getElementById('fileInput');
const detalleSection = document.getElementById('detalle');
const detalleContent = document.getElementById('detalle-content');
const cerrarDetalleBtn = document.getElementById('cerrarDetalle');


const images = [
    {
        src: 'https://vasile.com.ar/wp-content/uploads/2021/01/vasile-transfo-dis-4.jpg',
        description: 'Transformador Monofásico EcoEficiente: Este transformador de alta tensión incorpora tecnología ecoeficiente para maximizar la eficiencia energética y reducir las emisiones. Su diseño compacto lo hace ideal para aplicaciones industriales.',
    },
    {
        src: 'https://www.grupoalava.com/wp-content/uploads/2022/02/transformadorelectrico-1.png',
        description: 'Transformador de Potencia Subestación: Diseñado para subestaciones eléctricas, este transformador trifásico garantiza una distribución de energía estable y segura. Su robusta construcción lo hace adecuado para entornos exigentes.',
    },
    {
        src: 'https://www.cooperativacalf.com.ar/wp-content/uploads/2015/08/prod2_gr.jpg',
        description: 'Transformador de Resina Epoxi: Con una carcasa de resina epoxi, este transformador ofrece una protección excepcional contra la humedad y la corrosión. Su diseño modular facilita la instalación y el mantenimiento.',
    },
    {
        src: 'https://www.lanacion.com.ar/resizer/v2/transformador-de-EESTVBWW7NBUXISVEAJV7GCZIE.jpg?auth=e0eed78ff91f5411a8eaca65cf2293d81a3458e75a55a3ce6472ef127d38f614&width=420&height=280&quality=70&smart=true',
        description: 'Transformador Autorefrigerado para Subestación: Este transformador de alta tensión cuenta con un sistema autorefrigerado que garantiza un rendimiento óptimo sin necesidad de sistemas adicionales. Ideal para subestaciones en climas cálidos.',
    },
    {
        src: 'https://como-funciona.co/wp-content/uploads/2018/05/como-funciona-un-transformador.jpg',
        description: 'Transformador de Corriente para Grandes Potencias: Diseñado para aplicaciones de grandes potencias, este transformador trifásico ofrece un rendimiento excepcional y una alta capacidad de carga. Su tecnología avanzada garantiza una distribución eficiente de la energía',
    },
    {
        src: 'https://previews.123rf.com/images/federicofoto/federicofoto1301/federicofoto130100114/17661282-bobinas-grandes-de-cable-rojo-de-alimentaci%C3%B3n-de-alta-tensi%C3%B3n-en-el-medio-de-la-carretera.jpg',
        description: 'Rollos de Cobre para Aplicaciones de Telecomunicaciones: Estos rollos de cobre están diseñados para satisfacer las demandas de las redes de telecomunicaciones modernas. Su alta conductividad garantiza una transmisión de señal eficiente y sin interferencias.',
    },
    {
        src: 'https://us.123rf.com/450wm/tsphotographer/tsphotographer1802/tsphotographer180200018/96325132-rollos-de-cable-de-alta-tensi%C3%B3n-en-el-piso.jpg',
        description: 'Rollos de Cobre para Circuitos Impresos: Diseñados para la fabricación de circuitos impresos de alta calidad, estos rollos de cobre ofrecen una excelente conductividad y durabilidad. Perfectos para aplicaciones electrónicas de precisión.',
    },
    {
        src: 'https://http2.mlstatic.com/D_NQ_NP_696936-MLA47691202533_092021-O.webp',
        description: 'Rollos de Cobre Esmaltado para Motores: Con un esmaltado especial, estos rollos de cobre son perfectos para la fabricación de motores eléctricos de alta eficiencia. Proporcionan un rendimiento duradero y libre de problemas.',
    },
    {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6jCYQ9Tb370lwwo5JLIoqHf7hKh3bP8l4nA&usqp=CAU',
        description: 'Rollos de Cobre para Sistemas de Energía Renovable: Fabricados para aplicaciones en energía renovable, estos rollos de cobre aseguran una conducción eficiente de la energía en sistemas solares y eólicos. Resistente a la corrosión para una larga vida útil.',
    },
    {
        src: 'https://www.shutterstock.com/image-photo/closeup-wooden-coil-electric-cable-600nw-2218625841.jpg',
        description: 'Rollos de Cobre para Equipos Electrónicos: Estos rollos de cobre de alta pureza son ideales para la fabricación de componentes electrónicos de alta precisión. Su conductividad excepcional garantiza un rendimiento óptimo.',
    },
    {
        src: 'https://www.edemsa.com/wp-content/uploads/2022/05/Transformadores-de-aluminio3.jpeg',
        description: 'Transformador de Distribución Urbana: Compacto y diseñado para entornos urbanos, este transformador se integra fácilmente en áreas residenciales y comerciales. Su diseño estético y silencioso lo hace perfecto para entornos sensibles al ruido.',
    },
  

];

showImages(images.slice(0, 12));

function showImages(images) {
    main.innerHTML = '';

    // Agregar la card con el botón de "más"
    const addImageCard = document.createElement('div');
    addImageCard.classList.add('image', 'add-image');
    addImageCard.innerHTML = `
        <div id="addImage" onclick="openFileInput()">
            <div class="plus-symbol">+</div>
            <div class="add-text">Agregar elemento</div>
        </div>
    `;
    main.appendChild(addImageCard);

    images.forEach((image) => {
        const { src, description } = image;

        const imageEl = document.createElement('div');
        imageEl.classList.add('image');

        imageEl.innerHTML = `
            <img src="${src}" alt="${description}">
            <div class="description">
                <h3>${description}</h3>
            </div>
        `;

        main.appendChild(imageEl);
    });
}

function openFileInput() {
    // Simula el clic en el input de tipo file
    fileInput.click();
}

function handleFileSelect(event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const newImage = {
                src: e.target.result,
                description: 'Nueva imagen',
            };

            // Agrega la nueva imagen al array y actualiza la vista
            images.push(newImage);
            showImages(images.slice(0, 6));
        };

        reader.readAsDataURL(file);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== '') {
        // Filtra las imágenes según el término de búsqueda si es necesario
        const filteredImages = images.filter((image) =>
            image.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // Muestra las primeras 6 imágenes filtradas
        showImages(filteredImages.slice(0, 6));

        search.value = '';
    } else {
        // Muestra las primeras 6 imágenes si el término de búsqueda está vacío
        showImages(images.slice(0, 6));
    }

    main.addEventListener('click', (e) => {
        if (e.target.classList.contains('image')) {
            const imageIndex = Array.from(main.children).indexOf(e.target);
            mostrarDetalle(images[imageIndex]);
        }
    });
    
    // Agrega un evento de clic al botón de cerrar el detalle
    cerrarDetalleBtn.addEventListener('click', () => {
        ocultarDetalle();
    });
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const searchTerm = search.value;
    
        if (searchTerm && searchTerm !== '') {
            // Filtra las imágenes según el término de búsqueda si es necesario
            const filteredImages = images.filter((image) =>
                image.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
            // Muestra las primeras 6 imágenes filtradas
            showImages(filteredImages.slice(0, 6));
    
            search.value = '';
        } else {
            // Muestra las primeras 6 imágenes si el término de búsqueda está vacío
            showImages(images.slice(0, 6));
        }
    });
    
    // Mueve estas funciones al alcance global (fuera de cualquier evento)
    function mostrarDetalle(image) {
        detalleContent.innerHTML = `
            <img src="${image.src}" alt="${image.description}">
            <div class="description">
                <h3>${image.description}</h3>
            </div>
        `;
        detalleSection.style.display = 'block';
    }
    
    function ocultarDetalle() {
        detalleSection.style.display = 'none';
    }
      
});