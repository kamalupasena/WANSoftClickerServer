package lk.mrt.softclicker.modules.quection;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface QuectionRepository extends PagingAndSortingRepository<Quection, Long> {

	List<Quection> findAllByActive(@Param("a") boolean active);

}
