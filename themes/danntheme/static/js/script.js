// Function for list.html, jquery filter on click
$(document).ready(function() {
        $('.dyn-items div a').click(function() {
            const $this = $(this);
            const filterItemText = $this.text();
            const $blogPosts = $('#blog-posts');

            $('.dyn-items div').removeClass('active');

            $this.parent().addClass('active');

            if (filterItemText == 'All') {
                $blogPosts.children('div.item').show();
            } else {
                $blogPosts.children('div:not(.' + filterItemText + ')').hide();
                $blogPosts.children('div.' + filterItemText).show();
            }
            return false;
        });
    });
