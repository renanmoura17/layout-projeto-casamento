
jQuery(document).ready(function() {

	/*
		Função para controle das divs relacionadas à seleção do tipo de serviço
	*/
	
	$('input[id="radioEspaco"], input[id="radioSom"], input[id="radioVestimenta"], input[id="radioImagem"], input[id="radioBuffet"], input[id="radioCerimonialista"]').change(function() {
	
		/* Radio - Serviço de Espaço */
	   if($(this).attr('id') == 'radioEspaco') {
			$('#divEspaco').show(500);           
	   } else {
			$('#divEspaco').hide(500);   
	   }
	   
	   /* Radio - Serviço de Som */
	   if($(this).attr('id') == 'radioSom') {
			$('#divSom').show(500);           
	   } else {
			$('#divSom').hide(500);   
	   }
	   
	   /* Radio - Serviço de Vestimenta */
	   if($(this).attr('id') == 'radioVestimenta') {
			$('#divVestimenta').show(500);           
	   } else {
			$('#divVestimenta').hide(500);   
	   }
	   
	   /* Radio - Serviço de Imagem */
	   if($(this).attr('id') == 'radioImagem') {
			$('#divImagem').show(500);           
	   } else {
			$('#divImagem').hide(500);   
	   }
	   
	   /* Radio - Serviço de Buffet */
	   if($(this).attr('id') == 'radioBuffet') {
			$('#divBuffet').show(500);           
	   } else {
			$('#divBuffet').hide(500);   
	   }
	   
	   /* Radio - Serviço de Cerimonialista */
	   if($(this).attr('id') == 'radioCerimonialista') {
			$('#divCerimonialista').show(500);           
	   } else {
			$('#divCerimonialista').hide(500);   
	   }
	   
	});
	
});