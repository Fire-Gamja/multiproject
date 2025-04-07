import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      title: '무엇을 하고 싶으세요?',
      ticket: '티켓구매',
      cinema: 'CGV 청주(서문)',
      print: '예매티켓출력',
      photo: '포토플레이',
      refund: '환불',
      korean: '한국어',
      english: 'ENGLISH',
      changeCinema: '영화관 및 예매일 변경',
      viewSchedule: '영화관별 상영 시간표 보기',
      buyTicket: '티켓구매'
    },
  },
  en: {
    translation: {
      title: 'What do you want to do?',
      ticket: 'Ticketing',
      cinema: 'CGV Cheongju Seomun',
      print: 'Ticket Printing',
      photo: 'Photoplay',
      refund: 'Refund',
      korean: '한국어',
      english: 'ENGLISH',
      changeCinema: 'Change of theater and date',
      viewSchedule: 'View timetables for each theater',
      buyTicket: 'Ticketing'
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
