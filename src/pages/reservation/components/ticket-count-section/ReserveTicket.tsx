import * as S from './TicketCountSection.style'
import { IReserveTicketProps } from './TicketCountSection.type'

const ReserveTicket = ({
  ticketDto,
  ticketCounts,
  handleIncrease,
  handleDecrease,
}: IReserveTicketProps) => {
  return ticketDto?.map((ticketType) => (
    <S.Ticket key={ticketType.id}>
      <S.TicketType>{ticketType.name}</S.TicketType>
      <S.TicketCount>
        <S.MinusButton onClick={() => handleDecrease(ticketType.name)} />
        <S.Count>{ticketCounts[ticketType.name] ?? 0}개</S.Count>
        <S.PlusButton onClick={() => handleIncrease(ticketType.name)} />
      </S.TicketCount>
    </S.Ticket>
  ))
}

export default ReserveTicket