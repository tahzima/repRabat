package com.example.demo.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Beans.User;
import com.example.demo.Dao.UserDao;


@Service
public class UserService {

	@Autowired
	UserDao userDao;
	
	public Boolean create (User user) {
		
		Boolean test=false;
		
		if(userDao.save(user)!=null) {
			test=true;
		}
		
		return test;
	}
	
	public Boolean update (User user) {

		Boolean test=false;
		
		if(this.findById(user.getId()) != null) {	
			userDao.save(user);
			test=true;
		}
		
		return test;
	}
	
	public Boolean delete (Long id) {

		Boolean test=false;
		
		if(this.findById(id) != null) {		
			userDao.deleteById(id);
			test=true;
		}
		
		return test;
	}
	
	public User findById(Long id) {
		return userDao.getById(id);
	}
	
	public List<User> findAll() {
		return userDao.findAll();
	}

	public User findByEmail(String email){
		return userDao.findByEmail(email);
	}
	
	/*public User findByPassword(String password){
		return userDao.findByPassword(password);
	}*/
	
	public User auth(String email, String password) {
		
		User myUser = new User();
		
		if(this.findByEmail(email)!=null) {
			myUser=this.findByEmail(email);
			if(myUser.getPassword().equals(password)) {
				myUser=this.findById(myUser.getId());
			}else {
				myUser=new User();
			}
		}else {
			myUser=new User();
		}
		
		return myUser;
	}
}
