/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.repositorio;

import co.usa.edu.grupo0.ciclo3.modelo.Admin;
import co.usa.edu.grupo0.ciclo3.repositorio.cruds.AdminCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author EUSEBIO
 */
@Repository
public class AdminRepository {

    @Autowired
    private AdminCrudRepository crudAdmin;

    public List<Admin> getAll() {
        return (List<Admin>) crudAdmin.findAll();
    }

    public Optional<Admin> getAdmin(int idAdmin) {
        return crudAdmin.findById(idAdmin);
    }

    public Admin save(Admin admin) {
        return crudAdmin.save(admin);
    }
    
    public void delete(Admin admin){
        crudAdmin.delete(admin);
    }

}