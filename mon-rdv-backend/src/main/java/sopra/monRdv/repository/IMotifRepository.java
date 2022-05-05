package sopra.monRdv.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.monRdv.model.Motif;

public interface IMotifRepository extends JpaRepository<Motif, Long>{
	
	public List<Motif> findByPraticienId(Long id);

}
