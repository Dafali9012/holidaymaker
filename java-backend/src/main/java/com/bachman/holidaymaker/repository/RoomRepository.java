package com.bachman.holidaymaker.repository;

        import com.bachman.holidaymaker.entity.Room;
        import org.springframework.data.repository.CrudRepository;
        import org.springframework.stereotype.Repository;

@Repository
public interface RoomRepository extends CrudRepository<Room, Long> {

}

