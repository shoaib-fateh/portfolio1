$( document ).ready( () =>
{
    // Spinner
    $( "#spinner" ).removeClass( "show" );

    // sticky Header
    var sticky = document.getElementById( "header" ).offsetTop;

    window.onscroll = () => { stickyHeader() };
    function stickyHeader ()
    {
        if ( window.pageYOffset > sticky )
        {
            header.classList.add( "sticky" );
        } else
        {
            header.classList.remove( "sticky" );
        }
    }
    setInterval( stickyHeader, 1 );
} );