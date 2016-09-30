<?php 
	$url = "http://talentocreativo.co/bakery/";
	
	include("lebrerias/Browser.php");
	
	$browser 	= new Browser();
	$version  	= (float)$browser->getVersion();
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta property="og:image" content="<?php echo $url;?>/images/image-facebook-share.jpg" />

<meta property="og:description" content="Somos tus aliados para endulzar a tus clientes.
Sueña lo que quieras para tu compañía, que nosotros lo horneamos." />

<meta property="og:title" content="The Idea Bakery" />

</header>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Bakery</title>
    <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.v1.3.js"></script>
    <script type="text/javascript" src="js/jquery.mousewheel-3.0.6.pack.js"></script>
    <script type="text/javascript" src="js/jquery.fancybox.js"></script>
    <script type="text/javascript" src="js/jQueryRotateCompressed.js"></script>
    <script type="text/javascript" src="js/bakery.js"></script>
    
    <?php if($browser->getBrowser()=="Internet Explorer" && $version < 9):?>
    <link type="text/css" rel="stylesheet" href="css/fontsie.css" />
    <?php else:?>	
    <link type="text/css" rel="stylesheet" href="css/fonts.css" />
    <?php endif;?>	
     
    <link type="text/css" rel="stylesheet" href="css/fancybox/jquery.fancybox.css" />
    <link type="text/css" rel="stylesheet" href="css/style.css" />
    
</head>
<body>

<div id="div-container-loading">
	<div class="loading">
    </div>
</div>

<div  style="display: none;">
	<li><a id="msje_form" href="#inline1" title="">Inline</a></li>
</div>

<div style="display: none;">
    <div id="inline1" style="width:400px;height:400px;overflow:auto; text-align:center; font-family:'Open sans'; background-color:#f8e6d8;">
    </div>
</div>

<div id="container-menu" class="container-menu">
	<div id="slide-conteiner-menu">
    	<div>
        	
        </div>
    </div>
	<div id="container-menu-interna">
    	<div class="logo">
        </div>
        <ul>
            <li id="quienes_somos">Quiénes somos</li>
            <li id="servicios">Servicios</li>
            <li id="contacto">Contáctenos</li>
        </ul>
    </div>
</div>

<div id="containar-header-table" class="slide">
    <div id="header">
        <div class="bg-header bg-one">
        </div>
        
        <div class="bg-header bg-two">
        </div>
        
        <div class="bg-header bg-three">
        </div>
    	
        <div class="bg-header bg-four">
        </div>
        
        <div class="bg-header bg-five">
        </div>
        
    	<div id="header-internal">
            
            <div id="slide-1">
                <div class="img-slide img-opacity">
                </div>
                <div class="copy-slide">
                    Mezclamos los ingredientes que forman grandes ideas para tu compañía.
                </div>
            </div>
            
            <div id="slide-2">
                <div class="img-slide img-opacity">
                </div>
                <div class="copy-slide">
                    Horneamos la mejor idea de acuerdo a tus necesidades.
                </div>
            </div>
            
            <div id="slide-3">
                <div class="img-slide img-opacity">
                </div>
                <div class="copy-slide">
                    Buscamos el glaseado perfecto a cada proyecto que tienes!
                </div>
            </div>
            
            <div id="slide-4">
                <div class="img-slide img-opacity">
                </div>
                <div class="copy-slide">
                    Somos tus aliados para endulzar a tus clientes.
                </div>
            </div>
            
            <div id="slide-5">
                <div class="img-slide img-opacity">
                </div>
                <div class="copy-slide">
                    Sueña lo que quieras para tu compañía, que nosotros lo horneamos.
                </div>
            </div>

        </div>
    </div>
    
    <div id="table">
    	<div class="table-top">
        	<div class="table-top-brightness">
            </div>
        </div>
        <div class="table-front">
        	<div class="table-shadow-one">
            </div>
        </div>
        <div class="table-shadow-two">
        </div>
    </div>
</div>    
    
<div id="corporate" data-slide="1" class="slide">
	<div id="corporate-internal">
    	
        <div id="container-about-us">
        	<div>
            	<div class="horizontal-line-about-us left"></div>
            </div>
            
            <div>
            	<p>QUIÉNES SOMOS</p>
            </div>
            
            <div>
            	<div class="horizontal-line-about-us right"></div>
            </div>
        </div>
        
        <div class="container-about-us-two">
        	<p>The Idea Bakery nace por el deseo continuo que ve en las compañías de todo tipo, de contar con alguien que les provea una atención personalizada de acuerdo a sus necesidades, las cuales cambian tanto como el mercado actual. Basándonos en ésto, nos sentamos a mezclar ingredientes que forman grandes ideas para tu compañía y las horneamos obteniendo el resultado que has estado buscando como apoyo para endulzar a tus clientes.
            </p>
        </div>
        
        <div class="container-we-do">
        	<div class="container-we-do-title">
                <div>
                    <div class="horizontal-line-about-us left"></div>
                </div>
                
                <div class="title">
                    <p>QUÉ HACEMOS</p>
                </div>
                
                <div>
                    <div class="horizontal-line-about-us right"></div>
                </div>
            </div>
            
            <div id="we-switch-container">
            	<div class="we-switch-internal">
                	<div class="text-offline">OFFLINE</div>
                    <div class="we-switch we-switch-off">
                    	
                        <div class="we-switch-boton">
                        </div>
                        
                        <div class="we-switch-boton-left">
                        </div>
                        <div class="we-switch-boton-right">
                        </div>	
                    </div>
                    <div class="text-online">ONLINE</div>
                </div>
            </div>
            
            
            <div class="container-animation-offline">
            	
                <div class="animation-offline">
                	
                    <div class="animation-offline-one">
                    </div>
                    
                    <div class="animation-offline-two">
                    </div>
                    
                    <div class="animation-offline-three">
                    </div>
                    
                    <div class="animation-offline-four img-opacity">
                    </div>
                    
                    <div class="tooltip-offline-plus-one tooltip">
                    Identidad Corporativa
                    </div>
                    <div class="animation-offline-plus-one animation-offline-plus img-opacity" id="plus-one">
                    </div>
                    
                    <div class="tooltip-offline-plus-two tooltip">
                    Diseño Gráfico
                    </div>
                    <div class="animation-offline-plus-two animation-offline-plus img-opacity" id="plus-two">
                    </div>
                    
                    <div class="tooltip-offline-plus-three tooltip">
                    Mercadeo Visual y Vitrinas
                    </div>
                    <div class="animation-offline-plus-three animation-offline-plus img-opacity" id="plus-three">
                    </div>
                    
                    <div class="tooltip-offline-plus-four tooltip">
                    Eventos Corporativos
                    </div>
                    <div class="animation-offline-plus-four animation-offline-plus img-opacity" id="plus-four">
                    </div>
                    
                    <div class="animation-offline-five">
                    </div>
                    
                </div>
                
                <div class="copy-animation-offline-default copy-animation-offline">
                	<h2>OFFLINE</h2>
                    <p>De acuerdo a tus necesidades tenemos un menú offline de servicios los cuales se especializan en desarrollar la imagen de tu compañía para endulzar las experiencias de tus clientes.</p>
                </div>
                
                <div class="copy-animation-offline-one copy-animation-offline">
                	<h2>Identidad Corporativa</h2>
                    <p>Identificamos los ingredientes y hacemos la receta para crear tu marca y todo lo que necesitas para comenzar.</p>
                </div>
                
                <div class="copy-animation-offline-two copy-animation-offline">
                	<h2>Diseño Gráfico</h2>
                    <p>Huevo, azúcar, harina y vainilla para comenzar, se mezclan perfectamente para producir una deliciosa idea, dependiendo de lo que necesites en cada momento.</p>
                </div>
                
                <div class="copy-animation-offline-three copy-animation-offline">
                	<h2>Mercadeo Visual y Vitrinas</h2>
                    <p>La masa perfecta se consigue batiendo y estudiando el comportamiento de los clientes en el punto de venta para la planeación y desarrollo del visual merchandising y planogramas. Así como activaciones en diversos puntos de ventas y stands para congresos.</p>
                </div>
                
                <div class="copy-animation-offline-four copy-animation-offline">
                	<h2>Eventos Corporativos</h2>
                    <p>Galletas, brownies, cupcakes entre otros pedidos especiales son el complemento perfecto a  una dulce idea, para esto tenemos stands y planeación de eventos.</p>
                </div>
                
                <div class="animation-online">
                	
                    <div class="animation-online-one">
                    </div>
                    
                    <div class="animation-online-two">
                    </div>
                    
                    <div class="animation-online-three">
                    </div>
                    
                    <div class="animation-online-four img-opacity">
                    </div>
                    
                    <div class="tooltip-online-plus-one tooltip">
                   	Diseño y desarrollo web
                    </div>
                    <div class="animation-online-plus-one animation-online-plus img-opacity" id="plus-online-one">
                    </div>
                    
                    <div class="tooltip-online-plus-two tooltip">
                    Redes Sociales
                    </div>
                    <div class="animation-online-plus-two animation-online-plus img-opacity" id="plus-online-two">
                    </div>
                    
                    <div class="tooltip-online-plus-three tooltip">
                    Desarrollo interactivo
                    </div>
                    <div class="animation-online-plus-three animation-online-plus img-opacity" id="plus-online-three">
                    </div>
                    
                    <div class="animation-online-five">
                    </div>
                    
                </div>
                
                <div class="copy-animation-online-default copy-animation-online">
                	<h2>ONLINE</h2>
                    <p>Tomando en cuenta el mundo actual, que está constantemente en cambio, tenemos un menú online de servicios los cuales se especializan en la adaptación de tu marca a un mercado nuevo, rápido y diferente.</p>
                </div>
                
                <div class="copy-animation-online-one copy-animation-online">
                	<h2>Diseño y desarrollo web</h2>
                    <p>Fondant, piping y decorado hacen una página web amigable. Justo lo que hace falta para que todos encuentren tu negocio. </p>
                </div>
                
                <div class="copy-animation-online-two copy-animation-online">
               		<h2>Redes Sociales</h2>
                    <p>Para tener una relación directa con los clientes necesitas el mejor de los toppings, una estrategia de redes sociales.</p>
                </div>
                
                <div class="copy-animation-online-three copy-animation-online">
               		<h2>Desarrollo interactivo</h2>
                    <p>Si deseas llegar a clientes exclusivos tenemos aplicaciones Web y aplicaciones Mobile.</p>
                </div>
                
            </div>
           
        </div>
    
    </div>
</div>


<div id="container-contact">
	<div id="container-internal-contact">
        <div id="tablet-contact">
        	<div class="loading-form">
            	<img src="images/ajax-loader.gif" />
            </div>
            <div class="container-share-info">
            	
                <div class="div-share">
                    <div class="column-contact column-contact-one">
                        <h3>CONTÁCTENOS</h3>
                        <p><img src="images/tel-contacto.png" align="center" />(+507) 6618.6494</p>
                        <p><img src="images/email-contact.png" align="center" />gerencia@theibakery.com</p>
                        <p><img src="images/web-contact.png" align="center" />www.theibakery.com</p>
                    </div>
            
                    <div class="column-contact">
                        <div class="shadow-contact">
                        </div>
                        
                        <div class="contact-icon contact-icon-write">
                            <div class="contact-icon-img contact-write">
                            </div>
                            <p>Escribir</p>
                        </div>
                        
                        <div class="contact-icon contact-icon-share">
                             <a onclick="window.open('http://www.facebook.com/sharer.php?u=http://talentocreativo.co/bakery','', 'toolbar=0, status=0, width=650, height=450');" href="javascript: void(0);">
                            <div class="contact-icon-img contact-share">
                            </div>
                            </a>
                            <p>Compartir</p>
                        </div>
                        
                        <div class="line-separator-contact">
                        </div>
                        
                        <div class="contact-icon contact-icon-facebook">
                            <a href="https://www.facebook.com/TheIdeaBakery" target="_blank">
                            <div class="contact-icon-img contact-facebook">
                            </div>
                            </a>
                            <p>Facebook</p>
                        </div>
                        
                        <div class="contact-icon">
                            <a href="https://twitter.com/TheIdeaBakery" target="_blank">
                            <div class="contact-icon-img contact-twitter">
                            </div>
                            </a>
                            <p>Twitter</p>
                        </div>
                    </div>
            	 </div> 
                 
                 <div class="form-contact">
                 	<p>Contáctenos</p>
                    <form method="post" id="form_contacto">
                        <input type="text" name="nombre" id="nombre" class="txt_form style_inputs" placeholder="Nombre" />
                        <input type="text" name="email" id="email" class="txt_form style_inputs" placeholder="Email" />
                        <textarea id="mensaje" class="style_inputs" placeholder="Mensaje" name="mensaje"></textarea>
                        <input type="button" value="Enviar" id="btn_enviar" class="style_btns" />
                        <input type="button" value="Cancelar" id="btn_cancelar" class="style_btns" />
                    </form>
                 </div>
                        
        	</div>        
                
        </div>
    </div>
    <div class="reservados">
        <p>Todos los derechos reservados</p>
    </div>
</div>



    
</body>
</html>
