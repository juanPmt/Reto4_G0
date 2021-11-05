/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

import co.usa.edu.grupo0.ciclo3.modelo.Computer;
import co.usa.edu.grupo0.ciclo3.repositorio.ComputerRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author EUSEBIO
 */
@Service
public class ComputerService {

    @Autowired
    private ComputerRepository computerCrud;

    public List<Computer> getAll() {
        return computerCrud.getAll();
    }

    public Optional <Computer>getComputer(int ComputerId) {
        return computerCrud.getComputer(ComputerId);
    }

    public Computer save(Computer computer) {

        if (computer.getId() == null) {
            return computerCrud.save(computer);
        } else {
            Optional<Computer> e = computerCrud.getComputer(computer.getId());
            if (!e.isPresent()) {
                return computerCrud.save(computer);

            } else {
                return computer;
            }
        }
    }
        public Computer update(Computer computer){
        if(computer.getId()!=null){
            Optional<Computer> e=computerCrud.getComputer(computer.getId());
            if(e.isPresent()){
                if(computer.getName()!=null){
                    e.get().setName(computer.getName());
                }
                if(computer.getBrand()!=null){
                    e.get().setBrand(computer.getBrand());
                }
                if(computer.getYear()!=null){
                    e.get().setYear(computer.getYear());
                }
                if(computer.getDescription()!=null){
                    e.get().setDescription(computer.getDescription());
                }
                if(computer.getCategory()!=null){
                    e.get().setCategory(computer.getCategory());
                }
                computerCrud.save(e.get());
                return e.get();
            }else{
                return computer;
            }
        }else{
            return computer;
        }
    }
    
    public boolean deleteComputer(int ComputerId) {
        Boolean aBoolean = getComputer(ComputerId).map(bike -> {
            computerCrud.delete(bike);
            return true;
        }).orElse(false);
        return aBoolean;
    }

}   
