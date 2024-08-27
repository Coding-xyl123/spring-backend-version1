package com.backend.spring.dao;

import com.backend.spring.entity.Role;

public interface RoleDao {

	public Role findRoleByName(String theRoleName);
	
}
