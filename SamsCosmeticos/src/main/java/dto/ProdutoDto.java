package dto;

public class ProdutoDto {
	
	private String tituloProduto;
	private String subTituloProduto;
	private Double preco;
	private String descricao;
	private String foto;
	private String categoria;
	private String marca;
	private Integer quantidade;
	private String linha;
	
	
	
	public String getTituloProduto() {
		return tituloProduto;
	}
	public void setTituloProduto(String tituloProduto) {
		this.tituloProduto = tituloProduto;
	}

	public String getSubTituloProduto() {
		return subTituloProduto;
	}

	public void setSubTituloProduto(String subTituloProduto) {
		this.subTituloProduto = subTituloProduto;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	public String getCategoria() {
		return categoria;
	}

	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Integer getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	public String getLinha() {
		return linha;
	}

	public void setLinha(String linha) {
		this.linha = linha;
	}
}
