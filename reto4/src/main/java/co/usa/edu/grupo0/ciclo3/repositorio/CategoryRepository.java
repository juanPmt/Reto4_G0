/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.repositorio;

import co.usa.edu.grupo0.ciclo3.modelo.Category;
import co.usa.edu.grupo0.ciclo3.repositorio.cruds.CategoryCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author EUSEBIO
 */
@Repository
public class CategoryRepository {
    
    @Autowired
    private CategoryCrudRepository crudCategory;
    
    
    public List<Category> getAll(){
    return (List<Category>) crudCategory.findAll();
}
    
   public Optional<Category> getCategory(int id){
        return crudCategory.findById(id);
    }

    public Category save(Category category){
        return crudCategory.save(category);
    }
    public void delete(Category category){
       crudCategory.delete(category);
    }
}
