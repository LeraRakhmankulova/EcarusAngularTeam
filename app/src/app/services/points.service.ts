import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IPoint {
	id: number,
	img: string,
	address: string,
	fullAddress: string
	phone: string,
	description: string,
	timetable: string[],
	shop: string,
	items: string[]
}

const DataItems: Array<IPoint> = [
	{
		id: 1,
		img: '/assets/rabbish.png',
		address: 'ул.Кремлёвская, 88',
		fullAddress: 'Казань, Кремлёвская, 88',
		phone: '+7 (917) 888 88 88',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'H&M',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг', 'Стекло: от 2 кг']

	},
	{
		id: 2,
		img: '/assets/rabbish.png',
		address: 'ул.Кремлёвская, 35',
		fullAddress: 'Казань, Кремлёвская, 35',
		phone: '+7 (917) 355 35 35',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'Adidas',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
	},
	{
		id: 3,
		img: '/assets/rabbish.png',
		address: 'ул.Кремлёвская, 21',
		fullAddress: 'Казань, Кремлёвская, 21',
		phone: '+7 (917) 211 21 21',
		description: 'Пластик, стекло, бумага, металл, старая одежда, батареи, аккумуляторы...',
		timetable: ['Пн - Пт  08:00 - 20:00\n', 'Сб - Вс  10:00 - 18:00'],
		shop: 'NIKE',
		items: ['Пластик: от 5 кг', 'Стекло: от 2 кг']
	}
]
@Injectable({
	providedIn: 'root'
})
export class PointsService {
	collPoints$: BehaviorSubject<Array<IPoint>> = new BehaviorSubject<Array<IPoint>>(DataItems);
}

