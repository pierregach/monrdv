package sopra.monRdv.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.monRdv.model.Creneau;

public interface ICreneauRepository extends JpaRepository<Creneau, Long>{
	
	public List<Creneau> findByPraticienId(Long id);

}
