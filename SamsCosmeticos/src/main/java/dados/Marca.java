package dados;

import javax.persistence.Entity;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntity;

@Entity
@Table(name = "marca")
public class Marca extends PanacheEntity{
	private String nomeMarca;
	private String descricaoMarca;
	
	
	public String getNomeMarca() {
		return nomeMarca;
	}
	public void setNomeMarca(String nomeMarca) {
		this.nomeMarca = nomeMarca;
	}
	public String getDescricaoMarca() {
		return descricaoMarca;
	}
	public void setDescricaoMarca(String descricaoMarca) {
		this.descricaoMarca = descricaoMarca;
	}
	
}
