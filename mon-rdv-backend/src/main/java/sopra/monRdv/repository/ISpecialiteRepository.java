package sopra.monRdv.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import sopra.monRdv.model.Specialite;

public interface ISpecialiteRepository extends JpaRepository<Specialite, Long> {
	

}
