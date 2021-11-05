/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

import co.usa.edu.grupo0.ciclo3.modelo.Client;
import co.usa.edu.grupo0.ciclo3.repositorio.ClientRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


/**
 *
 * @author July
 */

@Service
public class ClientService {
    
    @Autowired
    private ClientRepository clientCrud;
    
    public List<Client> getAll(){
        return clientCrud.getAll();
    }
    
    public Optional<Client> getClient(int clientId) {
        return clientCrud.getClient(clientId);
    }
    
    public Client save(Client client){
        if(client.getIdClient()==null){
            return clientCrud.save(client);
        }else{
            Optional<Client> e= clientCrud.getClient(client.getIdClient());
            if(!e.isPresent()){
                return clientCrud.save(client);
            }else{
                return client;
            }
        }
    }
    
    public Client update(Client client){
        if(client.getIdClient()!=null){
            Optional<Client> e= clientCrud.getClient(client.getIdClient());
            if(e.isPresent()){
                if(client.getName()!=null){
                    e.get().setName(client.getName());
                }
                if(client.getAge()!=null){
                    e.get().setAge(client.getAge());
                }
                if(client.getPassword()!=null){
                    e.get().setPassword(client.getPassword());
                }
                clientCrud.save(e.get());
                return e.get();
            }else{
                return client;
            }
        }else{
            return client;
        }
    }

    public boolean deleteClient(int clientId) {
        Boolean aBoolean = getClient(clientId).map(client -> {
            clientCrud.delete(client);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
}

