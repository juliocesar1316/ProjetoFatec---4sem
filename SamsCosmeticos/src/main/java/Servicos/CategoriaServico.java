package Servicos;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Categoria;
import dto.CategoriaDto;

@ApplicationScoped
public class CategoriaServico {
	
	public List<Categoria> listCategoria(){
		return Categoria.listAll();
	}

	@Transactional
	public Categoria cadastroCategoria(CategoriaDto categoriaDto) {
		Categoria categoria = new Categoria();
		
		categoria.setNomeCategoria(categoriaDto.getNomeCategoria());
		categoria.setDescricaoCategoria(categoriaDto.getDescricaoCategoria());
		categoria.persist();
		
		return categoria;
	}
}
