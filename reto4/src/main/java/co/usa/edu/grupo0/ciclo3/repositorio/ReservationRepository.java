/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.repositorio;

import co.usa.edu.grupo0.ciclo3.modelo.Reservation;
import co.usa.edu.grupo0.ciclo3.repositorio.cruds.ReservationCrudRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author EUSEBIO
 */

@Repository
public class ReservationRepository {
    
    @Autowired
    private ReservationCrudRepository reservationCrud;
    
    public List<Reservation> getAll(){
        return (List<Reservation>) reservationCrud.findAll();
    }
    
    public Optional<Reservation> getReservation(int id){
        return reservationCrud.findById(id);
    }
    public Reservation save(Reservation reservation){
        return reservationCrud.save(reservation);
    } 
    public void delete(Reservation reservation){
        reservationCrud.delete(reservation);
    
    }
}