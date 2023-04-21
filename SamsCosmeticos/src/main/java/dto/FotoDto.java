package dto;

import javax.enterprise.context.ApplicationScoped;

import dados.Foto;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

@ApplicationScoped
public class FotoDto implements PanacheRepository<Foto>{
	
}
