package lk.mrt.softclicker.modules.quection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Quection {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String question;

	private String answer1;

	private String answer2;

	private String answer3;

	private String answer4;

	private String rightAnswer;

	private Boolean active;

}
