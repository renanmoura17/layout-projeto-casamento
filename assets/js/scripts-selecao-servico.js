


jQuery(document).ready(function() {

	/*
		Função para controle das divListas relacionadas à seleção do tipo de serviço
	*/
	
	$('input[id="checkboxEspaco"], input[id="checkboxSom"], input[id="checkboxVestimenta"], input[id="checkboxImagem"], input[id="checkboxBuffet"], input[id="checkboxCerimonialista"]').change(function() {
	
		/* checkbox - Serviço de Espaço */
	   if($(this).attr('id') == 'checkboxEspaco') {
		   if($(this).is(":checked")) {
				$('#divListaEspaco').show(500);
		   } else {
				$('#divListaEspaco').hide(500);
		   }
	   }
	   
	   /* checkbox - Serviço de Som */
	   if($(this).attr('id') == 'checkboxSom') {
		   if($(this).is(":checked")) {
				$('#divListaSom').show(500);
		   } else {
				$('#divListaSom').hide(500);
		   }       
	   } 
	   
	   /* checkbox - Serviço de Vestimenta */
	   if($(this).attr('id') == 'checkboxVestimenta') {
		   if($(this).is(":checked")) {
				$('#divListaVestimenta').show(500);
		   } else {
				$('#divListaVestimenta').hide(500);
		   }          
	   } 
	   
	   /* checkbox - Serviço de Imagem */
	   if($(this).attr('id') == 'checkboxImagem') {
		   if($(this).is(":checked")) {
				$('#divListaImagem').show(500);
		   } else {
				$('#divListaImagem').hide(500);
		   }        
	   } 
	   
	   /* checkbox - Serviço de Buffet */
	   if($(this).attr('id') == 'checkboxBuffet') {
		   if($(this).is(":checked")) {
				$('#divListaBuffet').show(500);
		   } else {
				$('#divListaBuffet').hide(500);
		   }          
	   } 
	   
	   /* checkbox - Serviço de Cerimonialista */
	   if($(this).attr('id') == 'checkboxCerimonialista') {
		   if($(this).is(":checked")) {
				$('#divListaCerimonialista').show(500);
		   } else {
				$('#divListaCerimonialista').hide(500);
		   }
	   } 
	   
	});
	
});