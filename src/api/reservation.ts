import { API_RESERVATION } from '@/constants/API'
import { IReservationData } from '@/pages/reservation/components/sheet/pay-confirm-sheet/PayConfirmSheet.type'

import instance from './instance'

export const postReservation = (productId: number, data: IReservationData) => {
  return instance({
    method: 'POST',
    url: API_RESERVATION.RESERVATION(productId),
    data: data,
  })
}

export const getMyReservation = () => {
  return instance({
    method: 'GET',
    url: API_RESERVATION.RESERVATION_MY,
  })
}

export const getReservationDetail = (reservationId: number) => {
  return instance({
    method: 'GET',
    url: API_RESERVATION.RESERVATION_DETAIL(reservationId),
  })
}

export const cancelReservation = (reservationId: number) => {
  return instance({
    method: 'PATCH',
    url: API_RESERVATION.RESERVATION_CANCEL(reservationId),
  })
}