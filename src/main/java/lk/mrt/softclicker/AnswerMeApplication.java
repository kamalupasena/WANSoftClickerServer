package lk.mrt.softclicker;

import lk.mrt.softclicker.udp.BroadcastingClient;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AnswerMeApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnswerMeApplication.class, args);
		BroadcastingClient.main(args);
	}
}
