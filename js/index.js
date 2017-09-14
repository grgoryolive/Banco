$(document).ready(function(){
	function List(capacity){
		var clientes = [];
		if(capacity != null){
			clientes[capacity];
		}
	}
	function List(capacity){
		var cpf = [];
		if(capacity != null){
			cpf[capacity];
		}
	}

	$("#botao_cadastro").click(function(){
		var nomede = $("#nome_cliente")
		this.Add = function (nomede) {
    clientes[clientes.length] = nomede;
		}
		var cpfde = $("#cpf_cliente")
		this.Add = function (cpfde) {
    clientes[clientes.length] = cpfde;
		}

	})


})
