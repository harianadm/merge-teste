export default {
	frente: "",
	direita: "",
	esquerda: "",
	atualizaFrente (url) {
		ImagemLocal.frente = LinkUrl.url_App_Smith + url ; 
	},
	atualizaDireita (url) {
		ImagemLocal.direita = LinkUrl.url_App_Smith + url;
	},
	atualizaEsquerda (url) {
		ImagemLocal.esquerda = LinkUrl.url_App_Smith + url;
	},
	
	ImagemTabelaFrente () {
		ImagemLocal.frente = LinkUrl.url_App_Smith + Table1.triggeredRow.Foto_frente.formats.thumbnail.url
	},
	ImagemTabelaDireita () {
		ImagemLocal.direita = LinkUrl.url_App_Smith + Table1.triggeredRow.Foto_direita.formats.thumbnail.url
	},
	ImagemTabelaEsquerda () {
		ImagemLocal.esquerda = LinkUrl.url_App_Smith + Table1.triggeredRow.Foto_esquerda.formats.thumbnail.url
	}

}

frente: ""