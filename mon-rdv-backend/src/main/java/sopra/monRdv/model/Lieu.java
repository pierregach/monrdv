package sopra.monRdv.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;


@Entity
public class Lieu {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	
	@Version
	//@JsonView(Views.ViewCommon.class)
	private int version;
	
	@Column(length = 100)
	@JsonView(Views.ViewCommon.class)
	private String nom;
	
	@JsonView(Views.ViewCommon.class)
	private boolean virtuel;
	
	@Embedded
	@JsonView(Views.ViewCommon.class)
	private Adresse adr;
	
	@ManyToOne
	@JoinColumn(name = "praticien_id")
//	@JsonView(Views.ViewCommon.class)
	private Praticien praticien;
	
	@OneToMany(mappedBy = "lieu")
//	@JsonView(Views.ViewCommon.class)
	private List<Creneau> creneaux = new ArrayList<Creneau>();

	public Lieu() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public boolean isVirtuel() {
		return virtuel;
	}

	public void setVirtuel(boolean virtuel) {
		this.virtuel = virtuel;
	}

	public Adresse getAdr() {
		return adr;
	}

	public void setAdr(Adresse adr) {
		this.adr = adr;
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public List<Creneau> getCreneaux() {
		return creneaux;
	}

	public void setCreneaux(List<Creneau> creneaux) {
		this.creneaux = creneaux;
	}

}
