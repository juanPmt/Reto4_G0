/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.repositorio;

import co.usa.edu.grupo0.ciclo3.modelo.Computer;
import co.usa.edu.grupo0.ciclo3.repositorio.cruds.ComputerCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author EUSEBIO
 */
@Repository
public class ComputerRepository {

    @Autowired
    private ComputerCrudRepository crudComputer;

    public List<Computer> getAll(){
        return (List<Computer>) crudComputer.findAll();
    }

    public Optional<Computer> getComputer(int id) {
        return crudComputer.findById(id);
    }
    public Computer save(Computer computer){
        return crudComputer.save(computer);
    }  
   
    public void delete(Computer computer){
        crudComputer.delete(computer);
    }
    
    
}