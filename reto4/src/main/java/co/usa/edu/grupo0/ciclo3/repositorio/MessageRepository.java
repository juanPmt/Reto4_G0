/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.repositorio;

import co.usa.edu.grupo0.ciclo3.modelo.Message;
import co.usa.edu.grupo0.ciclo3.repositorio.cruds.MessageCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author EUSEBIO
 */

@Repository
public class MessageRepository {
    
    @Autowired
    private MessageCrudRepository messageCrud;
    
    public List<Message> getAll(){
        return (List<Message>) messageCrud.findAll();
    }
    
    public Optional<Message> getMessage(int id){
        return messageCrud.findById(id);
    }
    
    public Message save(Message message){
        return messageCrud.save(message);
    }
    public boolean deleteMessage(int messageId) {
        Boolean aBoolean = getMessage(messageId).map(message -> {
            messageCrud.delete(message);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
}
