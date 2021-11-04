/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

import co.usa.edu.grupo0.ciclo3.modelo.Category;
import co.usa.edu.grupo0.ciclo3.repositorio.CategoryRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Eusebio
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryCrud;

    public List<Category> getAll() {
        return categoryCrud.getAll();
    }

    public Optional<Category> getCategory(int categoryId) {
        return categoryCrud.getCategory(categoryId);
    }

    public Category save(Category category) {

        if (category.getId() == null) {
            return categoryCrud.save(category);
        } else {
            Optional<Category> g = categoryCrud.getCategory(category.getId());
            if (g.isEmpty()) {
                return categoryCrud.save(category);

            } else {
                return category;
            }
        }
    }
    
    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category>g=categoryCrud.getCategory(category.getId());
            if(!g.isEmpty()){
                if(category.getDescription()!=null){
                    g.get().setDescription(category.getDescription());
                }
                if(category.getName()!=null){
                    g.get().setName(category.getName());
                }
                return categoryCrud.save(g.get());
            }
        }
        return category;
    }
    public boolean deletecategory(int categoryId){
        Boolean d=getCategory(categoryId).map(category -> {
            categoryCrud.delete(category);
            return true;
        }).orElse(false);
        return d;
    }

}
