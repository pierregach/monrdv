package sopra.monRdv.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
@Table(name = "praticien_specialite", uniqueConstraints = @UniqueConstraint(columnNames = { "praticien_id",
		"specialite_id" }))
public class PraticienSpecialite {
	@Id
	@GeneratedValue
	@JsonView(Views.ViewCommon.class)
	private Long id;
	

	//@JsonView(Views.ViewCommon.class)
	@Version
	private int version;

	@ManyToOne
	@JoinColumn(name = "praticien_id")
	@JsonView(Views.ViewCommon.class)
	private Praticien praticien;
	
	@ManyToOne
	@JoinColumn(name = "specialite_id")
	@JsonView(Views.ViewCommon.class)
	private Specialite specialite;

	public PraticienSpecialite() {
		super();
	}

	public Praticien getPraticien() {
		return praticien;
	}

	public void setPraticien(Praticien praticien) {
		this.praticien = praticien;
	}

	public Specialite getSpecialite() {
		return specialite;
	}

	public void setSpecialite(Specialite specialite) {
		this.specialite = specialite;
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

}
