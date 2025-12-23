// Function for list.html, jquery filter on click
$(document).ready(function() {
        $('.dyn-items div a').click(function() {
            const $this = $(this);
            const filterItemText = $this.text();
            const $selectedCategory = $this.text();
            const $blogPosts = $('#blog-posts');

            $('.dyn-items div').removeClass('active');
            $this.parent().addClass('active');

            $('#header-category').text(filterItemText);

            if (filterItemText == 'ALL') {
                $blogPosts.children('div.item').show();
            } else {
                $blogPosts.children('div:not(.' + filterItemText + ')').hide();
                $blogPosts.children('div.' + filterItemText).show();
            }
            return false;
        });

        // Image modal functionality for blog posts only
        const $blogContent = $('.blog-post-content');
        if ($blogContent.length > 0) {
            // Create modal element
            const $modal = $('<div class="blog-post-image-modal"><img src="" alt=""></div>');
            $('body').append($modal);

            let scrollPosition = 0;

            // Make images in blog posts clickable
            $blogContent.find('img').each(function() {
                const $img = $(this);
                // Skip images that are already inside links
                if ($img.closest('a').length === 0) {
                    $img.css('cursor', 'pointer');
                }
            });

            // Handle image click
            $blogContent.on('click', 'img', function(e) {
                const $img = $(this);
                // Don't open modal if image is inside a link
                if ($img.closest('a').length > 0) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                // Store scroll position
                scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

                    // Set modal image source
                    const imgSrc = $img.attr('src') || $img.attr('data-src');
                    if (imgSrc) {
                        const $modalImg = $modal.find('img');
                        $modalImg.attr('src', imgSrc);
                        $modalImg.attr('alt', $img.attr('alt') || '');
                        
                        // Check if image is PNG and add class for white background
                        if (imgSrc.toLowerCase().endsWith('.png')) {
                            $modalImg.addClass('png-image');
                        } else {
                            $modalImg.removeClass('png-image');
                        }
                        
                        // Prevent body scroll
                        $('body').css('overflow', 'hidden');
                        
                        // Trigger animation by adding active class
                        setTimeout(function() {
                            $modal.addClass('active');
                        }, 10);
                    }
            });

            // Close modal on click anywhere (overlay or image)
            $modal.on('click', function(e) {
                // Close modal whether clicking on overlay or image
                if ($modal.hasClass('active')) {
                    closeModal();
                    return false;
                }
            });

            // Close modal on escape key
            $(document).on('keydown', function(e) {
                if (e.key === 'Escape' && $modal.hasClass('active')) {
                    closeModal();
                }
            });

            function closeModal() {
                if (!$modal.hasClass('active')) {
                    return; // Already closed
                }
                $modal.removeClass('active');
                // Remove PNG class when closing
                $modal.find('img').removeClass('png-image');
                // Wait for animation to complete before restoring scroll
                setTimeout(function() {
                    $('body').css('overflow', '');
                    // Restore scroll position
                    window.scrollTo(0, scrollPosition);
                }, 300);
            }

            // Global close function that can be called from anywhere
            // This ensures the modal can always be closed even if event handlers fail
            window.closeImageModal = function() {
                if ($modal && $modal.hasClass('active')) {
                    closeModal();
                }
            };

            // Emergency fallback: ensure body scroll is restored if modal gets stuck
            // This prevents the page from being permanently frozen
            $(window).on('beforeunload', function() {
                $('body').css('overflow', '');
            });
        }
    });
