package lk.mrt.softclicker.modules.answer;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends PagingAndSortingRepository<Answer, Long> {

	List<Answer> findAllByQuectionIdAndAnswer(@Param("q") Long id, @Param("a") String rightAnswer);

	List<Answer> findAllByQuectionId(@Param("q") Long id);

}
