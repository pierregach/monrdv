package sopra.monRdv.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.monRdv.model.PraticienSpecialite;

public interface IPraticienSpecialiteRepository extends JpaRepository<PraticienSpecialite, Long> {
	
	public List<PraticienSpecialite> findByPraticienId(Long id);

}
