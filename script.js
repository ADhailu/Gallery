document.addEventListener("DOMContentLoaded", function() {

    const galleryGrid = document.getElementById("gallery-grid");
    const loadImageBtn = document.getElementById("add-image-btn");
    const galleryModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    const modalImage = document.querySelector('.modal-img');

    const initialImages = [
        "https://images.pexels.com/photos/2387866/pexels-photo-2387866.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3331094/pexels-photo-3331094.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2583852/pexels-photo-2583852.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3641974/pexels-photo-3641974.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];

    // Function to create a single gallery item
    function createGalleryItem(imageUrl) {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4";

        col.innerHTML = `
            <div class="card gallery-card">
                <img src="${imageUrl}" class="gallery-card-img" alt="A gallery image">
                <div class="card-img-overlay gallery-card-overlay">
                    <a href="${imageUrl}" class="download-btn" download><i class="fas fa-download"></i></a>
                </div>
            </div>
        `;

        // Event listener to open the modal when an image is clicked
        col.querySelector('.gallery-card-img').addEventListener('click', () => {
            modalImage.src = imageUrl;
            galleryModal.show();
        });
        
        return col;
    }
    
    // Function to add an image to the grid
    function addImageToGrid(imageUrl) {
        const item = createGalleryItem(imageUrl);
        galleryGrid.appendChild(item);
    }

    // Load initial images
    initialImages.forEach(url => addImageToGrid(url));

    // Event listener for the "Load More" button
    loadImageBtn.addEventListener("click", () => {
        for (let i = 0; i < 12; i++) {
            const randomImageUrl = `https://picsum.photos/600/800?random=${Math.random()}`;
            addImageToGrid(randomImageUrl);
        }
    });

    // Event listener for feedback form
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual form submission
        alert('Thank you for your feedback!');
        feedbackForm.reset();
    });

});
