
export type TSlots = {
    _id: string,
    startTime: string,
    endTime: string,
    isBooked: boolean
}
export type TSlot = {
    _id: string,
    astrologerId: string,
    date: string,
    slots: TSlots[];
}