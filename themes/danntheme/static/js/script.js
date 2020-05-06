// Function for list.html, jquery filter on click
$(document).ready(function() {
        $('.dyn-items div a').click(function() {
            const $this = $(this);
            const filterItemText = $this.text();
            const $blogPosts = $('#blog-posts');
            const $dynHeader = $('#dyn-header');

            $('.dyn-items div').removeClass('active');

            $this.parent().addClass('active');

            if (filterItemText == 'ALL') {
                $blogPosts.children('div.item').show();
                $('#dyn-header').text(filterItemText + "Articles");
            } else {
                $blogPosts.children('div:not(.' + filterItemText + ')').hide();
                $blogPosts.children('div.' + filterItemText).show();
            }
            return false;
        });
    });
