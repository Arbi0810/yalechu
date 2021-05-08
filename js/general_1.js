( function( $ ) {
    
    var chiddn_scroll_amount = Chi_DDN_Options.chiddn_scroll_amount;
    
    $(function() {
    
    // section ids 
    window.chiddn_side_nav_item_labels = function() {
    
        var sections = $( '.et_pb_section:visible:not(.et_pb_section div)' );
        var total_sections = sections.length;
    
        if ( total_sections > 1 && $( '.et_pb_side_nav_page' ).length ) {

				sections.each( function( index ){
                    
                    sections.eq( index ).addClass( 'chiddn_section_' + index + '' );
                    
                    var section_id = $( '.et_pb_section:visible:not(.et_pb_section div).chiddn_section_' + index + '' ).attr('id');
                    
                    var hide_section_dot = $( '.et_pb_section:visible:not(.et_pb_section div).chiddn_section_' + index + '' );
                    
                    var section_id_text = ( typeof section_id === 'undefined' || !section_id ) ? '' : section_id;
                    
                    if ( section_id_text != '' ){
                        $( '.et_pb_side_nav .side_nav_item a#side_nav_item_id_' + index ).append( '<span id="chiddn_item_label_id_' + index + '" class="chiddn_item_label">' + section_id_text + '</span>' );
                        }
                    
                    if ( hide_section_dot.hasClass('chiddn_hide_section_dot') ) {
                            $( '.et_pb_side_nav .side_nav_item a#side_nav_item_id_' + index ).closest('li.side_nav_item').addClass('chiddn_hide_section_dot');
                        }
				});
        }
    
    };    
        
    chiddn_side_nav_item_labels();       
          
    }); 
    
    $(function() {
    
    // show dot navigation after scroll
    window.chiddn_show_dotnav_after_scroll = function() {
        
        if ($('.chiddn_hidden').length) {
            $('.et_pb_side_nav').removeClass('et-visible').addClass('et-hidden');
        }
        
        if ( $('.et_pb_side_nav').length && $('.chiddn_hidden').length) {
            $(window).scroll(function(){
                if ($(this).scrollTop() > chiddn_scroll_amount) {
                    $('body').removeClass('chiddn_hidden');
                    $('.et_pb_side_nav').show().addClass('et-visible').removeClass('et-hidden');
                } else {
                    $('body').addClass('chiddn_hidden');
                    $('.et_pb_side_nav').removeClass('et-visible').addClass('et-hidden');
                }
            });

        }
    }; 
    
    chiddn_show_dotnav_after_scroll();
    
    });
    
} )( jQuery );