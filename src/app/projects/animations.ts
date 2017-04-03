import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const markedTrigger = trigger('markedState', [
	state('default', style({
		border: '1px solid black',
		backgroundColor: 'transparent',
		padding: '20px',
		transform: 'scale(1)'
	})),
	state('marked', style({
		border: '2px solid blue',
		backgroundColor: '#caeff9',
		padding: '19px'
	})),
	transition('default => marked', [
		style({
			border: '2px solid black',
			padding: '19px'
		}),
		animate('200ms ease-out', style({
			transform: 'scale(1.025)'
		})),
		animate(200)
	]),
	transition('marked => default', [
		style({
			border: '1px solid blue',
			padding: '20px'
		}),
		animate('300ms ease-out')
	])
]);

export const itemStateTrigger = trigger('itemState', [
	transition(':enter', [
		animate('750ms ease-out', keyframes([
			style({
				opacity: 0,
				transform: 'translateX(-100%)',
				offset: 0
			}),
			style({
				opacity: 1,
				transform: 'translateX(15%)',
				offset: 0.4
			}),
			style({
				opacity: 1,
				transform: 'translateX(0)',
				offset: 1
			})
		]))
	]),
	transition(':leave', [
		animate('750ms ease-in', keyframes([
			style({
				opacity: 1,
				transform: 'translateX(0)',
				offset: 0
			}),
			style({
				opacity: 1,
				tramsform: 'translateX(-15%)',
				offset: 0.4
			}),
			style({
				opacity: 0,
				transform: 'translateX(100%)',
				offset: 1
			})
		]))
	]),
	transition('slidUp => slidDown', [
		style({
			transform: 'translateY(-100%)'
		}),
		animate('300ms ease-out', style({
			transform: 'translateY(0)'
		}))
	]),
	transition('slidDown => slidUp', [
		style({
			transform: 'translateY(0)'
		}),
		animate('300ms ease-out', style({
			transform: 'translateY(-100%)'
		}))
	])
]);

export const slideStateTrigger = trigger('slideState', [
	transition(':enter', [
		style({
			transform: 'translateY(-100%)'
		}),
		animate('300ms ease-out', style({
			transform: 'translateY(0)'
		}))
	]),
	transition(':leave', [
		style({
			transform: 'translateY(0)'
		}),
		animate('300ms ease-out', style({
			transform: 'translateY(-100%)'
		}))
	])
]);