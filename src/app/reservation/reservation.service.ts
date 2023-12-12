import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = []
  constructor() {
    let savedReservations = localStorage.getItem("reservations");
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }
  getReservations(): Reservation[] {
    return this.reservations
  }
  getReservation(id: Reservation["id"]): Reservation | undefined {
    return this.reservations.find(res => res.id === id)
  }
  addReservation(newReservation: Reservation): void {
    this.reservations.push(newReservation)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
    console.log("reservation add", this.reservations);

  }
  deleteReservation(id: Reservation["id"]): void {
    let index = this.reservations.findIndex(res => res.id === id)
    this.reservations.splice(index, 1)
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
  updateReservation(selectedReservation: Reservation): void {
    let index = this.reservations.findIndex(res => res.id === selectedReservation.id)
    this.reservations[index] = selectedReservation
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }
}
