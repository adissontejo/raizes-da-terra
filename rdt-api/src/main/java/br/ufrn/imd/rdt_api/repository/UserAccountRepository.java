package br.ufrn.imd.rdt_api.repository;

import br.ufrn.imd.rdt_api.entity.user.UserAccount;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAccountRepository extends JpaRepository<UserAccount, Long> {
}

