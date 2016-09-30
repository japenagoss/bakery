/*
Developer: Jhony Penagos
Talento Creativo
JS para Bakery
*/
$(document).ready(function(){
	
	function preload(arrayOfImages) {
		$(arrayOfImages).each(function(){
			$('<img/>')[0].src = this;
		});
	}
	
	preload(['images/we-switch-off.jpg','images/we-switch-on.jpg']);
	
	/*
	========================================================================================================================
	Efectos interruptor que hacemos (offline - online)
	========================================================================================================================
	*/
	var status_animation = "off",end_off = false,end_on = true;
			
	$(".we-switch-boton-right,.text-online").click(function(){
		
		if(status_animation=="off"){
			
			if(end_off==true){
				$(".we-switch").addClass("we-switch-on").removeClass("we-switch-off");
				$(".we-switch-boton").animate({"margin-left":82}).addClass("we-switch-boton-on");
				$(".text-online").css({color:"#444a4e"});
				$(".text-offline").css({color:"#6f7980"});
				
				animations_online();
				
				status_animation 	= "on";
				end_on				= false;
			}
		}
	});
	
	$(".we-switch-boton-left,.text-offline").click(function(){
		
		if(status_animation=="on"){
			if(end_on==true){
				$(".we-switch").addClass("we-switch-off").removeClass("we-switch-on");
				$(".we-switch-boton").animate({"margin-left":0}).removeClass("we-switch-boton-on");
				$(".text-online").css({color:"#6f7980"});
				$(".text-offline").css({color:"#444a4e"});
		
				animations_offline();
				
				status_animation 	= "off";
				end_off				= false;
			}
		}
		
	});
	
	
	function animations_offline(){
		
		$(".animation-offline-one").fadeIn("fold",function(){
			$(".animation-offline-two").fadeIn("fold",function(){
				$(".animation-offline-three").fadeIn("fold",function(){
					$(".animation-offline-four").stop().animate({"margin-left":40,opacity:1},300,function(){
						$(this).css({'opacity':''}).removeClass("img-opacity");
						$(".copy-animation-offline-default h2").animate({opacity:1,"margin-left":0},function(){
							$(".copy-animation-offline-default p").animate({opacity:1,"margin-left":0});
							$(".animation-offline-five").fadeIn("fold",function(){
								$(".animation-offline-plus-one").stop().animate({"margin-left":25,opacity:1},300,function(){
									$(this).css({'opacity':''}).removeClass("img-opacity");
									$(".animation-offline-plus-two").stop().animate({"margin-left":198,opacity:1},300,function(){
										$(this).css({'opacity':''}).removeClass("img-opacity");
										$(".animation-offline-plus-three").stop().animate({"margin-left":355,opacity:1},300,function(){
											$(this).css({'opacity':''}).removeClass("img-opacity");
											$(".animation-offline-plus-four").stop().animate({"margin-left":335,opacity:1},300,function(){$(this).css({'opacity':''}).removeClass("img-opacity");});
											end_off = true;	
										});	
									});
								});
							});
						});
					});
				});
			});
		});
		
		
		$(".animation-online-one").fadeOut();
		$(".animation-online-two").fadeOut();
		$(".animation-online-three").fadeOut();
		$(".animation-online-four").animate({"opacity":0},function(){
			$(this).css({"margin-left":-200,}).addClass("img-opacity");
		});		
		$(".animation-online-five").fadeOut();
		$(".copy-animation-online h2").animate({opacity:0,"margin-left":300});
		$(".copy-animation-online p").animate({opacity:0,"margin-left":300});
		$(".animation-online-plus-one").animate({"opacity":0},function(){
			$(this).css({"margin-left":0,}).addClass("img-opacity");
		});		
		$(".animation-online-plus-two").animate({"opacity":0},function(){
			$(this).css({"margin-left":0,}).addClass("img-opacity");
		});	
		$(".animation-online-plus-three").animate({"opacity":0},function(){
			$(this).css({"margin-left":0,}).addClass("img-opacity");
		});	
	}
	
	function animations_online(){
		
		$(".animation-online-one").fadeIn("fold",function(){
			$(".animation-online-two").fadeIn("fold",function(){
				$(".animation-online-three").fadeIn("fold",function(){
					$(".animation-online-four").stop().animate({"margin-left":75,opacity:1},300,function(){
						$(this).css({'opacity':''}).removeClass("img-opacity");
						$(".copy-animation-online-default h2").animate({opacity:1,"margin-left":0},function(){
							$(".copy-animation-online-default p").animate({opacity:1,"margin-left":0});
							$(".animation-online-five").fadeIn("fold",function(){
								$(".animation-online-plus-one").stop().animate({"margin-left":168,opacity:1},300,function(){
									$(this).css({'opacity':''}).removeClass("img-opacity");
									$(".animation-online-plus-two").stop().animate({"margin-left":115,opacity:1},300,function(){
										$(".animation-online-plus-three").stop().animate({"margin-left":275,opacity:1},300);
										$(this).css({'opacity':''}).removeClass("img-opacity");
										end_on = true;
									});
								});
							});
						});
					});
				});
			});
		});
		
				
		$(".animation-offline-one").fadeOut();
		$(".animation-offline-two").fadeOut();
		$(".animation-offline-three").fadeOut();
		$(".animation-offline-four").animate({"opacity":0},function(){
			$(this).css({"margin-left":300,}).addClass("img-opacity");
		});	
		$(".animation-offline-five").fadeOut();
		$(".copy-animation-offline h2").animate({opacity:0,"margin-left":-300});
		$(".copy-animation-offline p").animate({opacity:0,"margin-left":-300});
		$(".animation-offline-plus-one").animate({"opacity":0},function(){
			$(this).css({"margin-left":200,"opacity":0}).addClass("img-opacity");
		});
		$(".animation-offline-plus-two").animate({"opacity":0},function(){
			$(this).css({"margin-left":500,"opacity":0}).addClass("img-opacity");
		});
		$(".animation-offline-plus-three").animate({"opacity":0},function(){
			$(this).css({"margin-left":600,"opacity":0}).addClass("img-opacity");
		});
		$(".animation-offline-plus-four").animate({"opacity":0},function(){
			$(this).css({"margin-left":700,"opacity":0}).addClass("img-opacity");
		});
		
	}
	
	
	/*
	Ocultar y mostrar div en el formulario de contacto
	-------------------------------------------------------------------------
	*/
	$(".contact-icon-write").click(function(){
		$(".container-share-info").css("overflow","hidden");
		$(".div-share").animate({top:459},500,function(){
			$(this).hide();
		});
	});
	
	$("#btn_cancelar").click(function(){
		$(".container-share-info").css("overflow","hidden");
		$(".div-share").show();
		$(".div-share").animate({top:0},500);
		$("#email").next("img").remove();
		$("#nombre").next("img").remove();
		$("#mensaje").next("img").remove();
	});
	
	
	/*
	Validación del formulario
	-------------------------------------------------------------------------
	*/
	
	function validarEmail(email) {
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!expr.test(email)){
			return false;
		}
		else{
			return true;
		}
	}
	
	$("#btn_enviar").click(function(){
		
		$(".container-share-info").css("overflow","visible");
		
		if($("#nombre").val().length ==0){
			$("#nombre").next("img").remove();
			$('<img src="images/error-icon.png" class="error-icon-validacion" alt="Nombre es obligatorio.">').insertAfter("#nombre");
		}
		if($("#mensaje").val().length ==0){
			$("#mensaje").next("img").remove();
			$('<img src="images/error-icon.png" class="error-icon-validacion" alt="El mensaje es obligatorio.">').insertAfter("#mensaje");
		}
		if($("#email").val().length ==0){
			$("#email").next("img").remove();
			$('<img src="images/error-icon.png" class="error-icon-validacion" alt="El email es obligatorio.">').insertAfter("#email");
		}
		else{
			if(!validarEmail($("#email").val())){
				$("#email").next("img").remove();
				$('<img src="images/error-icon.png" class="error-icon-validacion" alt="El email es inválido.">').insertAfter("#email");
			}
			else{
				$(".loading-form").show();
				$.ajax({
					url:"php/enviar_correo.php",
					type:"POST",
					dataType:"json",
					data:$("#form_contacto").serialize(),
					success:function(respuesta){
						$(".loading-form").hide();
						if(respuesta["respuesta"]=="success"){
							$(".txt_form").val("");
							$("#mensaje").val("");
							$("#inline1").html("<img src='images/the-idea-bakery.jpg'>"+respuesta["mensaje"])
							$("#msje_form").trigger("click");
							$("#email").next("img").remove();
							$("#nombre").next("img").remove();
							$("#mensaje").next("img").remove();
						}
						else{
							$("#inline1").html(respuesta["mensaje"])
							$("#msje_form").trigger("click");
						}
					}
				});
			}
		}
			
		
	});
	
	
	$("#form_contacto").on("mouseenter",".error-icon-validacion",function(){
		$(this).prev("span").remove();
		$("<span class='tolp-tip-validacion'>"+$(this).attr("alt")+"</span>").insertBefore(this);
	}).on("mouseleave",".error-icon-validacion",function(){
		$(this).prev("span").remove();
	});
	
	$(".style_inputs").keypress(function(){
		$(this).next("img").remove();
	});

	
	/*
	Modal para mostrar los mensajes de form
	-------------------------------------------------------------------------
	*/
	$("#msje_form").fancybox({
		'titlePosition'		: 'inside',
		'transitionIn'		: 'none',
		'transitionOut'		: 'none'
	});
	
	/*
	Scroll en la página
	-------------------------------------------------------------------------
	*/
	var animation_scroll = 0;
	
	$(window).scroll(function(){
		if ($(this).scrollTop() >= 555){
			$("#slide-conteiner-menu").stop().animate({"top":0},200);
		}
		else{
			$("#slide-conteiner-menu").stop().animate({"top":-109},200);
		}
		
		if ($(this).scrollTop() >= 990){
			if(animation_scroll==0){
				animations_offline();
				
				status_animation 	= "off";
				end_off				= false;
				animation_scroll 	= 1;
			}
		}
	});
	
	
	/*
	Clicl sobre los items del menú
	-------------------------------------------------------------------------
	*/

	$("#container-menu-interna ul li").click(function(){
		var item_menu = $(this).attr("id"),focalizar = 0;

		if(item_menu=="quienes_somos"){
			 focalizar = $("#corporate").position().top;
		}
		if(item_menu=="servicios"){
			 focalizar = $("#corporate").position().top + 430;
		}
		if(item_menu=="contacto"){
			 focalizar = $("#container-contact").position().top;
		}
		
		$('html,body').animate({scrollTop: focalizar - 100}, 1000,"jswing");
	});
	
	$(".logo").click(function(){
		$('html,body').animate({scrollTop:0}, 1000,"jswing");
	});
	
	
	/*
	Girar los circulos de la animación de servicios
	*/
	$(".animation-offline-plus,.animation-online-plus").rotate({ 
	   bind: 
		 { 
			mouseover : function() { 
				$(this).rotate({animateTo:180})
			},
			mouseout : function() { 
				$(this).rotate({animateTo:0})
			}
		 } 
	   
	});
	
	/*
	Mostrar los tooltips
	------------------------------------------------------------
	*/
	$(".animation-offline-plus").mouseenter(function(){
		if($(this).css("opacity")==1){
			switch ($(this).attr("id")){
				case "plus-one":
					$(".tooltip-offline-plus-one").show();
				break;
				case "plus-two":
					$(".tooltip-offline-plus-two").show();
				break;
				case "plus-three":
					$(".tooltip-offline-plus-three").show();
				break;
				case "plus-four":
					$(".tooltip-offline-plus-four").show();
				break;
			}
		}
	}).mouseleave(function(){
       switch ($(this).attr("id")){
			case "plus-one":
				$(".tooltip-offline-plus-one").hide();
			break;
			case "plus-two":
				$(".tooltip-offline-plus-two").hide();
			break;
			case "plus-three":
				$(".tooltip-offline-plus-three").hide();
			break;
			case "plus-four":
				$(".tooltip-offline-plus-four").hide();
			break;
		} 
    });
	
	
	$(".animation-online-plus").mouseenter(function(){
		if($(this).css("opacity")==1){
			switch ($(this).attr("id")){
				case "plus-online-one":
					$(".tooltip-online-plus-one").show();
				break;
				case "plus-online-two":
					$(".tooltip-online-plus-two").show();
				break;
				case "plus-online-three":
					$(".tooltip-online-plus-three").show();
				break;
			}
		}
	}).mouseleave(function(){
       switch ($(this).attr("id")){
			case "plus-online-one":
				$(".tooltip-online-plus-one").hide();
			break;
			case "plus-online-two":
				$(".tooltip-online-plus-two").hide();
			break;
			case "plus-online-three":
				$(".tooltip-online-plus-three").hide();
			break;
		} 
    });
	
	/*
	Mostrar descripciones de cada item redondo
	------------------------------------------------------------
	*/
	$(".animation-offline-plus").click(function(){
		if($(this).css("opacity")==1){
			switch ($(this).attr("id")){
				case "plus-one":
					$(".copy-animation-offline-one h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-offline-one p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-offline-one").siblings(".copy-animation-offline").children("h2").animate({opacity:0,"margin-left":-300});
					$(".copy-animation-offline-one").siblings(".copy-animation-offline").children("p").animate({opacity:0,"margin-left":-300});
				break;
				case "plus-two":
					$(".copy-animation-offline-two h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-offline-two p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-offline-two").siblings(".copy-animation-offline").children("h2").animate({opacity:0,"margin-left":-300});
					$(".copy-animation-offline-two").siblings(".copy-animation-offline").children("p").animate({opacity:0,"margin-left":-300});
				break;
				case "plus-three":
					$(".copy-animation-offline-three h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-offline-three p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-offline-three").siblings(".copy-animation-offline").children("h2").animate({opacity:0,"margin-left":-300});
					$(".copy-animation-offline-three").siblings(".copy-animation-offline").children("p").animate({opacity:0,"margin-left":-300});
				break;
				case "plus-four":
					$(".copy-animation-offline-four h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-offline-four p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-offline-four").siblings(".copy-animation-offline").children("h2").animate({opacity:0,"margin-left":-300});
					$(".copy-animation-offline-four").siblings(".copy-animation-offline").children("p").animate({opacity:0,"margin-left":-300});
				break;
			}
		}
	});
	
	$(".animation-online-plus").click(function(){
		if($(this).css("opacity")==1){
			switch ($(this).attr("id")){
				case "plus-online-one":
					$(".copy-animation-online-one h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-online-one p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-online-one").siblings(".copy-animation-online").children("h2").animate({opacity:0,"margin-left":300});
					$(".copy-animation-online-one").siblings(".copy-animation-online").children("p").animate({opacity:0,"margin-left":300});
				break;
				case "plus-online-two":
					$(".copy-animation-online-two h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-online-two p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-online-two").siblings(".copy-animation-online").children("h2").animate({opacity:0,"margin-left":300});
					$(".copy-animation-online-two").siblings(".copy-animation-online").children("p").animate({opacity:0,"margin-left":300});
				break;
				case "plus-online-three":
					$(".copy-animation-online-three h2").animate({opacity:1,"margin-left":0},function(){
						$(".copy-animation-online-three p").animate({opacity:1,"margin-left":0});
					});
					
					$(".copy-animation-online-three").siblings(".copy-animation-online").children("h2").animate({opacity:0,"margin-left":300});
					$(".copy-animation-online-three").siblings(".copy-animation-online").children("p").animate({opacity:0,"margin-left":300});
				break;
			}
		}
	});
	
});

$(window).load(function(){
	
	$("#div-container-loading").fadeOut(1000,function(){
		setTimeout(function(){
			$("body,html").css("overflow","auto");
			init();
		},100);
	});

	
	function init(){
		$(".bg-one").animate({opacity:1});
		
		$("#slide-1 .copy-slide").animate({"margin-left":500,opacity:1},1000);
		$("#slide-1 .img-slide").animate({"margin-left":100,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
	
		var slide = 2;
		setInterval(function(){
			switch (slide){
				case 1:
					$("#slide-5 .img-slide").animate({"margin-left":400,opacity:0},1000);
					$("#slide-5 .copy-slide").animate({"margin-left":180,opacity:0},1000,function(){$(this).css({'opacity':'0'}).addClass("img-opacity")});
					
					$("#slide-1 .copy-slide").animate({"margin-left":500,opacity:1},1000);
					$("#slide-1 .img-slide").animate({"margin-left":100,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
					
					$(".bg-five").animate({opacity:0},1000);
					$(".bg-one").animate({opacity:1},1000);
				break;
				case 2:
					$("#slide-1 .copy-slide").animate({"margin-left":400,opacity:0},1000);
					$("#slide-1 .img-slide").animate({"margin-left":200,opacity:0},1000,function(){$(this).css({'opacity':'0'}).addClass("img-opacity")});
					
					$("#slide-2 .copy-slide").animate({"margin-left":0,opacity:1},1000);
					$("#slide-2 .img-slide").animate({"margin-left":590,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
					
					$(".bg-one").animate({opacity:0},1000);
					$(".bg-two").animate({opacity:1},1000);
				break;
				case 3:
					$("#slide-2 .copy-slide").animate({"margin-left":100,opacity:0},1000);
					$("#slide-2 .img-slide").animate({"margin-left":350,opacity:0},1000,function(){$(this).css({'opacity':'0'}).addClass("img-opacity")});
					
					$("#slide-3 .copy-slide").animate({"margin-left":500,opacity:1},1000);
					$("#slide-3 .img-slide").animate({"margin-left":0,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
					
					$(".bg-two").animate({opacity:0},1000);
					$(".bg-three").animate({opacity:1},1000);
				break;
				case 4:
					$("#slide-3 .copy-slide").animate({"margin-left":400,opacity:0},1000);
					$("#slide-3 .img-slide").animate({"margin-left":100,opacity:0},1000,function(){$(this).css({'opacity':'0'}).addClass("img-opacity")});
					
					$("#slide-4 .copy-slide").animate({"margin-left":500,opacity:1},1000);
					$("#slide-4 .img-slide").animate({"margin-left":0,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
					
					$(".bg-three").animate({opacity:0},1000);
					$(".bg-four").animate({opacity:1},1000);
				break;
				case 5:
					$("#slide-4 .copy-slide").animate({"margin-left":400,opacity:0},1000);
					$("#slide-4 .img-slide").animate({"margin-left":100,opacity:0},1000,function(){$(this).css({'opacity':'0'}).addClass("img-opacity")});
					
					$("#slide-5 .copy-slide").animate({"margin-left":500,opacity:1},1000);
					$("#slide-5 .img-slide").animate({"margin-left":80,opacity:1},1000,function(){$(this).css({'opacity':''}).removeClass("img-opacity")});
					
					$(".bg-four").animate({opacity:0},1000);
					$(".bg-five").animate({opacity:1},1000);
					
					slide = 0;
				break;
			}
		
		slide++;	
			
		},5000);
	}
});