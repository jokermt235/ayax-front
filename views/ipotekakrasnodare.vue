<script>
import Banner from '../components/blocks/banner/banner.vue'
import container from '../components/layout/container.vue'
import Layout from "../components/layout/layout";
import Pagination from '../components/blocks/pagination/pagination.vue'
import Breadcrumbs from '../components/blocks/breadcrumbs/breadcrumbs.vue'
import InternalNav from '../components/blocks/internal-nav/internal-nav'
import InternalMenu from '../components/blocks/internal-menu/internal-menu'
import benefitCard from '../components/blocks/internal-card/internal-card'
import Profitably from '../components/blocks/profitably/profitably.vue' 
import Stocks from '../components/blocks/stocks/stocks.vue'
import Awards from '../components/blocks/awards/awards.vue'


export default {
	name: 'App',
		components: {
		Layout,
		Banner,
		container,
		Breadcrumbs,
		InternalNav,
		Awards,
		Pagination,
		InternalMenu,
		Profitably, 
		Stocks,
		benefitCard
	},
	data() {
		return {
			
			awardsItems: [
				{
					name: 'Покупка жилой недвижимости (на вторичном рынке)',
					description: '3% от итоговой стоимости объекта, но не менее 100 тыс.руб.'
				},
				{
					name: 'Покупка объектов от застройщика',
					description: 'без комиссии'
				},
				{
					name: 'Покупка коммерческой недвижимости',
					description: '0% (бесплатно) при выборе эксклюзивного объекта, 3% от стоимости при выборе обычного объекта'
				},
				{
					name: 'Покупка коммерческой недвижимости',
					description: '6% от стоимости объекта'
				},
			],
			stocksItems:[
				{
				   src: 'images/pages/internal-stocks/1.png', 
				   href: '/ipotaktsii-detail'
				},
				{
					src: 'images/pages/internal-stocks/1.png', 
					href: '/ipotaktsii-detail'
				},
				{
					src: 'images/pages/internal-stocks/1.png', 
					href: '/ipotaktsii-detail'
				}
			],
		  	profitablyItem: [
				{
					text: 'Бесплатную консультацию! Всю информацию об условиях ипотеки и подробности расчетов;'
				},
				{
					text: 'Скидки на процентную ставку от банков-партнеров, что экономит денежные средства;'
				},
				{
					text: 'Подача заявок по одному пакету документов;'
				},
				{
					text: 'Подбор лучшей ипотечной программы с учетом возможностей клиента;'
				},
				{
					text: 'Сопровождение при оформлении сделки;'
				},
				{
					text: 'Возможность согласования заявок дистанционно.'
				},
			],
			internalCardItems: [
				{
					name: 'Ольга Владимировна Шмакова',
					post: 'Начальник ипотечного центра',
					tel: '+7 918 197-01-97',
					src: '/images/pages/ipoteka-krasnodare/internal-card-chel.png'
				}

			],
			bannerBtns: [
				{
					path: '#',
					title: 'Подать заявку'
				},
				{
					path: '#',
					title: 'Видео-консультация'
				}
			],
            internalNavItems: [
                {
                    name: 'Сотрудники',
                    link: '/ipotechnyebrokery'
                },
                {
                    name: 'Акции',
                    link: '/ipotaktsii'
                },
                {
                    name: 'Новости',
                    link: '/news'
                },
            ],
			internalMenuItems: [
				{
					name: 'Для жилой недвижимости',
					link: '/dlya-zhilya',
					src: 'images/pages/ipoteka-krasnodare/1.png'
				},
				{
					name: 'Для коммерции',
					link: '/kommercheskayanedvizhimost',
					src: 'images/pages/ipoteka-krasnodare/2.png'
				},
				{
					name: 'Для покупки жилья в Крыму',
					link: '/krym-pokupka-zhilya',
					src: 'images/pages/ipoteka-krasnodare/3.png'
				},
				{
					name: 'Потребительский кредит',
					link: '/potrebitelskiy-kredit',
					src: 'images/pages/ipoteka-krasnodare/4.png'
				},
				{
					name: 'Ипотека для военных',
					link: '/voennaya',
					src: 'images/pages/ipoteka-krasnodare/5.png'
				},
				{
					name: 'Кредит под залог недвижимости',
					link: '/kredit-zalog-nedvizhimosti',
					src: 'images/pages/ipoteka-krasnodare/6.png'
				},
			],
			fetchedText: 'Интересуетесь ипотечными программами? Не знаете в какой банк обратиться, чтобы одобрили под низкий процент? Агентство недвижимости «АЯКС» решило за вас эти проблемы. Ипотека в Краснодаре стала более доступной благодаря нашим партнерским договоренностям с более чем 20 банками страны и более чем с 120 крупными, надежными застройщиками региона.',

		}
	}

}
</script>

<template lang="pug">
Layout
	Breadcrumbs(title="Сопровождение ипотеки")
	Banner(title="Ипотека в Краснодаре" src="images/ipoteka-bg.jpg" :bannerBtns="bannerBtns" bannerBlur noMargin)
	InternalNav( :internalNavItems="internalNavItems")
	InternalMenu( :internalMenuItems="internalMenuItems")
	container
		.text( v-html="fetchedText" )
	section.section
		.container
			.row
				.col
					.internal-benefit
						h2.title Что получает клиент ипотечного центра?
						benefitCard( :internalCardItems="internalCardItems")
						.internal-benefit--info
							Profitably(:profitablyItem="profitablyItem" classes="row-cols-2" vertical)
	Awards( :awardsItems="awardsItems" subtitle="Цены вознаграждения:" )
	Stocks( :stocksItems="stocksItems" title="Экономьте с АН «АЯКС»" text="Взять ипотеку в Краснодаре не сложно, главное, это добиться выгодных условий и комфортных платежей – с этим мы и поможем.")
</template>
