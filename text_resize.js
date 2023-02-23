<script type="text/javascript">
$(function() {
    $(window).on('resize', function() {
      $('#quickfit-a').quickfit({ max: 40, min: 20, truncate: false });
      $('#quickfit-b').quickfit({ max: 40, min: 20, truncate: true });        
      $('#quickfit-c').quickfit({ max: 40, min: 20, truncate: true });
    });
    $(window).trigger('resize');    
</script>