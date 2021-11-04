/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

import co.usa.edu.grupo0.ciclo3.modelo.Message;
import co.usa.edu.grupo0.ciclo3.repositorio.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author EUSEBIO
 */
@Service
public class MessageService {

    @Autowired
    private MessageRepository messageCrud;

    public List<Message> getAll() {
        return messageCrud.getAll();
    }

    public Optional<Message> getMessage(int messageId) {
        return messageCrud.getMessage(messageId);
    }

    public Message save(Message message) {

        if (message.getIdMessage() == null) {
            return messageCrud.save(message);
        } else {
            Optional<Message> m = messageCrud.getMessage(message.getIdMessage());
            if (m.isEmpty()) {
                return messageCrud.save(message);

            } else {
                return message;
            }
        }
    }
    public Message update(Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> e= messageCrud.getMessage(message.getIdMessage());
            if(!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                messageCrud.save(e.get());
                return e.get();
            }else{
                return message;
            }
        }else{
            return message;
        }
    }
    public boolean deleteMessage(int idMessage) {
        Boolean aBoolean = getMessage(idMessage).map(message -> {
            messageCrud.deleteMessage(idMessage);
            return true;
        }).orElse(false);
        return aBoolean;
    }
}
