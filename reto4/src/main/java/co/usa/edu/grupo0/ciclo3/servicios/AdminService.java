/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

import co.usa.edu.grupo0.ciclo3.modelo.Admin;
import co.usa.edu.grupo0.ciclo3.repositorio.AdminRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author EUSEBIO
 */
@Service
public class AdminService {
    
    @Autowired
    private AdminRepository crudAdmin;
    
    public List<Admin> getAll(){
        return crudAdmin.getAll();
    }
     public Admin getAdmin(int idAdmin){
        Optional<Admin> auxadmin= crudAdmin.getAdmin(idAdmin);
        return auxadmin.orElse(new Admin());
    }
    public Admin save(Admin admin){
        return crudAdmin.save(admin);
    }
    
    public Admin update(Admin admin){
        if(admin.getIdAdmin()!=null){
            Optional<Admin> e= crudAdmin.getAdmin(admin.getIdAdmin());
            if(!e.isEmpty()){
                if(admin.getName()!=null){
                    e.get().setName(admin.getName());
                }
                if(admin.getPassword()!=null){
                    e.get().setPassword(admin.getPassword());
                }
                crudAdmin.save(e.get());
                return e.get();
            }else{
                return admin;
            }
        }else{
            return admin;
        }
    }
    
    public boolean deleteAdmin(int adminId) {
        Boolean aBoolean = getAdmin(adminId).map(admin -> {
            crudAdmin.delete(admin);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
