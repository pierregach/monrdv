package sopra.monRdv.rest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import sopra.monRdv.model.PraticienSpecialite;
import sopra.monRdv.model.Specialite;
import sopra.monRdv.model.Views;
import sopra.monRdv.repository.IPraticienSpecialiteRepository;
import sopra.monRdv.repository.ISpecialiteRepository;

@RestController
@RequestMapping("/specialite")
@CrossOrigin("*")
public class SpecialiteRestController {

	@Autowired
	private ISpecialiteRepository specialiteRepo;
	@Autowired
	private IPraticienSpecialiteRepository pratspecRepo;

	@GetMapping("")
	public List<Specialite> findAll() {
		return specialiteRepo.findAll();
	}

	@GetMapping("/{id}")
	public Specialite find(@PathVariable Long id) {

		Optional<Specialite> optSpecialite = specialiteRepo.findById(id);

		if (optSpecialite.isPresent()) {
			return optSpecialite.get();
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}
	
	@GetMapping("/praticien/{id}")
	@JsonView(Views.ViewCommon.class)
	public List<Specialite> findByPraticienId(@PathVariable Long id) {

		List<Specialite> liste = new ArrayList<>();
		
		pratspecRepo.findByPraticienId(id).forEach(ps -> liste.add(ps.getSpecialite()));

		if (!liste.isEmpty()) {
			return liste;
		} else {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}
	}

	@PostMapping("")
	public Specialite create(@RequestBody Specialite specialite) {
		specialite = specialiteRepo.save(specialite);

		return specialite;
	}

	@PutMapping("/{id}")
	public Specialite update(@RequestBody Specialite specialite, @PathVariable Long id) {
		if (!specialiteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		specialite = specialiteRepo.save(specialite);

		return specialite;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Long id) {
		if (!specialiteRepo.existsById(id)) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Unable to find resource");
		}

		specialiteRepo.deleteById(id);
	}
}
