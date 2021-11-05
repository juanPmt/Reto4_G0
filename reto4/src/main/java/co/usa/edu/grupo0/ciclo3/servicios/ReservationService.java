 /*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package co.usa.edu.grupo0.ciclo3.servicios;

/**
 *
 * @author EUSEBIO
 */

import co.usa.edu.grupo0.ciclo3.modelo.Reservation;
import co.usa.edu.grupo0.ciclo3.repositorio.ReservationRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationCrud;

    public List<Reservation> getAll() {
        return reservationCrud.getAll();
    }

    public Optional<Reservation> getReservation(int reservationId) {
        return reservationCrud.getReservation(reservationId);
    }

    public Reservation save(Reservation reservation) {
        if (reservation.getIdReservation() == null) {
            return reservationCrud.save(reservation);
        } else {
            Optional<Reservation> r = reservationCrud.getReservation(reservation.getIdReservation());
            if (!r.isPresent()) {
                return reservationCrud.save(reservation);

            } else {
                return reservation;
            }
        }
    }
    public Reservation update(Reservation reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservation> e= reservationCrud.getReservation(reservation.getIdReservation());
            if(e.isPresent()){

                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                if(reservation.getScore()!=null){
                    e.get().setScore(reservation.getScore());
                }
                reservationCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reservation -> {
            reservationCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    
    
}