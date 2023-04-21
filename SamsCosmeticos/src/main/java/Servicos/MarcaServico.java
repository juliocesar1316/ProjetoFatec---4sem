package Servicos;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;

import dados.Marca;
import dto.MarcaDto;

@ApplicationScoped
public class MarcaServico {
	public List<Marca> listMarca(){
		return Marca.listAll();
	}

	@Transactional
	public Marca cadastroMarca(MarcaDto marcaDto) {
		Marca marca= new Marca();
		
		marca.setNomeMarca(marcaDto.getNomeMarca());
		marca.setDescricaoMarca(marcaDto.getDescricaoMarca());
		marca.persist();
		
		return marca;
	}
}
